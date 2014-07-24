var api, map;

var vectorSource;

function createFeature(coords, title, html) {

  return new ol.Feature({
    geometry: new ol.geom.Point(coords),
    title: title,
    html: html
  });
}


function init() {


  var defaultStyle = {
    'Point': [new ol.style.Style({
      image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
        src: 'img/vision.png'
      }))

    })]
  };


  var styleFunction = function(feature, resolution) {
    var featureStyleFunction = feature.getStyleFunction();
    if (featureStyleFunction) {
      return featureStyleFunction.call(feature, resolution);
    } else {
      return defaultStyle[feature.getGeometry().getType()];
    }
  };


  vectorSource = new ol.source.Vector({
    features: []
  });


  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: styleFunction
  });

  // Create a GeoAdmin Map
  var map = new ga.Map({
    target: 'map',
    view: new ol.View2D({
      resolution: 500,
      center: [670000, 160000]
    })
  });

  var base = ga.layer.create('ch.swisstopo.pixelkarte-farbe');

  map.addLayer(base);
  map.addLayer(vectorLayer);


  var findFeatures = function(pixel) {
    var features = [];
    map.forEachFeatureAtPixel(pixel, function(feature, vectorLayer) {
      features.push(feature);
    });
    return features;
  };

  var displayFeatureInfo = function(pixel, coordinate) {
    var features = findFeatures(pixel);
    var feature = features[0];
    if (feature) {
      $('#feature-info-title').text(feature.get('title'));
      $('#feature-info-body').html(feature.get('html'));
      $('#feature-info').modal('show')
    } 
  };

  map.on('singleclick', function(evt) {
    var pixel = evt.pixel;
    var coordinate = evt.coordinate;
    displayFeatureInfo(pixel, coordinate);
  });
  populate();

}

function populate() {
  vectorSource.addFeature(createFeature([680000, 250000], 'Zürich', '<iframe width="420" height="315" src="http://www.youtube.com/embed/kSPdCR7uTBo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/173ca3f98" target="_blank">' +   i18n.t('text.link_zur_zeitreisen')  + '</a></div><br>'));


  vectorSource.addFeature(createFeature([499800, 117900], 'Genève', '<iframe width="420" height="315" src="http://www.youtube.com/embed/HN67CI57Ufo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/5512cc170" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));


  vectorSource.addFeature(createFeature([612022, 267408], 'Basel', '<iframe width="420" height="315" src="http://www.youtube.com/embed/BDoUtHYW-nk?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/e968baadc" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([538688, 153161], 'Lausanne', '<iframe width="420" height="315" src="http://www.youtube.com/embed/zSdauWdHMhM?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/81fe856dc" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([600801, 199848], 'Bern','<iframe width="420" height="315" src="http://www.youtube.com/embed/dnLuWVxzvok?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/a53fd2808" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([697607, 262057], 'Winterthur','<iframe width="420" height="315" src="http://www.youtube.com/embed/gspikUmYM7E?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/ae3496fab" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([664526, 210307], 'Luzern-Kriens','<iframe width="420" height="315" src="http://www.youtube.com/embed/ZEPEY_3umgk?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1d385eea4" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([747135, 255268], 'St. Gallen','<iframe width="420" height="315" src="http://www.youtube.com/embed/qhBAMgqnlI4?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1d557019" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([717122, 96845], 'Lugano','<iframe width="420" height="315" src="http://www.youtube.com/embed/DpQvFK8FTms?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/9b6498216" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

  vectorSource.addFeature(createFeature([586376, 221071], 'Biel-Bienne','<iframe width="420" height="315" src="http://www.youtube.com/embed/WN9F6EQHVxo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/b52660105" target="_blank">' + i18n.t('text.link_zur_zeitreisen') + '</a></div><br>'));

}
