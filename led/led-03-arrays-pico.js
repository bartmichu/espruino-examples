/*
 Blink all on-board LEDs on Espruino Pico every second using arrays.
 */

let value = 0b11;
const leds = [LED1, LED2];

setInterval(() => {
  digitalWrite(leds, value);
  value = value ? 0b0 : 0b11;
}, 1000);
