// # GeoAdmin.ch for OpenLayers 3
// https://github.com/geoadmin/web-storymaps
var map;
function initGeoAdmin() {
  
  // Swiss map project and extents
  var projection = ol.proj.configureProj4jsProjection({
    code: 'EPSG:21781',
    extent: [485869.5728, 76443.1884, 837076.5648, 299941.7864]
  });
  var extent = [420000, 30000, 900000, 350000];

  // Load pixel base map from GeoAdmin WMS server 
  var layers = [
    new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'http://wms.geo.admin.ch/',
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 
            '&copy; ' +
            '<a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">' +
            'Pixelmap 1:1000000 / geo.admin.ch</a>'
        })],
        params: {
          'LAYERS': 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale',
          'FORMAT': 'image/jpeg'
        },
        extent: extent
      })
    })
  ];

  // Initialise map
  map = new ol.Map({
    controls: ol.control.defaults({}, [
      new ol.control.ScaleLine({
        units: ol.control.ScaleLineUnits.METRIC
      })
    ]),
    layers: layers,
    /// renderers: ol.RendererHints.createFromQueryData(),
    renderer: ol.RendererHint.CANVAS,
    target: 'map',
    view: new ol.View2D({
      projection: projection,
      center: [660000, 190000],
      resolutions: [650.0, 500.0, 250.0, 100.0],
      zoom: 2
    }),
    /// restrictedExtent: extent // doesn't work!
  });

}
