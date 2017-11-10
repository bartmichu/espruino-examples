/*
 On board button and LED.
 */


setWatch(function () {
  digitalWrite(LED1, !digitalRead(LED1));
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
