/*
 PIR Motion Sensor and on board LED.
 */

const sensor = new Pin('A8');
const led = LED1;

E.on('init', () => {
  sensor.mode('input');
});

setWatch(() => {
  digitalWrite(led, sensor.read());
}, sensor, { repeat: true, edge: 'both', debounce: 10 });
