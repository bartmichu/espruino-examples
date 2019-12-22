/*
 Animate on-board LEDs on Espruino Board with arrays and modulo operator.
 */


const leds = [LED1, LED2, LED3];
const values = [0b000, 0b001, 0b010, 0b100];
let index = 0;

setInterval(() => {
  index = (index % 3) + 1; // from 1 to 3
  digitalWrite(leds, values[index]);
}, 200);
