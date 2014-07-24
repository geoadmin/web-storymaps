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
  var top = ($('#map').height() -  $('.ga-swipe-arrows').height()) / 2;
  $('.ga-swipe-arrows').css('top', top + 'px');
}

deBouncer(jQuery, 'smartdrag', 'drag', 350);
deBouncer(jQuery,'smartresize', 'resize', 200);


$(window).smartresize(function(e){
  var viewport_width = $(map.getViewPort()).width();
  var left = viewport_width * map.swipe_ratio;
  if (left > viewport_width) {
      initSlider()
  } else {
      var ratio = left/viewport_width;
      initSlider(ratio);
  }
})


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



