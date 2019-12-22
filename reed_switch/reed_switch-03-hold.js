/*
 Reed switch.
 */

const door = new Pin(A8); // pull-up

E.on('init', () => {
  door.mode('input');
});

function doorOpenedHandler() {
  console.log('door opened');
}

function doorHeldHandler() {
  console.log('door held');
}

setWatch(() => {
  doorOpenedHandler();
}, door, { repeat: true, edge: 'falling', debounce: 5 });

setWatch(() => {
  doorHeldHandler();
}, door, { repeat: true, edge: 'falling', debounce: 2000 });
