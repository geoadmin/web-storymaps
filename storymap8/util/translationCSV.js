var config = {
  basePath:     'app/data/',
	csvFileName: 	'translation.csv',
	dataPrefix: 	'locale/',
	dataSuffix: 	'/translation.json',
	languages:    ['de','fr','it','en']
}
var csvData = {};
config.languages.forEach(function(l) {
  csvData[l] = {};
});

/* Load converter dependencies */
var Converter = require("csvtojson").core.Converter;
var fs = require('fs');

/* Parse and convert data file */
var csvConverter = new Converter();
csvConverter.on("end_parsed",function(jsonObj){
	jsonObj.csvRows.forEach(function(item) {
	  /* Prepare languages */
    config.languages.forEach(function(l) {
      var id = item['id'];
      if (item[l]) {
        csvData[l][id] = item[l];
      }
    });
	});
	//console.log(csvData);
	
	/* Write EACH language to output file */
	config.languages.forEach(function(l) {
  	var fn = config.basePath + config.dataPrefix + l + config.dataSuffix;
  	var thisLang = csvData[l];
	  fs.writeFile(fn, 
		  JSON.stringify(thisLang), 
		  function (err) {
			  if (err) throw err;
			  console.log("Saved to " + fn);
		  });
	});
});

/* Start conversion process */
console.log("Converting " + config.basePath + config.csvFileName);
csvConverter.from(config.basePath + config.csvFileName);
