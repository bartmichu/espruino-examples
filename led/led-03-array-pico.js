/*
 On board LED (Espruino Pico).
 */

var value = 3; //0b11
var leds = [LED1, LED2];

setInterval(function () {
  digitalWrite(leds, value);
  value = value ? 0 : 3;
}, 1000);