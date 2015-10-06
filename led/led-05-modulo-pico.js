/*
 On board LED (Espruino Pico).
 */

var value = 0; //0 = 0b00
var leds = [LED1, LED2];

setInterval(function () {
  //from 1 to 3, where 1 = 0b01, 2 = 0b10, 3 = 0b11
  value = (value % 3) + 1;
  digitalWrite(leds, value);
}, 200);