function getURLParameter(key) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && result[1] || ""; 
}

function toggleLang(lang) {
    var lang = lang || 'de';
    document.location = document.location.pathname + "?lang="+ lang;
}


<!-- Warning: always concatenate long text lines -->
var myi18n = {
    'de': {
        "title": "Der Bergsturz von Randa",
	"Zusammenfassung" : "Am 18. April 1991 stürzten bei Randa im hinteren Mattertal rund 15 Millionen m3 Fels zu Tal. " +
		         "Die Felsblöcke waren teilweise so gross wie Einfamilienhäuser, die Sturzhöhe betrug 600 Meter. " +
			"Hauptursachen des Bergsturzes waren die Wirkung von Frost- und Tauperioden und von erhöhtem Wasserdruck in Gesteinsklüften. " +
		        "Am 9. Mai des gleichen Jahres ereignete sich erneut ein Bergsturz von einigen Millionen Kubikmeter Gesteinsmaterial. " +
		        "Insgesamt stürzten bei allen Bergstürzen 33 Mio. m3 Gestein ins Tal (Karte: Siegfriedkarte 1881; ",
  "Link LK25": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.pixelkarte-pk25.metadata1&Y=627542&X=104544&zoom=5&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.pixelkarte-pk25.metadata&layers_opacity=1&layers_visibility=true&time_current=latest&lang=de",
  "Link Geotope": "Schweizerische Geotope",
  "href Geotope": "http://map.geo.admin.ch/?selectedNode=LT2_18&Y=627708.64414308&X=105790.60700533&zoom=6&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geotope&layers_opacity=1&layers_visibility=true&time_current=latest&lang=de",

        "Weitere Infos": "Weitere Infos",

	"PLANAT": "Nationale Plattform für Naturgefahren PLANAT",
  "href PLANAT": "http://www.planat.ch/de/bilder-detailansicht/datum/2010/09/01/bergsturz-randa-1991/",
  "swisstopo": "Bundesamt für Landestopografie swisstopo", 
	"Info Bergsturz von Randa": "Informationen zum Bergsturz von Randa",
	"Geologischer Kartenviewer": "Geologischer Kartenviewer",
	"href Kartenviewer": "http://www.geologieviewer.ch",
  "Link Kartenviewer": "Das Gebiet um Randa im  Geologieviewer",
	"Zeitreihenviewer": "Zeitreihenviewer",
	"href Zeitreihenviewer": "http://www.swisstopo.ch/de/index.html?flyoutPermalink=Y%3D660000%26X%3D190000%26zoom%3D2%26bgOpacity%3D0%26bgLayer%3DvoidLayer%26layers%3Dch.swisstopo.zeitreihen%26layers_opacity%3D1%26layers_visibility%3Dtrue%26timeseries_tab%3DplayTab%26timeseries_current%3D19381231%26timeseries_compareOpacity%3D50%26timeseries_direction%3Dforwards%26timeseries_fadeTime%3D2000%26lang%3Dde",
  "Link Zeitreiseviewer": "swisstopo Zeitreise", 
	"Link zum Luftbild": "Link zum Luftbild",
	"href Luftbild": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.images-swissimage.metadata1&Y=626522.91274611&X=106670&zoom=8&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&time_current=latest&lang=de",
  "Randa im Luftbild": "Der Erdrutsch von Randa im Luftbild",
	"Geologie": "Geologie",
	"href Geologie": "http://s.geo.admin.ch/1098e1f37",
  "Link Geologie": "Das Gebiet um Randa im geologischen Atlas (1:25 000)",
	"BAFU": "Bundesamt für Umwelt (BAFU)",
	"href BAFU": "http://s.geo.admin.ch/d02afb36f",
  "Link BAFU": "Stand der Naturgefahrenkartierungen Rutschungen",
	"Realized with": "Umgesetzt mit",
	"Copyright and Data protection": "Copyright und Datenschutzerklärung",
	"moreInfo": "Informationen",
	"language": "Sprache",
	"share": "Teilen"
    },
    'fr': {
        "title": "Eboulement à Randa",
	"Zusammenfassung" : "Le 18 avril 1991, un éboulement de quelque 15 millions m3 de roche s'est déclenché près de Randa dans la haute vallée de Zermatt. " +
		         "Des blocs de pierre, certains grands comme une maison, ont dévalé la pente sur 600m. "+
			       "Ce sont principalement les périodes de gel et de dégel et la pression élevée de l'eau dans les fissures de la roche qui sont à l'origine de l'éboulement de la montagne. "+
		         "Le 9 mai de la même année, il s'est à nouveau produit près de Randa un éboulement de plusieurs millions de m3 de matériaux rocheux (Carte: Carte Siegfried 1881; ",
  "Link LK25": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.pixelkarte-pk25.metadata1&Y=627542&X=104544&zoom=5&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.pixelkarte-pk25.metadata&layers_opacity=1&layers_visibility=true&time_current=latest&lang=fr",
"Link Geotope": "Géotopes suisses",
"href Geotope": "http://map.geo.admin.ch/?selectedNode=LT2_18&Y=627708.64414308&X=105790.60700533&zoom=6&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geotope&layers_opacity=1&layers_visibility=true&time_current=latest&lang=fr",

        "Weitere Infos": "Informations détaillées",

	"PLANAT": "Plate-forme nationale «Dangers naturels» PLANAT",
	"href PLANAT": "http://www.planat.ch/fr/images-details/datum/2010/09/01/bergsturz-randa-1991/",
	"swisstopo": "Office fédéral de topographie swisstopo",
	"Info Bergsturz von Randa": "Eboulement à Randa",
	"Geologischer Kartenviewer": "Visualiseur de données géologiques",
	"href Kartenviewer": "http://www.geologieviewer.ch/ga.php?lang=fr", 
  "Link Kartenviewer": "Visualiseur de données géologiques: Randa",
	"Zeitreihenviewer": "swisstopo",
  "href Zeitreihenviewer": "http://www.swisstopo.ch/fr/index.html?flyoutPermalink=Y%3D660000%26X%3D190000%26zoom%3D2%26bgOpacity%3D0%26bgLayer%3DvoidLayer%26layers%3Dch.swisstopo.zeitreihen%26layers_opacity%3D1%26layers_visibility%3Dtrue%26timeseries_tab%3DplayTab%26timeseries_current%3D19381231%26timeseries_compareOpacity%3D50%26timeseries_direction%3Dforwards%26timeseries_fadeTime%3D2000%26lang%3Dfr",
  "Link Zeitreiseviewer": "Visualiseur de séries temporelles",
	"Link zum Luftbild": "Lien vers la photo aérienne",
	"href Luftbild": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.images-swissimage.metadata1&Y=626522.91274611&X=106670&zoom=8&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&time_current=latest&lang=fr",
  "Randa im Luftbild": "L`éboulement à Randa dans la photo aérienne",
	"Geologie": "Atlas Géologique (1: 25 000)",
	"href Geologie": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.geologie-geologischer_atlas1&Y=626465.01944256&X=105802.26517871&zoom=8&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geologischer_atlas&layers_opacity=1&layers_visibility=true&time_current=latest&lang=fr",
  "Link Geologie": "Atlas Géologique (1: 25 000): Randa",
	"BAFU": "L'Office fédéral de l'environnement (OFEV)",
	"href BAFU": "http://map.geo.admin.ch/?selectedNode=node_ch.bafu.showme-gemeinden_rutschungen1&Y=629537&X=113160&zoom=3&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.bafu.showme-gemeinden_rutschungen&layers_opacity=0.63&layers_visibility=true&time_current=latest&lang=fr",
  "Link BAFU": "Zones à risque naturel (glissements)",
	"Realized with": "Réalisé avec",
	"Copyright and Data protection": "Conditions d'utilisation",
	"moreInfo": "Informations",
	"language": "Langue",
	"share": "Partager"
    },
    'it': { 
	"title": "Crollo di una parete di roccia presso Randa",
	"Zusammenfassung" : "Il 18 aprile 1991, nei pressi di Randa, che si trova nella parte più interna della valle di Zermatt, crollarono circa 15 milioni di m3 di roccia. " +
		         "Alcuni blocchi di roccia, caduti per più di 600 metri, erano grandi quasi quanto delle case unifamiliari. "+
			"Il 9 maggio dello stesso anno, nuovamente presso Randa si verificò un secondo crollo di alcuni milioni di metri cubi di roccia (Carta Siegfried 1881; ",
  "Link LK25": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.pixelkarte-pk25.metadata1&Y=627542&X=104544&zoom=5&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.pixelkarte-pk25.metadata&layers_opacity=1&layers_visibility=true&time_current=latest&lang=it",
"Link Geotope": "Geotopi svizzeri",
"href Geotope": "http://map.geo.admin.ch/?selectedNode=LT2_18&Y=627708.64414308&X=105790.60700533&zoom=6&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geotope&layers_opacity=1&layers_visibility=true&time_current=latest&lang=it",

        "Weitere Infos": "Ulteriori informazioni",

	"PLANAT": "Piattaforma nazionale «Pericoli naturali» PLANAT",
  "href PLANAT": "http://www.planat.ch/it/immagini-dettagli/datum/2010/09/01/bergsturz-randa-1991/",
  "swisstopo": "Ufficio federale di topografia swisstopo",
	"Info Bergsturz von Randa": "Randa",
	"Geologischer Kartenviewer": "Vissualizzatore Di Dati Geologici",
	"href Kartenviewer": "http://www.geologieviewer.ch/ga.php?lang=fr",
  "Link Kartenviewer": "Vissualizzatore Di Dati Geologici: L'area di Randa",
	"Zeitreihenviewer": "swisstopo",
	"href Zeitreihenviewer": "http://www.swisstopo.ch/it/index.html?flyoutPermalink=Y%3D660000%26X%3D190000%26zoom%3D2%26bgOpacity%3D0%26bgLayer%3DvoidLayer%26layers%3Dch.swisstopo.zeitreihen%26layers_opacity%3D1%26layers_visibility%3Dtrue%26timeseries_tab%3DplayTab%26timeseries_current%3D19381231%26timeseries_compareOpacity%3D50%26timeseries_direction%3Dforwards%26timeseries_fadeTime%3D2000%26lang%3Dit",
  "Link Zeitreiseviewer": "Visualizzatore di serie temporali",
	"Link zum Luftbild": "Collegamento alla Foto Aerea",
	"href Luftbild": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.images-swissimage.metadata1&Y=626522.91274611&X=106670&zoom=8&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&time_current=latest&lang=it",
  "Randa im Luftbild": "La Frana di Randa in una Foto Area",
	"Geologie": "Atlante Geologico (1:25 000)",
	"href Geologie": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.geologie-geologischer_atlas1&Y=626465.01944256&X=105802.26517871&zoom=8&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geologischer_atlas&layers_opacity=1&layers_visibility=true&time_current=latest&lang=it",
  "Link Geologie": "Atlante Geologico (1:25 000): Randa",
	"BAFU": "L'Ufficio federale dell'ambiente (UFAM)",
	"href BAFU": "http://map.geo.admin.ch/?selectedNode=node_ch.bafu.showme-gemeinden_rutschungen1&Y=629537&X=113160&zoom=3&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.bafu.showme-gemeinden_rutschungen&layers_opacity=0.63&layers_visibility=true&time_current=latest&lang=it",
  "Link BAFU": "Zone a rischio naturale (valanghe)",
	"Realized with": "Realizzato con",
	"Copyright and Data protection": "Copyright e protezione dei diritti d'autore",
	"moreInfo": "Informazione",
	"language": "Lingua",
	"share": "Condividere"
    },
    'en': {
	"title": "Randa rockslide",
	"Zusammenfassung" : "On 18 April 1991, around 15 million m3 of rock slid down to the valley near the town of Randa which is located in the Matter Valley. " +
		         "The rocks were the size of houses and the drop height was 600 metres. " +
			"The main cause of the rockslide was the effect of frost and thaw periods and increased water pressure in the rock fissures. " +
      "Another landslide comprising a few million cubic metres of rock material occurred in Randa on 9 May of the same year. " +
      "A total of 33 million m3 of rock fell to the vallex in all of the rockslides (Mpa: Siegfriedkarte 1881; ",
  "Link LK25": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.pixelkarte-pk25.metadata1&Y=627542&X=104544&zoom=5&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.pixelkarte-pk25.metadata&layers_opacity=1&layers_visibility=true&time_current=latest&lang=en",
"Link Geotope": "Swiss Geotopes",
"href Geotope": "http://map.geo.admin.ch/?selectedNode=LT2_18&Y=627708.64414308&X=105790.60700533&zoom=6&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geotope&layers_opacity=1&layers_visibility=true&time_current=latest&lang=en",

        "Weitere Infos": "More Information",

	"PLANAT": "National Platform for Natural Hazards PLANAT",
  "href PLANAT": "http://www.planat.ch/en/images-details/datum/2010/09/01/bergsturz-randa-1991/",
  "swisstopo": "Federal Office of Topography swisstopo",
	"Info Bergsturz von Randa": "Randa rockslide",
	"Geologischer Kartenviewer": "Geological Mapviewer",
	"href Kartenviewer": "http://www.geologieviewer.ch",
  "Link Kartenviewer": "Randa from a geological perspective",
	"Zeitreihenviewer": "swisstopo",
	"href Zeitreihenviewer": "http://www.swisstopo.ch/en/index.html?flyoutPermalink=Y%3D660000%26X%3D190000%26zoom%3D2%26bgOpacity%3D0%26bgLayer%3DvoidLayer%26layers%3Dch.swisstopo.zeitreihen%26layers_opacity%3D1%26layers_visibility%3Dtrue%26timeseries_tab%3DplayTab%26timeseries_current%3D19381231%26timeseries_compareOpacity%3D50%26timeseries_direction%3Dforwards%26timeseries_fadeTime%3D2000%26lang%3Den",
  "Link Zeitreiseviewer": "Time Series Viewer",
	"Link zum Luftbild": "Link to Areal Image",
	"href Luftbild": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.images-swissimage.metadata1&Y=626522.91274611&X=106670&zoom=8&bgOpacity=0&bgLayer=ch.swisstopo.pixelkarte-farbe&time_current=latest&lang=en",
  "Randa im Luftbild": "The rockslide of Randa in the Areal Image",
	"Geologie": "Geology",
	"href Geologie": "http://map.geo.admin.ch/?selectedNode=node_ch.swisstopo.geologie-geologischer_atlas1&Y=626465.01944256&X=105802.26517871&zoom=8&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.geologie-geologischer_atlas&layers_opacity=1&layers_visibility=true&time_current=latest&lang=en",
  "Link Geologie": "The area around Randa in the Geological Atlas (1:25 000)",
	"BAFU": "Federal Office of the Environment (FOEN)",
	"href BAFU": "http://map.geo.admin.ch/?selectedNode=node_ch.bafu.showme-gemeinden_rutschungen1&Y=629537&X=113160&zoom=3&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.bafu.showme-gemeinden_rutschungen&layers_opacity=0.63&layers_visibility=true&time_current=latest&lang=en",
  "Link BAFU": "Natural risk zones (rockfall)",
	"Realized with": "Realized with",
	"Copyright and Data protection": "Copyright and Data protection",
	"moreInfo": "Information",
	"language": "Language",
	"share": "Share"
    }
};

