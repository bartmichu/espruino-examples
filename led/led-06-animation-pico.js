/*
 Animate on-board LEDs on Espruino Pico with arrays and modulo operator.
 */

let value = 0b00;
const leds = [LED1, LED2];

setInterval(() => {
  value = (value % 3) + 1; // from 1 to 3, where 1 = 0b01, 2 = 0b10, 3 = 0b11
  digitalWrite(leds, value);
}, 200);
