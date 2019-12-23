/*
 Blink on-board LED.
*/


const potPin = Pin(B1);
const led = LED1;

E.on('init', () => {
  potPin.mode('analog');
});

setInterval(() => {
  digitalPulse(led, 1, parseFloat(analogRead(potPin).toFixed(1)) * 10);
}, 300);
