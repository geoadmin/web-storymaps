// translate text elements according to lang variable
i18n.init({
    lng: lang
}, function(t) {
    $('.multilang').i18n();
});


$(document).ready(function() {
    if (lang == 'de') {
        $('title').html('Die wärmsten Fliessgewässer der Schweiz');
    }
    if (lang == 'fr') {
        $('title').html('Les cours d’eau les “plus chauds“ de Suisse');
    }
    if (lang == 'it') {
        $('title').html('I fiumi “più caldi” della Svizzera');
    }
    if (lang == 'en') {
        $('title').html('The warmest rivers of Switzerland');
    }


});
