function loadChart(data) {

    //var data = selection;

    var svgWidth = $('#barChart').width() - 40;
    var svgHeight = $('#barChart').height() - 40;
    var histoWidth = svgWidth - 80;
    var histoHeight = svgHeight - 60;


    // define scale of x-axis
    var xScale = d3.scale.linear().domain([0, data.length]).range([0, histoWidth]);

    // define scale of y-axis
    var yScale = d3.scale.linear().domain([0, d3.max(data, function(datum) {
            return datum.temp;
        })])
        .range([histoHeight, 0]);


    // add svg variale to chart div
    var svg = d3.select('#barChart').append('svg').attr({
        'id': 'svgChart',
        'width': svgWidth,
        'height': svgHeight
    });

    /*	// text label for the y axis
	svg.append("text")
        	.attr("x", 0)
        	.attr("y", 40)
        	.text("T (C°)");

	// set up yAxis
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left")
		.ticks(5);
  */
    // add chart element
    var padding = svgHeight - histoHeight;
    var chart = svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate( 44, ' + padding + ')');


    //dataset = svg.selectAll("rect").data().length;
    chart.selectAll('rect')
        .data(data).enter()
        .append('svg:rect')
        .attr('x', function(datum, index) {
            return xScale(index);
        })
        .attr('y', function(datum) {
            return yScale(datum.temp);
        })
        .attr('height', function(datum) {
            return histoHeight - yScale(datum.temp);
        })
        .attr('width', histoWidth / data.length * 0.6)
        .attr('id', function(datum, i) {
            return 'rect-' + datum.strnr;
        })
    //.attr("name", function(datum, i) { return datum.name; })
    .attr('name', function(datum, i) {
        return datum.Name;
    })
        .attr('fill', fillColor)
        .attr('class', 'bar')
        .attr('cursor', 'pointer')
        .on('click', function(d, i) {
            var barId = data[i].strnr;
            //	previousId = selectedId;
            selectedId = barId;
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

    // define tipsy tooltip
    $('.bar').tipsy({
        trigger: ' manual',
        gravity: 's',
        html: true,
        title: function() {
            //	var name = dataset[ii].damname;
            var number = getPropertyFromId(selectedId, 'temp');
            var name = getPropertyFromId(selectedId, 'Name');
            return '<h1 class="tips" >' + name + '<br>' + number + ' C°  </h1>';
        }
    });


    updateChart(selectedId);

}

function updateChart(selectedId) {

    // unHighlightBar();

    // apply highlight and tooltip when chart loaded
    //  highlightBar(selectedId);
    //  $("#rect-" + selectedId).tipsy('show');


    // display details (mm)
    // displayObjectData(selectedId);

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
