//***********************************************
// Define variables
//***********************************************

var selection = new Array();
var idSelection = new Array();
var selectedId;
var previousId;
var firstLoad = true;




// Sort features

function sortFeaturesByAttribute(objs, attr, reverse) {
  var reverse = (reverse) ? -1 : 1;


  function compare(a, b) {
    a = a['properties'][attr];
    b = b['properties'][attr];
    if (a < b) return reverse * -1;

    if (a > b) return reverse * 1;
    return 0;
  }

  return objs.sort(compare);
}



///***********************************************************
//  Select a random id from measure station subset
//
//  Input: ids of measure stations subset (Array)
//  Returns: id (int)
///***********************************************************

function selectBiggestId(idArray) {
  var id = idArray[0];
  return id;
}



///***********************************************************
//  Get overview feature accoring to the "main" id (measuremen station id)
//
//  Input: measurement station id {int}
//  Returns: OpenLayers feature object
//***********************************************************

function getOverviewFeatureFromId(id) {
  var features = overviewLayer.getSource().getFeatures();

  for (var i = 0; i < features.length; i++) {
    var feat = features[i];
    var prop = feat.getProperties();
    if (prop.reservoir_stabil_id == id) {
      return feat;
    }
  }
  return null;
}



///***********************************************************
//  Get detail fetaure accoring to the "main" id (measuremen station id)
//
//  Input: measurement station id {int}
//  Returns: OpenLayers feature object
//***********************************************************

function getDetailFeatureFromId(id) {
  /*var features = detailLayer.getFeaturesByAttribute('nr', id);
    var feature = features[0];
    return feature; */
  var features = detailedLayer.getSource().getFeatures();

  for (var i = 0; i < features.length; i++) {
    var feat = features[i];
    var prop = feat.getProperties();
    if (prop.reservoir_stabil_id == id) {
      return feat;
    }
  }
  return null;
}



/////***********************************************************
//  select detail map feature from id
//
//  Input: measurement station id {int}
//***********************************************************

function selectDetailFeatureFromId(selectedId) {
  //var feat = getDetailFeatureFromId(selectedId);
  //selectDetailFeature.unselectAll();
  //selectDetailFeature.select(feat);
  select.getFeatures().clear();


  var feat = getDetailFeatureFromId(selectedId);
  select.getFeatures().push(feat);

}



///***********************************************************
//  select overview map feature from id
//
//  Input: measurement station id {int}
//***********************************************************

function selectOverviewFeatureFromId(selectedId) {
  var feat = getOverviewFeatureFromId(selectedId);
  //selectOverviewFeature.unselectAll();
  //selectOverviewFeature.select(feat);
  select.getFeatures().clear();
  select.getFeatures().push(feat);

}





///***********************************************************
//  Get information of a measument from the xml file
//
//  Input: measurement station id {int}, property {string}
//  Returns: temperature {float}
//***********************************************************

function getPropertyFromId(id, property) {
  for (var i = 0; i < selection.length; i++) {
    if (selection[i].dam_stabil_id == id) {
      var x = selection[i];
      var out = x[property];
    }
  }
  return out;
}



///***********************************************************
//  Get ranking of the temperature measurment
//
//  Input: measurement station id {int}
//  Returns: rank {int}
//***********************************************************

function getRankFromId(id) {
  for (var i = 0; i < selection.length; i++) {
    if (selection[i].properties.reservoir_stabil_id == id) {
      var rank = i + 1;
    }
  }
  return rank;
}

///***********************************************************
//  Get ranking of the temperature measurment
//
//  Input: measurement station id {int}
//  Returns: index {int}
//***********************************************************

function getIndexFromId(id) {
  for (var i = 0; i < selection.length; i++) {
    if (selection[i].properties.reservoir_stabil_id == id) {
      var index = i;
    }
  }
  return index;
}