var lang = getURLParameter('lang') || 'de';


i18n.init({
          detectLngQS: 'lang',
          fallbackLng: 'de',
          resGetPath: 'locales/__lng__/__ns__.json',
          //useLocalStorage: true, localStorageExpirationTime: 86400000
        } , function(t) {
                $("*[data-i18n]").i18n();
                // New window all external links
                $('a[href^="http:"]').attr('target', '_blank');
});


$('#lang').ready(function () {
    $("#lang li").each(function() {
        var li = $(this)[0]; 
        if (li.id == lang) $(this).addClass('selected');
    });
});

$('#infobox').ready(function () {
    var info = $('#infobox');
    /*document.title = i18n[lang].title;
    
    var tpl = info.html();
    var html = Mustache.to_html(tpl, i18n[lang]);
    info.html(html);  */
    info.show(2000);
});

$('#objectInfo').ready(function () {
 var Info2 = $('#objectInfo');
 
    /*
    var tpl2 = Info2.html();
    var html2 = Mustache.to_html(tpl2, i18n[lang]);
	Info2.html(html2); */
	Info2.delay(800).fadeIn(1);
	
});

$('#moreInfo').ready(function () {
    var info3 = $('#moreInfo');
    /*var tpl3 = info3.html();
    var html3 = Mustache.to_html(tpl3, i18n[lang]);
    info3.html(html3);  */
    info3.show(2000);

});

$('#language').ready(function () {
    var info4 = $('#language');
 /*   var tpl4 = info4.html();
    var html4 = Mustache.to_html(tpl4, i18n[lang]);
    info4.html(html4);  */
    info4.show(2000);

});

$('#share').ready(function () {
    var info5 = $('#share');
  /*  var tpl5 = info5.html();
    var html5 = Mustache.to_html(tpl5, i18n[lang]);
    info5.html(html5);  */
    info5.show(2000);

});
