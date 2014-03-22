

//***********************************************
// close navbar (mobilie only) when clicking somewhere on the page 
//***********************************************

$(".docol").on('click',function(){
    $('.collapse').collapse('hide');
})



if (!$.browser.msie) {
	$(window).resize (function makeDefaultCss() {
		var omcwidth = document.getElementById("overviewMapContainer").style.width;
		if ((omcwidth != '""') && ($(window).width() > 760)) {
			document.getElementById("overviewMapContainer").style.width = "";
			document.getElementById("barChartContainer").style.width = "";
			$("#barChartContainer").css({"visibility": ""});
		}
		var dmcwidth = document.getElementById("detailMapContainer").style.width;
		if ((dmcwidth != '""') && ($(window).width() > 760)) {
			document.getElementById("detailMapContainer").style.width = "";
			document.getElementById("objectInfoContainer").style.width = "";
			$("#objectInfoContainer").css({"visibility": ""});
		}    
	})
}


function changeToDetails(){
	$("#overviewMapContainer").width("0%");
	$("#detailMapContainer").width("100%");
	detailMap.destroy();
	loadDetailMap();
	$("#barChartContainer").width("0%");
	$("#barChartContainer").css({"visibility": "hidden"});
	$(".tipsy").css({"visibility": "hidden"});
	$("#objectInfoContainer").width("100%");
	$("#objectInfoContainer").css({"visibility": "visible"});
}


function changeToOverview(){
	$("#overviewMapContainer").width("100%");
	$("#detailMapContainer").width("0%");
	overviewMap.destroy();
	loadOverviewMap();	
	$("#barChartContainer").width("100%");
	$("#barChartContainer").css({"visibility": "visible"});
	$(".tipsy").css({"visibility": "visible"});
	$("#objectInfoContainer").width("0%");
	$("#objectInfoContainer").css({"visibility": "hidden"});
	
}

