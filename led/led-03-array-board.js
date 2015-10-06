/*
 On board LED (Espruino Board).
 */

var value = 7; //0b111
var leds = [LED1, LED2, LED3];

setInterval(function () {
  digitalWrite(leds, value);
  value = value ? 0 : 7;
}, 1000);