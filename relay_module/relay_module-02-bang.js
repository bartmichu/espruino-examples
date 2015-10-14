/*
 Relay module.
 */

var button = BTN;
var relayPin = new Pin(A8);

E.on("init", function () {
  relayPin.mode("output");
});

setWatch(function () {
  relayPin.write(!relayPin.read());
}, button, {repeat: true, edge: "falling", debounce: 50});