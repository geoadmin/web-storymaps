// translate text elements according to lang variable
i18n.init({
  lng: lang
}).done(function(t) {
  $('.multilang').i18n();
  $('title').html(i18n.t('text.infoboxTitle'));
});

