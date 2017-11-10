/*
 On board button and LEDs.
 */


var values = 0;
var leds = [LED2, LED1];

setWatch(function () {
  values = (values % 2) + 1;
  digitalWrite(leds, values);
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
