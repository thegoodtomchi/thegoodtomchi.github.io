$(document).ready(function() {
  var focuses = document.getElementsByClassName('focus-descriptions');
  var forEach = Array.prototype.forEach;

  forEach.call(focuses, function (focus) {
    $(focus).dotdotdot({
      ellipsis: '...',
      after: 'a.readmore',
      watch: true,
      height: 100
    });
  });

  window.sendPage = function (route) {
    window.location = '/' + route;
    return;
  };
  
});
