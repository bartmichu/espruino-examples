/*
 On board LED.
 */

var value = true;
setInterval(function () {
  digitalWrite(LED2, value);
  value = !value;
}, 300);