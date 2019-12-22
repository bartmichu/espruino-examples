/*
 Reed switch and on board LED.
 */

const door = new Pin(A8);
const led = LED1;

function updateLed() {
  digitalWrite(led, door.read());
}

E.on('init', () => {
  door.mode('input');
  updateLed();
});

setWatch(() => {
  updateLed();
}, door, { repeat: true, edge: 'both', debounce: 5 });
