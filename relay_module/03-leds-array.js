/*
 Use a button to toggle relay module. LEDs will be synced with relay.

 Components used in this example:
 - Espruino Pico
 - Button (built-in)
 - 2x LED (built-in)
 - Relay module
 */


const leds = [LED2, LED1];
const button = BTN;
const relayPin = new Pin(A8);

function updateLed() {
  digitalWrite(leds, relayPin.read() + 1); // 1 = 0b01, 2 = 0b10
}

E.on('init', () => {
  relayPin.mode('output');
  updateLed();
});

setWatch(() => {
  relayPin.write(!relayPin.read());
  updateLed();
}, button, { repeat: true, edge: 'rising', debounce: 50 });
