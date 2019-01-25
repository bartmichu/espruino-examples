/*
 Blink on-board LED every 300 milliseconds.
 */

let value = true;
setInterval(() => {
  digitalWrite(LED2, value);
  value = !value;
}, 300);
