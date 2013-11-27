
///*********************************************************** 
//  Create hyperlink pointing to site with more details
//
// 	Input: measurement station id {int} 
// 	Returns: link {string}
//*********************************************************** 

function createHyperlink(id){
	var link = new String();
	link = link.concat("http://www.hydrodaten.admin.ch/", lang, "/", id, ".html");
	return link;

}



///*********************************************************** 
//  Display the date in the object info part
//
// 	Input: measurement station id {int} 
//*********************************************************** 

function displayObjectData(id){
	var featureData = getDetailFeatureFromId(selectedId).data;
	$("#d-station").html(featureData.name);
	$("#d-stationNumber").html(featureData.nr);
	$("#d-date").html(getPropertyFromId(id, "date"));
	$("#d-time").html(getPropertyFromId(id, "time"));
	$("#d-temperature").html(getPropertyFromId(id, "temp"));
	$("#d-rank").html(getRankFromId(id));
	$("#details").attr("href", createHyperlink(id));
}



///*********************************************************** 
//  Select station from counter arrows
//
// 	Input: direction {String: "up" | "down"}
//*********************************************************** 

function moveOneRank(direction){
	var idx = getIndexFromId(selectedId)
	if (direction == "up" && idx > 0){idx = idx-1};
	if (direction == "down" && idx < 24){idx = idx+1};
	previousId = selectedId;
	selectedId = selection[idx].strnr;
	zoomToFeature(selectedId);
	overviewMap.zoomToMaxExtent();	
	$(".tipsy").remove();
	if($("#barChartContainer").width() != 0){$("#rect-" + selectedId).tipsy('show');}
	unHighlightBar();
	highlightBar(selectedId);
	selectOverviewFeatureFromId(selectedId);
	selectDetailFeatureFromId(selectedId);
}


