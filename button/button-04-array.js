/*
 On board button and LEDs.
 */

var leds = [LED2, LED1];
setWatch(function () {
  digitalWrite(leds, digitalRead(BTN) + 1); //1 = 0b01, 2 = 0b10
}, BTN, {repeat: true, edge: "both", debounce: 50});