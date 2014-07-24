var map;




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
