/*
 PIR Motion Sensor and on board LED.
 */

var sensor = new Pin("A8");
var led = LED1;

E.on("init", function () {
  sensor.mode("input");
});

setWatch(function () {
  digitalWrite(led, sensor.read());
}, sensor, {repeat: true, edge: "both", debounce: 10});