/*
 Relay module.
 */

var button = BTN;
var relayPin = new Pin(A8);

E.on("init", function () {
  relayPin.mode("output");
});

setWatch(function () {
  relayPin.write(true);
}, button, {repeat: true, edge: "rising", debounce: 50});

setWatch(function () {
  relayPin.write(false);
}, button, {repeat: true, edge: "falling", debounce: 50});