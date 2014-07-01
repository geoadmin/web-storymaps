var api, map;



function createFeature(coords, html) {

  return new ol.Feature({
    geometry: new ol.geom.Point(coords),
    html: html
  });
}


function init() {


  var defaultStyle = {
    'Point': [new ol.style.Style({
      image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
        /*anchor: [0.5, 46],
                     anchorXUnits: 'fraction',
                     anchorYUnits: 'pixels',
                     opacity: 0.75,*/
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



  var vectorSource = new ol.source.Vector({
    //features: [iconFeature]
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


  // Popup showing the position the user clicked
  var popup = new ol.Overlay({
    element: document.getElementById('popup')
  });

  map.addOverlay(popup);

  var findFeatures = function(pixel) {
    var features = [];
    map.forEachFeatureAtPixel(pixel, function(feature, vectorLayer) {
      console.log(pixel, feature);
      features.push(feature);
    });
    return features;
  };

  var displayFeatureInfo = function(pixel, coordinate) {
    var features = findFeatures(pixel);
    var element = popup.getElement();
    var feature = features[0];
    if (feature) {
      $(element).popover('destroy');
      popup.setPosition(coordinate);
      $(element).popover({
        'placement': 'top',
        'animation': false,
        'html': true,
        'content': feature.get('html')
      });
      $(element).popover('show');
    } else {
      $(element).popover('destroy');
    }
  };

  map.on('singleclick', function(evt) {
    var pixel = evt.pixel;
    var coordinate = evt.coordinate;
    displayFeatureInfo(pixel, coordinate);
  });


  vectorSource.addFeature(createFeature([680000, 250000], '<h1>&nbsp;Z&uuml;rich</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/kSPdCR7uTBo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/173ca3f98" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));


  vectorSource.addFeature(createFeature([499800, 117900], '<h1>&nbsp;Gen&egrave;ve</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/HN67CI57Ufo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/5512cc170" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));


  vectorSource.addFeature(createFeature([612022, 267408], '<h1>&nbsp;Basel</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/BDoUtHYW-nk?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/e968baadc" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([538688, 153161], '<h1>&nbsp;Lausanne</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/zSdauWdHMhM?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/81fe856dc" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([600801, 199848], '<h1>&nbsp;Bern</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/dnLuWVxzvok?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/a53fd2808" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([697607, 262057], '<h1>&nbsp;Winterthur</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/gspikUmYM7E?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/ae3496fab" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([664526, 210307], '<h1>&nbsp;Luzern-Kriens</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/ZEPEY_3umgk?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1d385eea4" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([747135, 255268], '<h1>&nbsp;St Gallen</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/qhBAMgqnlI4?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1d557019" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([717122, 96845], '<h1>&nbsp;Lugano</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/DpQvFK8FTms?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/9b6498216" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

  vectorSource.addFeature(createFeature([586376, 221071], '<h1>&nbsp;Biel</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/WN9F6EQHVxo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/b52660105" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'));

      $('title').html(i18n.t('text.infoboxTitle'));

}
