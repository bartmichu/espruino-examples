/*
 On board button and LED.
 */


setWatch(function () {
  digitalWrite(LED1, digitalRead(BTN));
}, BTN, { repeat: true, edge: "both", debounce: 50 });
