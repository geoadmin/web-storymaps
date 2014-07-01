///***********************************************************
//  Create hyperlink pointing to site with more details
//
//  Input: measurement station id {int}
//  Returns: link {string}
//***********************************************************

function createHyperlink(id, lang) {

  var link = 'http://api3.geo.admin.ch/main/wsgi/rest/services/ech/MapServer/' +
      'ch.bfe.stauanlagen-bundesaufsicht/' +
      id +
      '/extendedHtmlPopup?lang=' + lang;

  return link;
}



///***********************************************************
//  Display the date in the object info part
//
//  Input: measurement station id {int}
//***********************************************************

function displayObjectData(id) {
  var feature = getDetailFeatureFromId(selectedId);
  if (feature) {
    var featureData = feature.getProperties();
    //updateObjectinfo(featureData);
    $('#d-stauanlage').html(featureData.damname);
    $('#d-stationNumber').html(featureData.nr);
    $('#d-kronenkote').html(featureData.crestlevel + i18n.t('text.masl'));
    $('#d-inbetriebnahme').html(featureData.beginningofoperation); // time
    $('#d-sperrenhoehe').html(featureData.damheight + i18n.t('text.meter'));
    $('#d-zweck').html(i18n.t(featureData.facaim_en)); //date
    $('#d-sperrentyp').html(i18n.t(featureData.damtype_en)); //date


    $('#d-rank').html(getRankFromId(id));
    $('#details').attr('href',
        createHyperlink(featureData.dam_stabil_id, lang));
  }
}

function updateObjectinfo(object) {
  var crl;
  switch (lang) {
    case 'de':
      crl = object.crestlevel + ' m ü.M.';
      break;
    case 'fr':
      crl = object.crestlevel + ' m s.m.';
      break;
    case 'it':
      crl = object.crestlevel + ' m s.l.m.';
      break;
    case 'en':
      crl = object.crestlevel + ' m a.s.l.';
      break;
  }
  //OpenLayers.Util.getElement('kronenkote').innerHTML = crl;
  var aim;
  switch (lang) {
    case 'de':
      aim = object.facaim_de;
      break;
    case 'fr':
      aim = object.facaim_fr;
      break;
    case 'it':
      aim = 'Idroelettricità';
      break;
    case 'en':
      aim = object.facaim_en;
      break;
  }
  //OpenLayers.Util.getElement('zweck').innerHTML = aim;
  var it_damtype;
  switch (object.damtype_fr) {
    case 'Poids':
      it_damtype = 'Dighe a gravità';
      break;
    case 'Voûte':
      it_damtype = 'Dighe ad arco';
      break;
    case 'Enrochement':
      it_damtype = 'Diga a riempimento';
      break;
    case 'Terre':
      it_damtype = 'In terra';
      break;
    case 'Poids-voûte':
      it_damtype = 'Dighe a gravità e ad arco';
      break;
  }
  var damt;
  switch (lang) {
    case 'de':
      damt = object.damtype_de;
      break;
    case 'fr':
      damt = object.damtype_fr;
      break;
    case 'en':
      damt = object.damtype_en;
      break;
    case 'it':
      damt = it_damtype;
      break;
  }
  var link = 'http://api.geo.admin.ch/main/wsgi/feature/' + object.dam_stabil_id +
      '.html?layer=ch.bfe.stauanlagen-bundesaufsicht&lang=' +
      lang + '&baseUrl=http://map.geo.admin.ch/';
  var details;
  switch (lang) {
    case 'de':
      details = 'Details';
      break;
    case 'fr':
      details = 'Détails';
      break;
    case 'it':
      details = 'Dettagli';
      break;
    case 'en':
      details = 'Details';
      break;
  }
  $('#details').empty();
  $('<a>', {
    text: details,
    href: link,
    target: '_blank'
  }).appendTo('#details');
}




///***********************************************************
//  Select station from counter arrows
//
//  Input: direction {String: "up" | "down"}
//***********************************************************

function moveOneRank(direction) {
  var idx = getIndexFromId(selectedId);
  if (direction == 'up' && idx > 0) {
    idx = idx - 1;
  }
  if (direction == 'down' && idx < 24) {
    idx = idx + 1;
  }
  previousId = selectedId;
  selectedId = selection[idx].properties.reservoir_stabil_id;
  selectedIdx = idx;
  zoomToFeature(selectedId);
  // TODO
  //overviewMap.zoomToMaxExtent();
  $('.tipsy').remove();
  if ($('#barChartContainer').width() != 0) {
    $('#rect-' + selectedId).tipsy('show');
  }
  unHighlightBar();
  highlightBar(selectedId);
  selectOverviewFeatureFromId(selectedId);
  selectDetailFeatureFromId(selectedId);
  displayObjectData(selectedId);

}
