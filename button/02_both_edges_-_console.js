/*
 On board button and console log.
 */


setWatch(function () {
  console.log(digitalRead(BTN));
}, BTN, { repeat: true, edge: "both", debounce: 50 });
