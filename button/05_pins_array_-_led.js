/*
 On board button and LEDs.
 */

const leds = [LED2, LED1];

setWatch(() => {
  digitalWrite(leds, digitalRead(BTN) + 0b01);
}, BTN, { repeat: true, edge: "both", debounce: 50 });
