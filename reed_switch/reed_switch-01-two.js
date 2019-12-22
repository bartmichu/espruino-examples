/*
 Reed switch x2 and on board LEDs.
 */

const door1 = new Pin(A8);
const door2 = new Pin(B5);

const led1 = LED1;
const led2 = LED2;

function updateLeds() {
  digitalWrite(led1, !door1.read());
  digitalWrite(led2, !door2.read());
}

E.on('init', () => {
  door1.mode('input');
  door2.mode('input');
  updateLeds();
});

setWatch(() => {
  updateLeds();
}, door1, { repeat: true, edge: 'both', debounce: 5 });

setWatch(() => {
  updateLeds();
}, door2, { repeat: true, edge: 'both', debounce: 5 });
