function getURLParameter(key) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
    return result && result[1] || "";
}

function toggleLang(lang) {
    var lang = lang || 'de';
    document.location = document.location.pathname + "?lang=" + lang;
}


<!-- Warning: always concatenate long text lines -->
var i18n = {
    'de': {
        "title": "Morteratschgletscher: Ein Eisriese schwindet",
        "Zusammenfassung": "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
            "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang" +
            " bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen." +
            " (Karte: Siegfriedkarte 1875/1876 und Orthobilder 2009)",

        "Weitere Infos": "Weitere Infos",

        "Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
        "MeteoSchweiz": "MeteoSchweiz",
        "Bundesamt für Umwelt": "Bundesamt für Umwelt",
        "Klima Indikator Gletschwerschwund": "Klima Indikator Gletschwerschwund",
        "Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
        "Die Schweiz während letzteiszeitlichen Maximums": "Die Schweiz während letzteiszeitlichen Maximums",
        "Bundesamt für Statistik": "Bundesamt für Statistik",
        "Arealstatistik": "Arealstatistik",
        "Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
        "Nomenklaturen": "Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
        "Realized with": "Umgesetzt mit",
        "Copyright and Data protection": "Copyright und Datenschutzerklärung"


    },
    'fr': {
        "title": "Glacier de Morteratsch: Un géant de glace disparait",
        "Zusammenfassung": "La longueur du glacier de Morteratsch n'a cessé de diminuer depuis le début des mesures effectuées en 1878. " +
            "Sa longueur diminue d'environ 16 metres/année. Durant les phases plus chaudes (1935-1965) des diminutions allant jusqu'a 48 metres/année ont été observées. " +
            " Depuis les années 1990 on a constaté une augmentation du taux de retrait du glacier." +
            " (Carte: Carte Siegfried 1875/1876 et Orthophotos 2009)",

        "Weitere Infos": "Informations détaillées",

        "Weitere Gletscher": "Autres glaciers (séries temporelles)",
        "MeteoSchweiz": "MétéoSsuisse",
        "Bundesamt für Umwelt": "Office Fédéral de l'Environnement",
        "Klima Indikator Gletschwerschwund": "Indicateur du recul des glaciers",
        "Bundesamt für Landestopografie swisstopo": "Office fédéral de topographie swisstopo",
        "Die Schweiz während letzteiszeitlichen Maximums": "La Suisse durant le dernier maximum glaciaire",
        "Bundesamt für Statistik": "Office Fédéral de la statistique",
        "Arealstatistik": "Statistiques de superficie",
        "Arealstatistik: Gletscher": "Statistiques de superficie: Glacier",
        "Karte": "Carte:",
        "Nomenklaturen": "Nomenclature:",
        "Gletscher der Schweiz": "Glaciers de la Suisse",
        "Realized with": "Réalisé avec",
        "Copyright and Data protection": "Conditions d'utilisation"
    },
    'it': {
        "title": "Ghiacciaio del Morteratsch : un gigante di ghiaccio in declino",
        "Zusammenfassung": "Il lungo ghiacciaio del Morteratsch non ha mai cessato, dall'inizio delle misurazioni nel 1878, di ritirarsi. In media la lingua di ghiaccio si e ritirata di 16 metri ogni anno.  " +
            "Nelle fasi piu calde (dal 1935 al 1965) sono state misurate riduzioni di lunghezza sino a 48 metri all'anno. A partire dagli anni '90 si e registrato un'ulteriore crescita del " +
            " tasso di ritirata del ghiacciaio. (cartina: carta Siegfried 1875/1876 e Ortofoto 2009)",

        "Weitere Infos": "Ulteriori informazioni",

        "Weitere Gletscher": "Altri ghiacciai",
        "MeteoSchweiz": "MeteoSvizzera",
        "Bundesamt für Umwelt": "Ufficio federale dell'ambiente",
        "Klima Indikator Gletschwerschwund": "Indicatori climatici sul ritiro dei ghiacciai",
        "Bundesamt für Landestopografie swisstopo": "Ufficio federale di topografia swisstopo",
        "Die Schweiz während letzteiszeitlichen Maximums": "La Svizzera durante l'ultimo massimo glaciale",
        "Bundesamt für Statistik": "Ufficio federale di statistica",
        "Arealstatistik": "Statistica di superficie",
        "Arealstatistik: Gletscher": "Statistica di superficie: ghiacciaio",
        "Karte": "Cartina:",
        "Nomenklaturen": "Nomenclatura:",
        "Gletscher der Schweiz": "Ghiacciai svizzeri",
        "Realized with": "Realizzato con",
        "Copyright and Data protection": "Copyright e protezione dei diritti d'autore"
    },
    'en': {
        "title": "Morteratsch glacier: An ice giant is shrinking",
        "Zusammenfassung": "Since beginning of the monitoring in 1878, the Morteratsch glacier is retreating steadily with an " +
            "average recession rate of 16 meter/year. During warmer phases (1935 - 1965) shrinking rates of up to 48 meter/year have been observed. Since the 1990s, an " +
            " increase of the recession is the case. (Map: Siegfriedkarte 1875/1876 and aerial imagery 2009)",

        "Weitere Infos": "More Information",

        "Weitere Gletscher": "Other glaciers (Time Series)",
        "MeteoSchweiz": "MeteoSwiss",
        "Bundesamt für Umwelt": "Federal Office for the Environment",
        "Klima Indikator Gletschwerschwund": "Indicator Glacier retreat",
        "Bundesamt für Landestopografie swisstopo": "Federal Office of Topography swisstopo",
        "Die Schweiz während letzteiszeitlichen Maximums": "Swiss last glacial maximum",
        "Bundesamt für Statistik": "Federal Office of Statistics",
        "Arealstatistik": "Area Statistics",
        "Arealstatistik: Gletscher": "Area Statistics: Glacier",
        "Karte": "Map:",
        "Nomenklaturen": "Nomenclature:",
        "Gletscher der Schweiz": "Swiss Glaciers",
        "Realized with": "Realized with",
        "Copyright and Data protection": "Copyright and Data protection"

    }
};

var lang = getURLParameter('lang') || 'de';


$('#lang').ready(function() {
    $("#lang li").each(function() {
        var li = $(this)[0];
        if (li.id == lang) $(this).addClass('selected');
    });
});

$('#infobox').ready(function() {
    document.title = i18n[lang].title;
    var info = $('#infobox');
    var tpl = info.html();
    var html = Mustache.to_html(tpl, i18n[lang]);
    info.html(html);
    info.show(2000);
});
