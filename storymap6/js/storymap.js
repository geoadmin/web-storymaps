

var map;

function init() {

    map = new GeoAdmin.Map('map');

//    map.zoomToExtent([622000,98000,632000,108000]);
    map.setCenter(new OpenLayers.LonLat(626400,106200),8);

    var swipe = new OpenLayers.Control.Swipe({map: map});

    map.addControl(swipe);

    swipe.activate();
    
    map.switchComplementaryLayer("ch.swisstopo.pixelkarte-farbe", {opacity: 1});

    map.addLayerByName("ch.swisstopo.geologie-geotope");
    map.addLayerByName("ch.swisstopo.hiks-siegfried");

    
// view pk25.noscale, format=png and timestamp=19681231
//   GeoAdmin.layers.layers['ch.swisstopo.pixelkarte-farbe-pk25.noscale'].format = "image/png";
//   GeoAdmin.layers.layers['ch.swisstopo.pixelkarte-farbe-pk25.noscale'].timestamp = "19681231";
//   map.addLayerByName("ch.swisstopo.pixelkarte-farbe-pk25.noscale");
}

// adapt bar chart do div size when window is being chaged
$(window).resize(function(){  //add after resize function
	$('#rect-' + fid).tipsy('hide');
	svgWidth = $('#chart').width();	
	xScale = d3.scale.linear().domain([0, 25]).range([0, svgWidth]);
	bars.transition()
		.attr("x", function(datum, index) { return xScale(index);})
		.attr("width", svgWidth / 25 * 0.6);
	svg.transition()
		.attr("width", svgWidth);
//	$('#rect-' + fid).tipsy('show');

});