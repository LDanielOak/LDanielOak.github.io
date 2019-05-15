/*function antes() {
    document.getElementById("times").nodeValue("-1");
}

function depois() {
  document.getElementById("times").nodeValue("+1");
} */

/* function getNext() {
  var $curr = $('#times '),
      $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();

  transition($curr, $next);
}

function getPrev() {
  var $curr = $('.slideshow img:visible'),
      $next = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
  transition($curr, $next);
} */

var inputTime = document.querySelector('[name=time]');
var outputTime = document.querySelector('[name=valorTime]');

function mostraTime() {
    outputTime.value = inputTime.value;
}

inputTime.oninput = mostraTime;