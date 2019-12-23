/*
 Blink all on-board LEDs on Espruino Board every second using arrays.
 */


const leds = [LED1, LED2, LED3];
let value = 0b111;

setInterval(() => {
  digitalWrite(leds, value);
  value = value ? 0b0 : 0b111;
}, 1000);
