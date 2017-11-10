/*
 On board button and LED.
 */


setWatch(function () {
  LED1.set();
}, BTN, { repeat: true, edge: "rising", debounce: 50 });


setWatch(function () {
  LED1.reset();
}, BTN, { repeat: true, edge: "falling", debounce: 50 });
