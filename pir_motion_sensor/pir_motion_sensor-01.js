/*
 PIR Motion Sensor and on board LED.
 */

const sensor = new Pin(A8);
const led = LED1;

E.on('init', () => {
  sensor.mode('input');
});

setWatch(() => {
  led.set();
}, sensor, { repeat: true, edge: 'rising', debounce: 50 });

setWatch(() => {
  led.reset();
}, sensor, { repeat: true, edge: 'falling', debounce: 50 });
