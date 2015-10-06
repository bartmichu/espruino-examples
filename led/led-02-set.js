/*
 On board LED.
 */

setInterval(function () {
  LED2.reset();
}, 1000);

setInterval(function () {
  LED2.set();
}, 2000);