/*
 On board button and console log.
 */


var state = 0;

setWatch(function () {
  state = !state;
  console.log(state);
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
