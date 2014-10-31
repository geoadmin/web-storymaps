function loadChart(data) {

  var svgWidth = $('#barChart').width() - 40;
  var svgHeight = $('#barChart').height() - 40;
  var histoWidth = svgWidth - 80;
  var histoHeight = svgHeight - 60;


  // define scale of x-axis
  var xScale = d3.scale.linear().
      domain([0, data.length]).range([0, histoWidth]);

  // define scale of y-axis
  var yScale = d3.scale.linear().domain([0, d3.max(data, function(datum) {
    return 1000;
  })])
        .range([histoHeight, 0]);

  // ori
  //svgWidth = $('#barChart').width();
  //var svgHeight = 180;
  barPadding = 5;

  // add svg variale to chart div
  svg = d3.select('#barChart').append('svg').attr({
    'width': svgWidth,
    'height': svgHeight
  });

  d3.csv('data/stauanlagen.csv', function(error, data) {

    data.forEach(function(d) {
      d.reservoir_stabil_id = +d.reservoir_stabil_id,
      d.reservoirname = d.reservoirname,
      d.dam_stabil_id = +d.dam_stabil_id,
      d.damname = d.damname,
      d.damheight = +d.damheight,
      d.damtype = d.damtype,
      d.damtype_de = d.damtype_de,
      d.damtype_en = d.damtype_en,
      d.damtype_fr = d.damtype_fr,
      d.facility_stabil_id = +d.facility_stabil_id,
      d.facilityname = d.facilityname,
      d.facilityr1 = d.facilityr1,
      d.facilityr2 = d.facilityr2,
      d.facilityr3 = d.facilityr3,
      d.crestlevel = +d.crestlevel,
      d.facaim_fr = d.facaim_fr,
      d.facaim_de = d.facaim_de,
      d.facaim_en = d.facaim_en,
      d.beginningofoperation = d.beginningofoperation;
    });

    // define scale of x-axis
    xScale = d3.scale.linear().domain([0, data.length]).range([0, svgWidth]);

    // define scale of y-axis
    var padding = 5;
    var yScale = d3.scale.linear().domain([0, d3.max(data, function(datum) {
      return datum.damheight;
    })]).rangeRound([svgHeight - padding, padding]);


    dataset = data.sort(function(a, b) {
      return b.damheight - a.damheight;
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
    //loadChart();
    loadData(); //refresh
    $('#rect-' + selectedId).tipsy('show');
  }
});
