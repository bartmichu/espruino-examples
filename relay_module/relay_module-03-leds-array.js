/*
 Relay module and on board LEDs.
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
