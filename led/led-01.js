/*
 On board LED.
 */

setInterval(function () {
  digitalWrite(LED1, !digitalRead(LED1));
}, 300);