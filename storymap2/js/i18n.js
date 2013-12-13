function getURLParameter(key) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && result[1] || ""; 
}

function toggleLang(lang) {
    var lang = lang || 'de';
    document.location = document.location.pathname + "?lang="+ lang;
}


<!-- Warning: always concatenate long text lines -->
var i18n = {
    'de': {
    "title": "Städte: die zehn grössten im Zeitraffer",
	"Zusammenfassung" : "Rund drei Viertel der Schweizer Bevölkerung leben heute in Städten und Agglomerationen. " +
	"Etwa vier von fünf Arbeitsplätzen befinden sich in diesen urbanen Gebieten. Die Zersiedelung"+
	" hat daher zwischen 1935 und 2002 stark zugenommen. Der stärkste Anstieg war zwischen"+
	" 1960 und 1980 zu verzeichnen. Der Anstieg fiel am stärksten im Mittelland aus, gefolgt vom Jura." +
	" (Karte: Landeskarte Farbe)",

    "Weitere Infos": "Weitere Infos",

	"Links zu Karten": "Links zu Karten",
	"Agglomerationen und isolierte Städte 2000": "Agglomerationen und isolierte Städte 2000",
	"Gemeindetypologie 1990 ARE (9 Typen)": "Gemeindetypologie 1990 ARE (9 Typen)",
	
	"Links zum Thema": "Links zum Thema",
	
	"Forschungsanstalt für Wald, Schnee und Landschaft WSL": "Forschungsanstalt für Wald, Schnee und Landschaft WSL",
	"Zersiedelung": "Zersiedelung",
	
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Umweltzustand": "Umweltzustand: Landschaft",
	"Indikator Landschaftszersiedelung": "Indikator Landschaftszersiedelung",
	
	"Bundesamt für Raumentwicklung": "Bundesamt für Raumentwicklung",
	"Landschaft unter Druck": "Landschaft unter Druck",
	"Städte und Agglomerationen": "Städte und Agglomerationen",
	
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Agglomerationen und Metropolräume": "Agglomerationen und Metropolräume",
	"Bevölkerungsstand und -struktur – Indikatoren": "Bevölkerungsstand und -struktur – Indikatoren",
	"Umwelt - Indikatoren Zersiedelung": "Umwelt - Indikatoren Zersiedelung",
	
	"Realized with": "Umgesetzt mit",
	"Copyright and Data protection": "Copyright und Datenschutzerklärung" 


    },
    'fr': {
    "title": "Villes: les dix plus grandes en accéléré",
	"Zusammenfassung" : "Près des trois quarts de la population suisse vit dans les villes et agglomérations. " +
	"Environ 4 places de travail sur 5 se situent dans ces zones urbaines. "+
	"L'étalement urbain a fortement augmenté entre 1935 et 2002. "+
	"La plus forte progression a été enregistrée entre 1960 et 1980. "+
	"Celle-ci a été la plus forte sur le Plateau, suivie par le Jura." +
	" (Carte: Carte nationale couleur)",

    "Weitere Infos": "Informations détaillées",
	
	"Links zu Karten": "Liens vers les cartes",
	"Agglomerationen und isolierte Städte 2000": "Agglomérations et villes isolées 2000",
	"Gemeindetypologie 1990 ARE (9 Typen)": "Typologie des communes ARE 1990 (9 types)",
	
	"Links zum Thema": "Liens sur le thème",
	
	"Forschungsanstalt für Wald, Schnee und Landschaft WSL": "Institut de recherche pour la forêt, la neige et le paysage WSL",
	"Zersiedelung": "Etalement urbain",
	
	"Bundesamt für Umwelt": "Office Fédéral de l'Environnement",
	"Umweltzustand": "Etat de l'environnement: paysage",
	"Indikator Landschaftszersiedelung": "Indicateur mitage du paysage",
	
	"Bundesamt für Raumentwicklung": "Office fédéral du développement territorial",
	"Landschaft unter Druck": "Le paysage sous pression",
	"Städte und Agglomerationen": "Villes et agglomérations",
	
	"Bundesamt für Statistik" :"Office Fédéral de la statistique",
	"Agglomerationen und Metropolräume": "Agglomérations et aires métropolitaines",
	"Bevölkerungsstand und -struktur – Indikatoren": "Etat et structure de la population – Indicateurs",
	"Umwelt - Indikatoren Zersiedelung": "Environnement - Indicateurs",

	"Realized with": "Réalisé avec",
	"Copyright and Data protection": "Conditions d'utilisation"
    },
    'it': { 
	"title": "Città: Le dieci più grandi in accelerata",
	"Zusammenfassung" : "Quasi i tre quarti della popolazione svizzera vive nelle città e negli agglomerati urbani.  " +
	"Circa 4 posti di lavoro su 5 sono situati nelle aree urbane. "+
	"L'espansione urbana è fortemente aumentato tra il 1935 e il 2002. "+
	"Il maggiore incremento è stato registrato tra il 1960 e il 1980. "+
	"Questo è stato il più alto sul Altipiano, seguito dal Giura. "+
	" (cartina: carta nazionale colore)",

    "Weitere Infos": "Ulteriori informazioni",
	
	"Links zu Karten": "Links alle carte",
	"Agglomerationen und isolierte Städte 2000": "Agglomerati e cittá isolate 2000",
	"Gemeindetypologie 1990 ARE (9 Typen)": "Tipologia dei comuni ARE 1990 (9 tipi)",
	
	"Links zum Thema": "Links sul tema",
	
	"Forschungsanstalt für Wald, Schnee und Landschaft WSL": "Istituto di ricerca per la foresta, la neve e il paesaggio WSL",
	"Zersiedelung": "Espansione urbana",

	"Bundesamt für Umwelt": "Ufficio federale dell'ambiente",
	"Umweltzustand": "Stato dell'ambiente: paesaggio",
	"Indikator Landschaftszersiedelung": "Indicatore Dispersione insediativa",
	
	"Bundesamt für Raumentwicklung": "Ufficio federale dello sviluppo territoriale",
	"Landschaft unter Druck": "Il paesaggio sotto pressione",
	"Städte und Agglomerationen": "Città e agglomerati",

	"Bundesamt für Statistik": "Ufficio federale di statistica",
	"Agglomerationen und Metropolräume": "Città e aree metropolitane",
	"Bevölkerungsstand und -struktur – Indikatoren": "Stato e struttura della popolazione – Indicatori",
	"Umwelt - Indikatoren Zersiedelung": "Ambiente - Indicatori",

	"Realized with": "Realizzato con",
	"Copyright and Data protection": "Copyright e protezione dei diritti d'autore"
    },
    'en': {
    "title": "Cities: the ten largest in accelerated",
	"Zusammenfassung" : "Nearly three-quarters of the Swiss population lives in cities and conurbations. " +
	"About 4 work placesout of 5 are located in the urban areas. "+
	"Urban sprawl has increased sharply between 1935 and 2002. "+
	"The largest increase was recorded between 1960 and 1980. "+
	"This was the highest on the Plateau, followed by the Jura." +
	" (Map: National Map Color)",

    "Weitere Infos": "More Information",
	
	"Links zu Karten": "Links to the Maps",
	"Agglomerationen und isolierte Städte 2000": "Agglomeration and isolated cities 2000",
	"Gemeindetypologie 1990 ARE (9 Typen)": "Typology of municipalities ARE 1990 (9 types)",
	
	"Links zum Thema": "Links to Topic",
	
	"Forschungsanstalt für Wald, Schnee und Landschaft WSL": "Research Institute for Forest, Snow and Landscape WSL",
	"Zersiedelung": "Urban sprawl",
	
	"Bundesamt für Umwelt": "Federal Office for the Environment",
	"Umweltzustand": "Environmental state: Landscape",
	"Indikator Landschaftszersiedelung": "Indicator Urban sprawl",
	
	"Bundesamt für Raumentwicklung": "Federal Office for Spatial Development",
	"Landschaft unter Druck": "Landscape under pressure",
	"Städte und Agglomerationen": "Cities and conurbations",
	
	"Bundesamt für Statistik" :"Federal Office of Statistics",
	"Agglomerationen und Metropolräume": "Cities and metropolitan areas",
	"Bevölkerungsstand und -struktur – Indikatoren": "Population size and composition – Indicators",
	"Umwelt - Indikatoren Zersiedelung": "Environment - Indicators",

	"Realized with": "Realized with",
	"Copyright and Data protection": "Copyright and Data protection"
    }
};

var lang = getURLParameter('lang') || 'de';


$('#lang').ready(function () {
    $("#lang li").each(function() {
        var li = $(this)[0]; 
        if (li.id == lang) $(this).addClass('selected');
    });
});

$('#infobox').ready(function () {
    document.title = i18n[lang].title;
    var info = $('#infobox');
    var tpl = info.html();
    var html = Mustache.to_html(tpl, i18n[lang]);
    info.html(html);
    info.show(2000);
});

