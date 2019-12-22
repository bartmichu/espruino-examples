/*
 On board button and LEDs.
 */


const leds = [LED2, LED1];
let values = 0;

setWatch(() => {
  values = (values % 2) + 1;
  digitalWrite(leds, values);
}, BTN, { repeat: true, edge: 'rising', debounce: 50 });
