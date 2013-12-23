// # GeoAdmin.ch for OpenLayers 3
// https://github.com/geoadmin/web-storymaps

// Swiss map extents
var swissExtent = [420000, 900000, 30000, 350000];
  /// [485869.5728, 837076.5648, 76443.1884, 299941.7864]

// Swiss geographic projection
var swissProjection = ol.proj.configureProj4jsProjection({
  code: 'EPSG:21781', extent: swissExtent
});

var layers = [
  // Load pixel base map from GeoAdmin WMS server 
  new ol.layer.TileLayer({
    source: new ol.source.TiledWMS({
      url: 'http://wms.geo.admin.ch/',
      crossOrigin: 'anonymous',
      attributions: [new ol.Attribution(
          '&copy; ' +
          '<a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">' +
          'Pixelmap 1:1000000 / geo.admin.ch</a>')],
      params: {
        'LAYERS': 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale',
        'FORMAT': 'image/jpeg'
      },
      extent: swissExtent
    })
  })/*,
  // Add an additional GeoAdmin tile layer (optional)
  new ol.layer.TileLayer({
    source: new ol.source.TiledWMS({
      url: 'http://wms.geo.admin.ch/',
      crossOrigin: 'anonymous',
      attributions: [new ol.Attribution(
          '&copy; ' +
          '<a href="http://www.geo.admin.ch/internet/geoportal/en/home.html">' +
          'National parks / geo.admin.ch</a>')],
      params: {'LAYERS': 'ch.bafu.schutzgebiete-paerke_nationaler_bedeutung'},
      extent: swissExtent
    })
  })*/
];

// Initialise map
/*
var map = new ol.Map({
  controls: ol.control.defaults({}, [
    new ol.control.ScaleLine({
      units: ol.control.ScaleLineUnits.METRIC
    })
  ]),
  layers: layers,
  renderers: ol.RendererHints.createFromQueryData(),
  //renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    projection: swissProjection,
    center: [660000, 190000],
    resolutions: [650.0, 500.0, 250.0, 100.0],
    zoom: 2
  }),
  restrictedExtent: swissExtent
});
*/

var style = new ol.style.Style({rules: [
  new ol.style.Rule({
    filter: 'where == "outer"',
    symbolizers: [
      new ol.style.Line({
        strokeColor: ol.expr.parse('color'),
        strokeWidth: 4,
        opacity: 1
      })
    ]
  }),
  new ol.style.Rule({
    filter: 'where == "inner"',
    symbolizers: [
      new ol.style.Line({
        strokeColor: '#013',
        strokeWidth: 4,
        opacity: 1
      }),
      new ol.style.Line({
        strokeColor: ol.expr.parse('color'),
        strokeWidth: 2,
        opacity: 1
      })
    ]
  }),
  new ol.style.Rule({
    filter: 'geometryType("point")',
    symbolizers: [
      new ol.style.Shape({
        size: 40,
        fillColor: '#013'
      }),
      new ol.style.Text({
        color: '#bada55',
        text: ol.expr.parse('label'),
        fontFamily: 'Calibri,sans-serif',
        fontSize: 14
      })
    ]
  })
]});

var vector = new ol.layer.Vector({
  style: style,
  source: new ol.source.Vector({
    data: {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'properties': {
          'color': '#BADA55',
          'where': 'inner'
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [[-10000000, -10000000], [10000000, 10000000]]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'color': '#BADA55',
          'where': 'inner'
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [[-10000000, 10000000], [10000000, -10000000]]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'color': '#013',
          'where': 'outer'
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [[-10000000, -10000000], [-10000000, 10000000]]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'color': '#013',
          'where': 'outer'
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [[-10000000, 10000000], [10000000, 10000000]]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'color': '#013',
          'where': 'outer'
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [[10000000, 10000000], [10000000, -10000000]]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'color': '#013',
          'where': 'outer'
        },
        'geometry': {
          'type': 'LineString',
          'coordinates': [[10000000, -10000000], [-10000000, -10000000]]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'label': 'South'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [0, -6000000]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'label': 'West'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-6000000, 0]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'label': 'North'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [0, 6000000]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'label': 'East'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [6000000, 0]
        }
      }]
    },
    parser: new ol.parser.GeoJSON(),
    projection: ol.proj.get('EPSG:3857')
  })
});

/*
var map = new ol.Map({
  layers: [vector],
  controls: ol.control.defaults({
    attribution: false
  }),
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 1
  })
});

var map = new ol.Map({
  controls: ol.control.defaults({}, [
    new ol.control.ScaleLine({
      units: ol.control.ScaleLineUnits.METRIC
    })
  ]),
  layers: [vector],
  //renderers: ol.RendererHints.createFromQueryData(),
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    projection: swissProjection,
    center: [660000, 190000],
    resolutions: [650.0, 500.0, 250.0, 100.0],
    zoom: 2
  }),
  restrictedExtent: swissExtent
});
*/