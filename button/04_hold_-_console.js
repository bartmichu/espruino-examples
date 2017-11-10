/*
 On board button and console log.
 */


setWatch(function () {
  console.log("button held down");
}, BTN, { repeat: true, edge: "rising", debounce: 2000 });


setWatch(function () {
  console.log("button pushed");
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
