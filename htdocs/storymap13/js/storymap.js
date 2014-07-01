var map;


// source: http://www.hnldesign.nl/work/code/debouncing-events-with-jquery/
var deBouncer = function($, cf, of, interval) {
  // deBouncer by hnldesign.nl
  // based on code by Paul Irish and the original debouncing function from
  // John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function(func, threshold, execAsap) {
    var timeout;
    return function debounced() {
      var obj = this,
          args = arguments;

      function delayed() {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      }
      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);
      timeout = setTimeout(delayed, threshold || interval);
    };
  };
  jQuery.fn[cf] = function(fn) {
    return fn ?
        this.bind(of, debounce(fn)) : this.trigger(cf);
  };
};




function initSlider(ratio) {
  map.swipe_ratio = ratio || 0.40;
  $('.draggable').draggable({
    containment: '#map',
    cursor: 'pointer',
    axis: 'x',
    drag: function(evt, ui) {
      map.swipe_ratio = ui.position.left / $(map.getViewport()).width();
      map.render();
    }
  });
  $('.ga-swipe').mouseover(function() {
    $('.ga-swipe-layer-label').show();
  });
  $('.ga-swipe').mouseout(function() {
    $('.ga-swipe-layer-label').hide();
  });
  var left = $(map.getViewport()).width() * map.swipe_ratio;
  $('.ga-swipe').css('left', left + 'px');
}

deBouncer(jQuery, 'smartdrag', 'drag', 350);


function swipe(layer) {
  layer.on('precompose', function(event) {
    var ctx = event.context;
    var width = ctx.canvas.width * (map.swipe_ratio);

    ctx.save();
    ctx.beginPath();
    ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
    ctx.clip();
  });

  layer.on('postcompose', function(event) {
    var ctx = event.context;
    ctx.restore();
  });
}


function swipeLayer(layer) {
  if (layer instanceof ol.layer.Group) {
    var layers = layer.getLayers();
    layers.forEach(function(lyr) {
      swipe(lyr);
    });
  } else {
    swipe(layer);
  }
}




function init() {

  var resolutions = [4000, 3750, 3500, 3250, 3000, 2750, 2500, 2250, 2000, 1750, 1500, 1250, 1000, 750, 650.0, 500.0, 250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5];
  var matrixIds = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
  ];
  var template =
      '{Layer}/{Style}/{Time}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg';
  var urls = [
    'http://wmts5.geo.admin.ch/1.0.0/' + template,
    'http://wmts6.geo.admin.ch/1.0.0/' + template,
    'http://wmts7.geo.admin.ch/1.0.0/' + template,
    'http://wmts8.geo.admin.ch/1.0.0/' + template,
    'http://wmts9.geo.admin.ch/1.0.0/' + template
  ];

  var source = new ol.source.WMTS({
    extent: [420000, 30000, 900000, 350000],
    projection: 'EPSG:21781',
    dimensions: {
      'Time': '20130903'
    },
    layer: 'ch.swisstopo.pixelkarte-farbe-pk25.noscale',
    style: 'default',
    matrixSet: '21781',
    urls: urls,
    requestEncoding: /** @type {ol.source.WMTSRequestEncoding} */ ('REST'),
    tileGrid: new ol.tilegrid.WMTS({
      origin: [420000, 350000],
      resolutions: [650.0, 500.0, 250.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.5, 2.0, 1.5, 1.0, 0.5],
      matrixIds: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    })
  });

  var old_wmts = new ol.layer.Tile({
    source: source
  });


  var new_wmts = ga.layer.create('ch.swisstopo.pixelkarte-farbe-pk25.noscale');
  new_wmts.setOpacity(1.0);

  map = new ga.Map({
    target: 'map',
    layers: [old_wmts, new_wmts],
    view: new ol.View2D({
      resolution: 5,
      center: [646300, 249000]
    })
  });


  initSlider(0.4);
  swipeLayer(new_wmts);
}
