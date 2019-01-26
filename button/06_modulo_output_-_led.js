/*
 On board button and LEDs.
 */

let values = 0;
const leds = [LED2, LED1];

setWatch(() => {
  values = (values % 2) + 1;
  digitalWrite(leds, values);
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
