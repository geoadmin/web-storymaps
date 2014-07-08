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

function handlePreCompose(event) {

  var ctx = event.context;
  var width = ctx.canvas.width * (map.swipe_ratio);

  ctx.save();
  ctx.beginPath();
  ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
  ctx.clip();
}

function handlePostCompose(event) {
  var ctx = event.context;
  ctx.restore();
}

function swipe(layer) {
  if (layer instanceof ol.layer.Group) {
    layer.getLayers().forEach(function(olLayer, idx, arr) {
      olLayer.on('precompose', handlePreCompose);
      olLayer.on('postcompose', handlePostCompose);
    });
  } else {
    layer.on('precompose', handlePreCompose);
    layer.on('postcompose', handlePostCompose);
  }
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

  var hiks = ga.layer.create('ch.swisstopo.hiks-siegfried');

  var geotope = ga.layer.create('ch.swisstopo.geologie-geotope');
  var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
  var group = new ol.layer.Group({layers: [layer, geotope]});


  map = new ga.Map({
    target: 'map',
    layers: [hiks, group],
    tooltip: false,
    view: new ol.View2D({
            resolution: 5,
            center: [626400, 106200]
    })
  });

  initSlider(0.47);
  swipeLayer(group);
}
