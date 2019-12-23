/*
 Relay module and on board LEDs.
 */


const ledRed = LED1;
const ledGreen = LED2;
const button = BTN;
const relayPin = new Pin(A8);

function updateLed() {
  if (relayPin.read()) {
    ledRed.reset();
    ledGreen.set();
  } else {
    ledRed.set();
    ledGreen.reset();
  }
}

E.on('init', () => {
  relayPin.mode('output');
  updateLed();
});

setWatch(() => {
  relayPin.write(!relayPin.read());
  updateLed();
}, button, { repeat: true, edge: 'rising', debounce: 50 });
