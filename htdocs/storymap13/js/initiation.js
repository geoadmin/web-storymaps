function initiation() {

  if ($.browser.msie && $.browser.version <= 8) {
    $('div#mainContent').replaceWith(
        '<div class="browserError">' +
        '<h1>Incompatible Browser</h1>' +
        '<p>Please update your browser or use modern web browser!</p>' +
        '</div)');
  }

}
