function afterDataLoad() {
  loadOverviewMap(afterLoadOverviewMap);
}


function afterLoadOverviewMap() {
  addNames(afterAddName);
}


function afterAddName() {
  loadDetailMap(afterLoadDetailMap);
}

function afterLoadDetailMap() {
  displayObjectData(selectedId);
  afterLoadChart();

}


function afterLoadChart() {
  loadChart(selectDetailFeatureFromId(selectedId));
  firstLoad = false;
}


function initiation() {

  if ($.browser.msie && $.browser.version <= 8) {
    $('div#mainContent').replaceWith(
        '<div class="browserError">' +
        '<h1>Incompatible Browser</h1>' +
        '<p>Please update your browser or use a different' +
        ' modern web browser!</p>' +
        '</div)');
  } else {
    initMaps();
    loadData();
    //loadXmlData(afterDataLoad);
  }

}
