+function() {
  var maxWidth = 600;
  var pc = 'index.html';
  var sp = 'sp.html';

  var current = location.href.replace(/^.*\/([^\/]+)$/, '$1');

  var checkWidth = function() {
    if (window.innerWidth < maxWidth) {
      if (sp !== current) {
        location.href = sp;
      }
    } else {
      if (pc !== current) {
        location.href = pc;
      }
    }
  };

  checkWidth();
  addEventListener('resize', checkWidth);
}();
