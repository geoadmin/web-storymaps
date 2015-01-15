var api, map;

var vectorSource;

function createFeature(coords, title, youtube, link) {

  return new ol.Feature({
    geometry: new ol.geom.Point(coords),
    title: title,
    youtube: youtube,
	link: link
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
    view: new ol.View({
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
      var youtube = feature.get('youtube');
      var link = feature.get('link');
	  var iframe = '<iframe width="420" height="315" src="http://www.youtube.com/embed/'+ youtube +'?rel=0" frameborder="0"></iframe>';
      $('#feature-info-body').find('.flex-video.widescreen').html(iframe);
	  $('.zeitreise').html('<a href="'+link+'" target="_blank" class="multilang" data-i18n="text.link_zur_zeitreisen"></a></div>')
      $('#feature-info').modal('show')
      $('a.multilang').i18n();
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
  vectorSource.addFeature(createFeature([680000, 250000], 'Zürich', 'kSPdCR7uTBo', 'http://s.geo.admin.ch/173ca3f98'));


  vectorSource.addFeature(createFeature([499800, 117900], 'Genève', 'HN67CI57Ufo','http://s.geo.admin.ch/5512cc170'));


  vectorSource.addFeature(createFeature([612022, 267408], 'Basel', 'BDoUtHYW-nk','http://s.geo.admin.ch/e968baadc'));

  vectorSource.addFeature(createFeature([538688, 153161], 'Lausanne', 'zSdauWdHMhM','http://s.geo.admin.ch/81fe856dc'));

  vectorSource.addFeature(createFeature([600801, 199848], 'Bern','dnLuWVxzvok','http://s.geo.admin.ch/a53fd2808'));

  vectorSource.addFeature(createFeature([697607, 262057], 'Winterthur','gspikUmYM7E','http://s.geo.admin.ch/ae3496fab'));

  vectorSource.addFeature(createFeature([664526, 210307], 'Luzern-Kriens','ZEPEY_3umgk','http://s.geo.admin.ch/1d385eea4'));

  vectorSource.addFeature(createFeature([747135, 255268], 'St. Gallen','qhBAMgqnlI4','http://s.geo.admin.ch/1d557019'));

  vectorSource.addFeature(createFeature([717122, 96845], 'Lugano','DpQvFK8FTms','http://s.geo.admin.ch/9b6498216'));

  vectorSource.addFeature(createFeature([586376, 221071], 'Biel-Bienne','WN9F6EQHVxo','http://s.geo.admin.ch/b52660105'));

}
;
