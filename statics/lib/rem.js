(function(doc, win) {
  var docEI = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientataionchange' : 'resize',
    recalc = function() {
      var clientWidth = docEI.clientWidth;
      if (!clientWidth) return;
      if (clientWidth < 750) {
        //100是字体大小，750移动端临界值，等比计算
        docEI.style.fontSize = 100 * (clientWidth / 750) + 'px';
      } else {
        docEI.style.fontSize = '100px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
