var data;
function loadChart(newData) {
  if (!data) {
    if (!newData) {
      window.console.log('No data to display in chart');
      return;
    }
    data = [];
    newData.forEach(function(d) {
      var d = d.properties;
      d.reservoir_stabil_id = +d.reservoir_stabil_id,
      d.dam_stabil_id = +d.dam_stabil_id,
      d.damheight = +d.damheight,
      d.facility_stabil_id = +d.facility_stabil_id,
      d.crestlevel = +d.crestlevel,
      data.push(d);
    });
  }
  var dataset = data.sort(function(a, b) {
    return b.damheight - a.damheight;
  });
  var svgWidth = $('#barChart').width() - 40;
  var svgHeight = $('#barChart').height() - 40;
  var histoWidth = svgWidth - 80;
  var histoHeight = svgHeight - 60;
  var xScale = d3.scale.linear().domain([0, data.length]).range([0, svgWidth]);
  var padding = 5;
  var yScale = d3.scale.linear().domain([0, d3.max(data, function(datum) {
    return datum.damheight;
  })]).rangeRound([svgHeight - padding, padding]);

  // add svg variale to chart div
  svg = d3.select('#barChart').append('svg').attr({
    'width': svgWidth,
    'height': svgHeight
  });

  bars = svg.selectAll('rect')
          .data(data).enter()
          .append('svg:rect')
          .attr('x', function(datum, index) {
        return xScale(index);
          })
          .attr('y', function(datum) {
        return yScale(datum.damheight);
          })
          .attr('height', function(datum) {
        return svgHeight - yScale(datum.damheight);
          })
          .attr('width', svgWidth / data.length * 0.6)
          .attr('id', function(datum, i) {
        return 'rect-' + datum.reservoir_stabil_id;
          })
          .attr('fill', fillColor)
          .attr('title', function(datum, index) {
        return datum.damname;
          })
          .attr('class', 'bar')
          .attr('cursor', 'pointer')
          .on('click', function(d, i) {
        selectedId = dataset[i].reservoir_stabil_id;
        ii = i;
        selectedIdx = i;
        //      previousId = selectedId;
        //selectedId = barId;
        selectOverviewFeatureFromId(selectedId);
        selectDetailFeatureFromId(selectedId);
        zoomToFeature(selectedId);
        // TODO
        //overviewMap.zoomToMaxExtent();
        $('.tipsy').remove();
        $('#rect-' + selectedId).tipsy('show');
        unHighlightBar();
        highlightBar(selectedId);
        displayObjectData(selectedId);

          });

  $('.bar').tipsy({
    trigger: ' manual',
    gravity: 's',
    html: true,
    title: function() {
      var name = dataset[selectedIdx].damname;
      var number = dataset[selectedIdx].damheight;
      return '<h1 class="tips" >' + name + '<br>' + number + ' m  </h1>';
    }
  });
  updateChart(selectedId);

}



function updateChart(selectedId) {

  $('.tipsy').remove();
  unHighlightBar();
  highlightBar(selectedId);
  selectOverviewFeatureFromId(selectedId);
  selectDetailFeatureFromId(selectedId);
  displayObjectData(selectedId);
  if ($('#barChartContainer').width() != 0) {
    $('#rect-' + selectedId).tipsy('show');
  }

}


//***********************************************
// Change color of clicked bar
//
// Input: id of curently selected measure station {int}
//***********************************************

function highlightBar(selectedId) {
  d3.select('#rect-' + selectedId).style('fill', highlightColor);
  $.event.trigger({
    type: 'change-id',
    id: selectedId
  });
}



//***********************************************
// Change color of clicked bar
//
// Input: id of the previously selected measur station {int}
//***********************************************

function unHighlightBar() {
  d3.selectAll('rect').style('fill', fillColor);
}



//***********************************************
// Reload bar chart when  windows is being resized
//
//***********************************************


$(window).resize(function() {
  if ($('#barChartContainer').width() > 10 &&
      $('#barChartContainer').height() > 10) {
    $('#rect-' + selectedId).tipsy('hide');
    $('#svgChart').remove();
    updateChart(selectedId);
    $('#rect-' + selectedId).tipsy('show');
  }
});
