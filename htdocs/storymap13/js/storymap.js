var map;



function init() {

  var easting = parseFloat(getURLParameter('easting')) || 632250.62;
  var northing = parseFloat(getURLParameter('northing')) || 170615.85;

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
    view: new ol.View({
      resolution: 2.5,
      center: [ easting, northing]
    })
  });


  initSlider(0.5);
  swipeLayer(new_wmts);
}
