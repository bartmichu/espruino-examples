/*
 Relay module and on board LEDs.
 */

var ledRed = LED1;
var ledGreen = LED2;
var button = BTN;
var relayPin = new Pin(A8);

function updateLed() {
  if (relayPin.read()) {
    ledRed.reset();
    ledGreen.set();
  } else {
    ledRed.set();
    ledGreen.reset();
  }
}

E.on("init", function () {
  relayPin.mode("output");
  updateLed();
});

setWatch(function () {
  relayPin.write(!relayPin.read());
  updateLed();
}, button, {repeat: true, edge: "rising", debounce: 50});