/*
 Relay module and on board LEDs.
 */

var leds = [LED2, LED1];
var button = BTN;
var relayPin = new Pin(A8);

function updateLed() {
  digitalWrite(leds, relayPin.read() + 1); //1 = 0b01, 2 = 0b10
}

E.on("init", function () {
  relayPin.mode("output");
  updateLed();
});

setWatch(function () {
  relayPin.write(!relayPin.read());
  updateLed();
}, button, {repeat: true, edge: "rising", debounce: 50});