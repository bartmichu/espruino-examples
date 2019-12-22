/*
 Use on-board button to toggle a value.
 */

let state = 0;
setWatch(() => {
  state = !state;
  console.log(state);
}, BTN, { repeat: true, edge: 'rising', debounce: 50 });
