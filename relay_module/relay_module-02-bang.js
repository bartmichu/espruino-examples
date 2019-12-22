/*
 Relay module.
 */

const button = BTN;
const relayPin = new Pin(A8);

E.on('init', () => {
  relayPin.mode('output');
});

setWatch(() => {
  relayPin.write(!relayPin.read());
}, button, { repeat: true, edge: 'falling', debounce: 50 });
