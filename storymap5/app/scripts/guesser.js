// # SwissGuesser
// 
// (Story Map 5)
// 
// A game to look for historical pictures on a map.

// Main closure
var guesser = {

	// Default language is German
	lang: 'DE',
	supportedLangs: ['DE','FR','IT','EN'],

	// Anonymous user profile
	user: { 
		score: 0, 		// current score
		count: 5, 		// how many photos per game
		history: '',	// hash of previous game states
		collection: [], // holds metadata during game
		vectors: [], 	// holds shown vector layers
		badges: {}		// completion badges
	},

	// State variables
	config: null, 
	overlay: null, 
	overlayhtml: null,
	collection: null, 
	currentIndex: 0,
	currentAnswer: null, 
	active: false,
	layers: [], 
	query: {},

	// DOM references
	domOverlay: 	$('#map-overlay'),
	domResults: 	$('#d-result'),
	domLocator: 	$('#d-locator'),
	domBtnNext: 	$('#btn-continue'),
	domBtnMobile: 	$('#btn-continue-mobile'),
	domBtnStart: 	$('#btn-start'), 
	domBtnClose: 	$('#btn-close'), 
	domBtnGuess:  	$('#btn-guess'), 
	domBtnFinish: 	$('#btn-finish'),
	domStartBox: 	$('#d-start'),
	domFinishBox: 	$('#v-finish'), 
	domPhotoBox: 	$('#d-photobox'), 
	domLightBox: 	$('#d-lightbox'), 
	domPhotoInf: 	$('#row-info'),

	// Cached assets
	assetcache:['images/1.png', 'images/2.png', 'images/3.png', 
				'images/4.png', 'images/5.png', 'images/G.png'],

	// ### Initial setup
	configure: function(json, l) {

		var self = this;
		self.config = json.conf;

		// Prepare image collection
		self.collection = [];
		$.each(json.data, function() {
			this.src = self.config.dataPrefix + this.id + self.config.dataSuffix;
			self.collection.push(this);
		});

		// Detect language
		l = l.toUpperCase();
		if (l.length > 2) l = l.substr(0,2);
		if (this.supportedLangs.indexOf(l >= 0)) this.lang = l;

		// Check for anchor and clear it
		if (location.href.indexOf('#')>0) 
			  location.href = location.href.substring(0, 
			  	location.href.lastIndexOf('/'));

		// Set up user interface
		this.parseQuery();
		this.initLayout(this);
	},

	// ### GET variables from request query
	parseQuery: function() {
		var sSearch = window.location.search;
		if (sSearch.length > 1) {
			for (var aItKey, nKeyId = 0, aCouples = sSearch.substr(1).split("&"); 
					nKeyId < aCouples.length; nKeyId++) {
				aItKey = aCouples[nKeyId].split("=");
				this.query[unescape(aItKey[0])] = 
					aItKey.length > 1 ? unescape(aItKey[1]) : "";
			}
		}
		///console.log(this.query);
	},

	is: {
		mobile: function() { return $(window).width() <= 768 && $(window).height() < 1024; }
	},

	// ### User Interface setup
	initLayout: function(self) {

		// Window resizing
		self.resize();
		$(window).on('resize', function() { self.resize(); });

		// New window all external links
		// (Done after i18n init)
		//$('a[href^="http:"]').attr('target', '_blank');

		// Language of header links
		$('#webHeaderLinks a').each(function() {
			$(this).attr('href',
				$(this).attr('href') + '?lang=' + self.lang.toLowerCase()
			);
		});

		// Language of browser warning
		var browsehappy = 'http://browsehappy.com/?locale=' + self.lang.toLowerCase();
		$('.browsehappy a').attr('href', browsehappy);

		// Don't display warning in Compatibility Mode
		if (document.documentMode && document.documentMode == 9)
			$('.browsehappy').hide();

		// Language highlight in menu
		$('#language li a[lang="' + this.lang.toLowerCase() + '"]')
			.addClass('active');

		// Language of copyright link
		$('#s-copyright').each(function() {
			$(this).attr('href', 
				$(this).attr('href').replace('/de/', 
					'/' + self.lang.toLowerCase() + '/')); });

		// Fullscreen mode
		self.domLightBox.on('shown.bs.modal', function () {
			$('.modal-backdrop.in').css('opacity', 1);

			// Stretch image to fill (default: width 100%)
			if ($(window).width() < $(window).height()) {
				$('img', this).attr('width', '')
					.attr('height', $(window).height());
			}
		}).on('hidden.bs.modal', function () {
			// Clear backdrops properly (bug?)
			$('.modal-backdrop.in').remove();
		});

		// Init photo zoom and tooltip
		$('.d-photo', self.domPhotoBox).click(function() {
			self.domLightBox.modal();
		}).tooltip({
			title: $('.d-photo-text').text(),
			placement: 'bottom',
			container: 'body',
			delay: { show: 500, hide: 100 }
		}).on('shown.bs.tooltip', function () {
			// Hide the tooltip if the lightbox is showing
			if (self.domLightBox.hasClass('in'))
				$(this).tooltip('hide');
		});
		// Show extra on-click tip when not on mobile
		$('#row-info button:first').click(function(){ 
			if (!self.is.mobile()) {
				$('.d-photo', self.domPhotoBox).tooltip('show'); 
				setTimeout(function() {
					$('.d-photo', self.domPhotoBox).tooltip('hide'); 
				}, 3000);
			}
		});

		// Bind guess button
		$(self.domBtnGuess).click(function(evt) {
			$(self.overlay.getElement()).hide();
			$(this).addClass('disabled');
			evt.preventDefault(); 
			self.guess();
			return false;
		});

		// Bind continue button
		this.domBtnNext.click(function() {
			$(this).addClass('hidden');
			self.domBtnGuess
				.removeClass('disabled').addClass('hidden')
					.prev().removeClass('hidden');
			guesser.next();
		});

		// Bind second continue button (mobile)
		this.domBtnMobile.click(function() {
			$(this).addClass('hidden');
			guesser.domBtnNext.removeClass('hidden');
			// Scroll to bottom of results box
			setTimeout(function() {
				guesser.domResults.animate({ scrollTop: 
					guesser.domResults[0].scrollHeight}, 1000);
			}, 100);
		});

		// Bind switcher buttons
		$('.mobile-switch button').click(function() {
			var t = $(this).attr('data-target');
			var tgt = $(t);
			$('.container-main > div.on').removeClass('on');
			tgt.addClass('on');
			var navMobileSwitch = $('.navbar-toggle.mobile-switch');
			$('.active', navMobileSwitch)
				.removeClass('active')
				.parent().find('[data-target="' + t + '"]')
					.addClass('active');
			$('.slideleft,.slideright').removeClass('slideleft slideright');
			if (t == '#column-map') {
				if (map) map.updateSize();
				tgt.addClass('slideleft');
			} else {
				tgt.addClass('slideright');
			}
		});
		//$('.container-main > div.on:last').removeClass('on');

		// Show start game
		$('#d-start').modal();
	},

	// ### Position the map container
	resize: function() {
		var frameheight = $(window).height(),
			headheight = $('#header').height(),
			footheight = $('#row-info').height();
		frameheight -= headheight + footheight;
		// Adjust height to fit screen
		$('.container-main')
			.css('height', parseInt(frameheight - 25) + 'px');
		$('.d-photo', this.domPhotoBox)
			.css('height', parseInt(frameheight - 26) + 'px');
		//this.domPhotoBox.scrollTop(this.domPhotoBox.height()*2);
		if (map && typeof map.updateSize == 'function') map.updateSize();
	},

	// ### Load image data
	loader: function(metadata) {
		if (typeof metadata == 'undefined') return;

		// Get image data
		var imgbox = this.domPhotoBox, infobox = this.domPhotoInf;

		// Load images
		$('.d-photo').css('background-image', 'url(' + metadata.src + ')');
		$('img', this.domLightBox).attr('src', metadata.src);
		$('img', this.domResults).attr('src', metadata.src);

		// Populate components
		$('h4', infobox).attr('title', metadata.id);
		$('.image-count', infobox).html(this.currentIndex+1);
		$('.image-total', infobox).html(this.user.collection.length);
		$('.total', infobox).html(this.user.score);

		// Result box description
		$('.info p', this.domResults).html(metadata[this.lang]);
		///console.log('Loading image', metadata.id, this.lang);
	
		// Start the challenge
		guesser.challenge(map, [metadata.y, metadata.x]);

	},

	// ### Continue to next image
	next: function() {

		++this.currentIndex;
		///console.log("Advancing to next image", this.currentIndex);

		// Continue to next image
		this.loader( this.user.collection[this.currentIndex] );

		// On mobile, switch tabs
		$('.mobile-switch button:first').click();

		// Re-center map
		geoadmin.reset();

		// Fade all previous answers
		this.fadeLayers(0.5);

	},

	// ### Get the next random image
	getImage: function(ix) {
		// Keep track of infinite recursion
		if (++this.igetctr > 10) return this.collection[0];
		// Get a random image
		var l = this.collection.length;
		var i = parseInt(Math.random() * l);
		// Get requested image
		if (ix != null && ix >= 0 && ix < this.collection.length) {
			i = ix;
		}
		var r = this.collection[i];
		// Make sure we have not already included it
		///console.log('Picking', i, '/', l);
		if (r.shown) {
			return this.getImage(null);
		} else {
			r.shown = true;
			r.ix = i;
			return r;
		}
	},

	// ### Start challenge convenience function
	start: function() {
		if (this.collection == null)
			return alert('Error: data unavailable, cannot start');

		// Initialize image list
		this.user.collection = [];

		// Reset guess vectors
		this.user.vectors = [];

		// Load game history
		var queryhist = this.query['history'];
		if (queryhist) {
			// Shared game collection
			var gamecoll = this.collection,
				g = queryhist.split('');
			if (g.length < gamecoll.length) {
				queryhist = '';
				g.forEach(function(h) {
					queryhist += h;
					var ix = h.charCodeAt(0) - 97;
					// Prevent this image from being shown again
					if (ix != null && typeof gamecoll[ix] != 'undefined') {
						gamecoll[ix].shown = true;
					}
				});
				// History enabled
				this.user.history = queryhist;
				// Close starting dialogue
				$('#d-start').modal('hide');
			} else {
				this.user.badges['completed'] = true;
			}
		}

		if (this.query['game']) {
			// Shared game collection
			var g = this.query['game'].split('');
			if (g.length == this.user.count) {
				for(var i = 0; i < this.user.count; i++) {
					var ix = g[i].charCodeAt(0) - 97;
					this.user.collection.push(this.getImage(ix));
				}
			} else {
				// Restart the game
				window.alert('Invalid game code');
				window.location.href = window.location.origin;
				return;
			}
		} else if (this.query['debug']) {
			// Debug: all images
			for(var i = 0; i<this.collection.length; i++) {
				this.collection[i].shown = true;
				this.user.collection.push(this.collection[i]);
			}
			if (this.query['i']) {
				this.currentIndex = parseInt(this.query['i'])-1;
			}
		} else {
			// Default: random image collection
			for (var i = 0; i < this.user.count; i++) {
				this.igetctr = 0;
				this.user.collection.push(this.getImage(null));
			}
		}

		// For debugging, show loaded sequence
		if (this.query['debug']) {
			var cc = [];
			this.user.collection.forEach(function(c) { cc.push(c.id) });
			console.log(cc);
		}

		// Preload the photo images
		$(this.user.collection).each(
			function() { $('<img/>')[0].src = this.src; });

		// Preload additional assets
		$(this.assetcache).each(
			function() { $('<img/>')[0].src = this; });

		// Load the first image
		this.loader(this.user.collection[this.currentIndex]);

		// Clear loader
		$('#loading').remove();
		$('.container-main > .hidden').removeClass('hidden');
		$('.container-main > .hidden').removeClass('hidden');
	},

	// ### Game over
	finish: function() {

		var self = this;

		// Reset guess opacity after a few seconds
		setTimeout(function() { self.fadeLayers(1); }, 4000);

		// Get game location
		var url = window.location.protocol + "//" + window.location.host + "/";
		
		// Generate a hash of the current game
		var hash = "";
		for (var i = 0; i < self.user.count; i++) {
			if (self.user.collection[i])
				hash += String.fromCharCode(self.user.collection[i].ix + 97);
		}

		// Create permalink and new game link
		var permalink = url + "?game=" + hash,
			histolink = url + "?history=" + hash + self.user.history;

		// For local devs
		if (document.location.hostname == 'localhost')
			return self.share(permalink, histolink);

		// Generate shortened URL
		$.ajax({
			url: "https://api.geo.admin.ch/shorten.json",
			jsonp: "cb",
			data: { "url": permalink },
			success: function(data) {
				self.share(data['shorturl'], histolink);
			},
			error: function() {
				// Use full link instead (e.g. local dev)
				self.share(permalink, histolink);
			}
		});

	},

	// ### Populate share box
	share: function(permalink, histolink) {

		var msg = i18n.t('Share-Message', 
					{score: guesser.user.score}),
			txt = i18n.t('Finish-Text', 
					{score: '<b>' + guesser.user.score + '</b>'}),
			shb = $('.sharebox');

		// Populate copy link box
		var shareform = $('.shareform', shb);
		$('input', shareform).hide().val(permalink);
		$('input, button', shareform).click(function() {
			var slink = $('.sharebox .shareform input').fadeIn()[0];
			// In most browsers just do a handy select
			if (slink) slink.select();
			// If access to clipboard is supported
			if (window.clipboardData) 
				window.clipboardData.setData('URL', permalink);
		});
		$('a', shareform).attr('href', permalink).click(function(evt) {
			evt.preventDefault();
		});

		// Populate Email share box
		$('.btn-email', shb).click(function() {
			location.href = 'mailto:?subject=' 
				+ msg + '&body=' + permalink;
			return false;
		});
		
		// Share link on Twitter
		$('.btn-twitter', shb).click(function() {
			window.open('https://twitter.com/intent/tweet?text='
				+ msg + ' ' + permalink, '_blank', 'height=260,width=500');
			return false;
		});

		// Share link on Facebook
		// TODO: advanced implementation requires app registration
		// 		 https://developers.facebook.com/docs/reference/dialogs/feed/
		$('.btn-facebook', shb).click(function() {
			window.open('https://www.facebook.com/sharer/sharer.php?u='
				+ encodeURIComponent(permalink), 'facebook-share-dialog', 'width=626,height=436');
			return false;
		});

		// User facing text message
		$('.message', guesser.domFinishBox).html(txt);

		// Navigate directly to photo/info on mobile
		if (guesser.is.mobile()) {
			guesser.domBtnNext.click();
		}

		// UI buttons, game restart
		guesser.domBtnNext.parent().find('button').addClass('hidden');
		guesser.domFinishBox.removeClass('hidden');

		// Set up new game link
		guesser.domBtnFinish.attr('data-href', histolink)
			.click(function() { location.href = $(this).attr('data-href'); });

		// Pause 2 seconds before showing new game button
		setTimeout(function() { guesser.domBtnFinish.hide().removeClass('hidden').fadeIn(); }, 2000);
	},

	// ### User starts making a guess 
	challenge: function(olMap, coordinates) {

		// Save the correct answer
		this.currentAnswer = coordinates;
		
		this.clear();
		this.active = true;

		// Hide buttons when guessing
		$('.btn.overlay').addClass('hidden');

		// On re-init, clear map
		if (this.overlay != null) { return; }
		
		// Save overlay content and clear
		this.overlayhtml = this.domOverlay.html();
		this.domOverlay.html('');

		// Create an Overlay
		this.overlay = new ol.Overlay({ element: this.domOverlay[0] });
		olMap.addOverlay(this.overlay);

		// Bind click event to map
		olMap.on('singleclick', function(evt) { guesser.place(evt); });

		// Prevent rotation (due to iOS vector bug)
		map.getView().on('change:rotation', function() {
			setTimeout(function() {	map.getView().setRotation(0); }, 100);
		});

	}, // -- challenge

	// ### Clear map of answers
	clear: function() {

		$.each(this.layers, function() {
			map.removeLayer(this);
		});
		this.layers = [];
		this.domResults.addClass('hidden');
		this.active = false;

	}, // -- clear

	// ### Place an answer
	place: function(evt) {

		var self = this;
		if (!self.active) return;

		// Update placement
		var element = $(self.overlay.getElement());
		this.position = evt.getCoordinate();
		///console.log(this.position);

		element.css({
			'background-image': "url('images/" + (self.currentIndex+1) + ".png')",
			'margin-top': "-31px"
		});
		
		element.popover('destroy');
		self.overlay.setPosition(this.position);

		// Show the overlay
		element.popover({ 
			'placement': 'top',
			'animation': false, 
			'html': true, 
			'content': this.overlayhtml
		});
		element.popover('show').show();
    
		// Enable link button
		$(self.domBtnGuess).prev().addClass('hidden');
		$(self.domBtnGuess).removeClass('hidden');

	}, // -- place

	// ### Submit a guess
	guess: function() {
		///console.log('Making guess', this.currentIndex, this.position, this.currentAnswer);
	
		// Deactivate guessing for this round
		this.active = false;

		// Sets up a new vector layer
		var vectorGuess = this.getVector(
			this.currentIndex+1, this.position, this.currentAnswer);

		// Add layer to the map
		map.addLayer(vectorGuess);

		// Fade previous guesses
		this.user.vectors.forEach(function(l) { l.setOpacity(0.5); });
		this.user.vectors.push(vectorGuess);

		// Center map on guess
		var minx = (this.position[0] < this.currentAnswer[0]) ? 
							this.position[0] : this.currentAnswer[0],
			maxx = (this.position[0] >= this.currentAnswer[0]) ? 
							this.position[0] : this.currentAnswer[0],
			miny = (this.position[1] < this.currentAnswer[1]) ? 
							this.position[1] : this.currentAnswer[1],
			maxy = (this.position[1] >= this.currentAnswer[1]) ? 
							this.position[1] : this.currentAnswer[1];
		
		// Pad the extents to try to fix the issue
		var escale = 10000;
		var extent = [Math.round(minx)-escale, Math.round(miny)-escale, 
					  Math.round(maxx)+escale, Math.round(maxy)+escale];
		///console.log('Zooming to', extent);

		// Fly from guess to answer
		this.startAnim(
			/** @type {ol.Coordinate} */ 
			[this.position[0], this.position[1]], 
			/** @type {ol.Coordinate} */ 
			[this.currentAnswer[0], this.currentAnswer[1]],
			/** @type {ol.Extent} */ 
			extent
		);

		// Calculate distance to answer (km)
		var dist = geoadmin.getDistanceEuclidian(
			this.position, this.currentAnswer) / 1000;

		// Calculate score
		var score = (dist < 260) ? 
			Math.floor(-824.693 * Math.log(0.00340872 * dist) / 100.0)*100
			: 0;
		score = (score > 4500) ? 4500 : score;
		this.user.score += score;

		// Hide the overlays
		this.domOverlay.popover('hide');
		this.domLocator.addClass('hidden');

		// Update dialog with score results
		$('.score', this.domResults).html(score);
		$('.total', this.domResults).html(this.user.score);
		$('.distance', this.domResults).html(parseInt(dist) + " km");
		$('.total', this.domPhotoInf).html(this.user.score);
		
		// Generate a comment
		var comment = (score < 1000) ? "Result-1" :
		              (score < 2000) ? "Result-2" : "Result-3";
		this.domResults.find('.comment').html(i18n.t(comment));

		// Show dialog and get ready to continue the game
		this.domResults.removeClass('hidden');
		this.domBtnNext.parent().find('button').addClass('hidden');

		// Two-step continue when on mobile screens
		if (this.is.mobile()) {
			this.domBtnMobile.removeClass('hidden');
		} else {
			this.domBtnNext.removeClass('hidden');
		}

		// Disable "start" button
		$(this.domBtnStart).addClass('hidden');
		$(this.domBtnClose).removeClass('hidden');

		// Check end game status
		if (this.currentIndex+1 == this.user.collection.length) {
			this.finish();
		}

	}, // -- guess

	// ### Animates transitions between points
	startAnim: function(flyFrom, flyTo, flyExtent) {

		var view = map.getView().getView2D();

		// Fly to the answer
		setTimeout(function() {
			var speed = 1200;
			var start = +new Date();
			var pan = ol.animation.pan({
				start: start,
				duration: speed,
				source: (view.getCenter())
			});
			var zoom = ol.animation.zoom({
				start: start,
				duration: speed,
				resolution: (view.getResolution()),
				easing: ol.easing.linear
			});
			map.beforeRender(pan, zoom);
			// Fit viewport on guess and answer
			view.fitExtent(flyExtent, map.getSize());
			view.setResolution(view.getResolution() + 100);
		}, 100);

	}, // -- startAnim

	// ### Sets the opacity of guess layers
	fadeLayers: function(opacity) {
		guesser.user.vectors.forEach(function(l) { l.setOpacity(opacity); });
	},

	// ### Creates vector feature for a guess
	getVector: function(label, from, to) {
		var imageUrl = 'images/' + label + '.png';
		var style = new ol.style.Style({ rules: [
				// Lines
				new ol.style.Rule({
					filter: 'geometryType("LineString")',
					symbolizers: [ new ol.style.Stroke({
						color: '#f70',
						width: 3,
						opacity: 1
					}) ]
				}),
				// Starting point
				new ol.style.Rule({
					filter: 'geometryType("Point") && which == "guess"',
					symbolizers: [ new ol.style.Icon({
						url: imageUrl,
						width: 32, height: 64
					}) ]
				}),
				// Ending point 
				new ol.style.Rule({
					filter: 'geometryType("Point") && which == "answer"',
					symbolizers: [ new ol.style.Icon({
						url: 'images/G.png',
						width: 32, height: 64
					}) ]
				})
			] }); // -- style
		
		var features = [
			new ol.Feature({
				// Starting point (the guess)
				label: label, which: 'guess',
				geometry: new ol.geom.Point(from)
			}),
			new ol.Feature({
				// Ending point (the real answer)
				label: label, which: 'answer',
				geometry: new ol.geom.Point(to)
			}),
			new ol.Feature({
				// Line from A to B
				color: '#fff',
				geometry: new ol.geom.LineString([from, to])
			})
		];

		return new ol.layer.Vector({
			style: style,
			source: new ol.source.Vector({
			 features: features
			})
 		});
	} // -- getVector
};

///Useful for iOS debugging (disable in production!)
///window.onerror = function(m,u,l) { alert(m+'\n'+u+'\n'+l); };

$('#loading').removeClass('hidden');

// Load translation (i18next)
i18n.init({ 
	  detectLngQS: 'lang', 
	  fallbackLng: 'en',
	  resGetPath: 'data/locale/__lng__/__ns__.json',
	  //useLocalStorage: true, localStorageExpirationTime: 86400000
	}, function(t) { 
		$("*[data-i18n]").i18n();
		// New window all external links
		$('a[href^="http:"]').attr('target', '_blank');
	});

$(window).load(function() { 
	geoadmin.init(); // Load the map
	
	$.getJSON('data/base.json', function(d) { 

		var lang = i18n.detectLanguage();
		guesser.configure(d, lang); // Load data
		guesser.start(); // Start the game

	});
});