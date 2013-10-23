var basePath = 'app/'
var defaultConfig = {
	outFileName: 	'data/base.json',
	csvFileName: 	'data/MetadatenAufnahmen.csv',
	dataPrefix: 	'data/photos/',
	dataSuffix: 	'_A1.jpg'
}
var config = {
	outFileName:  process.argv[2],
	csvFileName:  process.argv[3],
	dataPrefix: 	process.argv[4],
	dataSuffix: 	process.argv[5]
}

// Just use the defaults..
config = defaultConfig;

var hasArguments = true;
Object.keys(config).forEach(function(key) {
	if (config[key] === undefined) {
		hasArguments = false;
		console.log("Please provide " + key + ", e.g.: " + defaultConfig[key]);
	}
});

if (!hasArguments) return;

/* Load converter dependencies */
var Converter = require("csvtojson").core.Converter;
var fs = require('fs');

/* Parse and convert data file */
var csvData = [];
var csvConverter = new Converter();
csvConverter.on("end_parsed",function(jsonObj){
	jsonObj.csvRows.forEach(function(item) {
	    var data = {
	    	id: 	item['Bildnummer'],
	    	x: 		parseFloat(item['X Koordinate']),
	    	y: 		parseFloat(item['Y Koordinate']),
	    	DE: 	item['Legende DE **'],
	    	FR: 	item['Legende FR **'],
	    	IT: 	item['Legende IT **'],
	    	EN: 	item['Legende EN **']
	    };
	    if (data.id.length < 4) return;
	    var filename = config.dataPrefix + data.id + config.dataSuffix;
	    fs.exists(basePath + filename, function(exists) {
	    	if (!exists)
	    		console.log("[ERROR] File not found: " + basePath + filename);
	    });
	    //console.log(data);
	    csvData.push(data);
	});
	//console.log(csvData);

	/* Write to output file */
	fs.writeFile(basePath + config.outFileName, 
		JSON.stringify({data: csvData, conf: config}), 
		function (err) {
			if (err) throw err;
			console.log("Saved to " + basePath + config.outFileName);
		});
});

/* Start conversion process */
console.log("Converting " + basePath + config.csvFileName);
csvConverter.from(basePath + config.csvFileName);