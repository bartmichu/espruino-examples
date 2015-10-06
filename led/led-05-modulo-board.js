/*
 On board LED (Espruino Board).
 */

var index = 0;
var leds = [LED1, LED2, LED3];
var values = [0, 1, 2, 4]; //0 = 0b000, 1 = 0b001, 2 = 0b010, 4 = 0b100

setInterval(function () {
  //from 1 to 3
  index = (index % 3) + 1;
  digitalWrite(leds, values[index]);
}, 200);