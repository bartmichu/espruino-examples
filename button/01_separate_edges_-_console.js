/*
 On board button and console.
 */


setWatch(function () {
  console.log("pushed");
}, BTN, { repeat: true, edge: "rising", debounce: 50 });


setWatch(function () {
  console.log("released");
}, BTN, { repeat: true, edge: "falling", debounce: 50 });
