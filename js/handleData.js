//***********************************************
// Define variables 
//***********************************************

var selection = new Array();
var idSelection = new Array();
var selectedId; 
var previousId;
var firstLoad = true;



//***********************************************
// Get XML file
// 
// Input: link to xml file
// Returns: xml (object)
//***********************************************


// Proxy for cross domain data access
 OpenLayers.ProxyHost= "../../../../cgi-bin/proxy.cgi?url=";


function loadXmlData(callback){
	var format = new OpenLayers.Format.XML();
	OpenLayers.Request.GET({
		url: "http://www.hydrodaten.admin.ch/lhg/SMS.xml",
		//url: "data/sms.xml",
		success: function(request) {
			if(request.responseXML == null) {
    			console.log("its null");
			//	request.responseType = "msxml-document";
				request.responseText = request.responseText.replace(/<!DOCTYPE((.|\n|\r)*?)\">/g, "");
				xml = format.read(request.responseText); //IE
			} else {
    			xml = request.responseXML; 
			}
			filterStationsChrome(xml, callback);
		},
		failure: function(request) {
			console.log("XML loading failed!");
		}
	});
}


//***********************************************
// function to check how to parse the xml 
//***********************************************

//check if the first node is an element node
function checkParseStyle(n) {
	var browser;
	x=n.firstChild;
	if (x.nodeType!=1){
  		browser = "ChromeFF";
  	}
	if (x.nodeType==1) {
		browser = "IE";
	}
	return browser;
}

//***********************************************
// reduce XML data to warmes measurments (output JSON) in Chrome and FF 
//***********************************************


function filterStationsChrome(xml, callback){
	var tempRecords = new Array();
	var records = xml.getElementsByTagName("MesPar");
	
	for (var i =0; i < records.length; i++){
	
		// get all records that measure the water temperature
		var typvalue = records[i].getAttributeNode("Typ").nodeValue;	

		// get the required values from the records and write to array
		if (typvalue == 03){

		var browser = checkParseStyle(records[i]);
	
		//	var date = new String();			
		
		// get values
		var strnr = records[i].getAttributeNode("StrNr").nodeValue;	
		
		if (browser == "IE") {
			var temp = records[i].childNodes[3].childNodes[0].nodeValue; 
			var date = records[i].childNodes[1].childNodes[0].nodeValue;
			var time = records[i].childNodes[2].childNodes[0].nodeValue;
		} else {
			var temp = records[i].childNodes[7].childNodes[0].nodeValue;
			var date = records[i].childNodes[3].childNodes[0].nodeValue;
			var time = records[i].childNodes[5].childNodes[0].nodeValue;
		}

			// add value to array
			var rec = new Object();
			rec.strnr = parseInt(strnr);
			rec.temp = parseFloat(temp);	
			rec.date = date;
			rec.time = time;	
			tempRecords.push(rec);
		}
	}
	// sord the measurement stations accorging to the measured water temperature
	tempRecords = tempRecords.sort(function(a,b){return b.temp - a.temp});
	// reduce array to n bigges records	
	for (var j=0; j<25; j++ ) {
		var x = tempRecords[j]	
		selection.push(x);
	}
	for (var j=0; j<selection.length; j++){
		idSelection[j] = selection[j].strnr;
	}

	// select random measurment station id
	selectedId = selectBiggestId(idSelection);

callback();
}


//***********************************************
// reduce XML data to warmes measurments (output JSON) in IE 
//***********************************************


function filterStationsIe(xml, callback){
	var tempRecords = new Array();
	var records = xml.getElementsByTagName("MesPar");
	for (var i =0; i < records.length; i++){
	
		// get all records that measure the water temperature
		var typvalue = records[i].getAttributeNode("Typ").nodeValue;	

		// get the required values from the records and write to array
		if (typvalue == 03){
			
		//	var date = new String();			
			
			// get values
			var strnr = records[i].getAttributeNode("StrNr").nodeValue;	
			var temp = records[i].childNodes[7].childNodes[0].nodeValue;
			date = records[i].childNodes[3].childNodes[0].nodeValue;
			time = records[i].childNodes[5].childNodes[0].nodeValue;
			
			// add value to array
			var rec = new Object();
			rec.strnr = parseInt(strnr);
			rec.temp = parseFloat(temp);	
			rec.date = date;
			rec.time = time;	
			tempRecords.push(rec);
		}
	}
	// sord the measurement stations accorging to the measured water temperature
	tempRecords = tempRecords.sort(function(a,b){return b.temp - a.temp});
	// reduce array to n bigges records	
	for (var j=0; j<25; j++ ) {
		var x = tempRecords[j]	
		selection.push(x);
	}
	for (var j=0; j<selection.length; j++){
		idSelection[j] = selection[j].strnr;
	}


	// select random measurment station id
	selectedId = selectBiggest(idSelection);

callback();
}


///*********************************************************** 
//  Select a random id from measure station subset
//
// 	Input: ids of measure stations subset (Array)  
// 	Returns: id (int) 
///*********************************************************** 

function selectBiggestId(idArray){
	var id = idArray[0];
	return id; 
}

 

///*********************************************************** 
//  Get overview feature accoring to the "main" id (measuremen station id)
//
// 	Input: measurement station id {int} 
// 	Returns: OpenLayers feature object
//*********************************************************** 

function getOverviewFeatureFromId(id) {
	var features = overviewLayer.getFeaturesByAttribute('nr', id);
 	var feature = features[0];
	return feature;
}



///*********************************************************** 
//  Get detail fetaure accoring to the "main" id (measuremen station id)
//
// 	Input: measurement station id {int} 
// 	Returns: OpenLayers feature object
//*********************************************************** 

function getDetailFeatureFromId(id) {
	var features = detailLayer.getFeaturesByAttribute('nr', id);
 	var feature = features[0];
	return feature;
}



/////*********************************************************** 
//  select detail map feature from id
//
// 	Input: measurement station id {int} 
//*********************************************************** 

function selectDetailFeatureFromId(selectedId){
	var feat = getDetailFeatureFromId(selectedId);
	selectDetailFeature.unselectAll();
	selectDetailFeature.select(feat); 	
}



///*********************************************************** 
//  select overview map feature from id
//
// 	Input: measurement station id {int} 
//*********************************************************** 

function selectOverviewFeatureFromId(selectedId){
	var feat = getOverviewFeatureFromId(selectedId);
	selectOverviewFeature.unselectAll();
	selectOverviewFeature.select(feat); 	
}



//*********************************************************** 
//  create an pbject containing all information  
//
// Returns: upsdated selection {array}
//*********************************************************** 

function addNames(callback){
		
	tempLayer = new OpenLayers.Layer.Vector("tempLayer", {
		strategies: [new OpenLayers.Strategy.Fixed()],
		protocol: new OpenLayers.Protocol.HTTP({
			url: "data/hydromessstationen.geojson",
			format: new OpenLayers.Format.GeoJSON()
		})
	});

	for(var i=0; i<selection.length; i++){
		var id = selection[i].strnr;
		var features = overviewLayer.getFeaturesByAttribute('nr', id);
 		var feature = features[0];
		try {var name = feature.data['name'];} catch(err) {var name = "unknown"; }
		selection[i].name = name; 
	}
callback();

}



///*********************************************************** 
//  Get information of a measument from the xml file
//
// 	Input: measurement station id {int}, property {string} 
// 	Returns: temperature {float} 
//*********************************************************** 

function getPropertyFromId(id, property){
	for(var i=0; i<selection.length; i++){
		if (selection[i].strnr == id){
			var x = selection[i];
			var out = x[property];
		}
	}
	return out;
}



///*********************************************************** 
//  Get ranking of the temperature measurment 
//
// 	Input: measurement station id {int} 
// 	Returns: rank {int} 
//*********************************************************** 

function getRankFromId(id) {
	for(var i=0; i<selection.length; i++){
		if(selection[i].strnr == id){
			var rank = i + 1;
		}
	}
	return rank;
}

///*********************************************************** 
//  Get ranking of the temperature measurment 
//
// 	Input: measurement station id {int} 
// 	Returns: index {int} 
//*********************************************************** 

function getIndexFromId(id) {
	for(var i=0; i<selection.length; i++){
		if(selection[i].strnr == id){
			var index = i;
		}
	}
	return index;
}




