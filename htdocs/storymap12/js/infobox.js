//***********************************************
// close infobox with click on closebox
//***********************************************

  $("#close_box").ready(function(){
  	$("#close_box").click(function() {
    	$("#infobox").hide();
  	});
	});

//***********************************************
// show infobox with click info button (only mobile)
//***********************************************

  $("#moreInfo").ready(function(){
  	$("#moreInfo").click(function() {
    	$("#infobox").show();
  	});
  });
