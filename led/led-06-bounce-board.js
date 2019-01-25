/*
 Animate on-board LEDs on Espruino Board with arrays and modulo operator.
 */

const leds = [LED1, LED2, LED3];
const values = [0b001, 0b010, 0b100];
let index = 0;
let step = 1;

setInterval(() => {
  if (index <= 0) {
    step = 1;
  } else if (index >= values.length - 1) {
    step = -1;
  }
  index = (index % values.length) + step;
  digitalWrite(leds, values[index]);
}, 100);
