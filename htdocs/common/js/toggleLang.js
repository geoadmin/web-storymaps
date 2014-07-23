// get the languange parameter in the URL (i for case insensitive;
//exec for test for a match in a string and return thr first match)

function getURLParameter(key) {
  var result = new RegExp(key + '=([^&]*)', 'i').exec(window.location.search);
  return result && result[1] || '';
}

//
function toggleLang(lang) {
  var lang = lang || 'de';
  document.location = document.location.pathname + '?lang=' + lang;
}

// set UR
var lang = getURLParameter('lang') || 'de';

$('#lang').ready(function() {
  $('#lang li').each(function() {
    var li = $(this)[0];
    if (li.id == lang) $(this).addClass('selected');
  });
});


