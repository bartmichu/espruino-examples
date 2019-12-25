/*
 Use a button to control relay module.

 Components used in this example:
 - Espruino Pico
 - Button (built-in)
 - Relay module
 */


const button = BTN;
const relayPin = new Pin(A8);

E.on('init', () => {
  relayPin.mode('output');
});

setWatch(() => {
  relayPin.write(true);
}, button, { repeat: true, edge: 'rising', debounce: 50 });

setWatch(() => {
  relayPin.write(false);
}, button, { repeat: true, edge: 'falling', debounce: 50 });
