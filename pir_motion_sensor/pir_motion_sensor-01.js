/*
 PIR Motion Sensor and on board LED.
 */

var sensor = new Pin(A8);
var led = LED1;

E.on("init", function () {
  sensor.mode("input");
});

setWatch(function () {
  led.set();
}, sensor, {repeat: true, edge: "rising", debounce: 50});

setWatch(function () {
  led.reset();
}, sensor, {repeat: true, edge: "falling", debounce: 50});