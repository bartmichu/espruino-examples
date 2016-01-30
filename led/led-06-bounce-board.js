/*
 On board LED (Espruino Board).
 */

var leds = [LED1, LED2, LED3];
var values = [1, 2, 4];
var index = 0;
var step = 1;

setInterval(function () {
  if (index <= 0) {
    step = 1;
  } else if (index >= values.length - 1) {
    step = -1;
  }
  index = (index % values.length) + step;
  digitalWrite(leds, values[index]);
}, 100);