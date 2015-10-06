/*
 On board LED.
 */

setInterval(function () {
  digitalPulse(LED2, 1, 500);
}, 2000);