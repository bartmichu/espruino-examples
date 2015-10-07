/*
 On board button and LEDs.
 */

setWatch(function () {
  digitalWrite(LED1, !digitalRead(LED1));
}, BTN, {repeat: true, edge: "rising", debounce: 2000});

setWatch(function () {
  digitalWrite(LED2, !digitalRead(LED2));
}, BTN, {repeat: true, edge: "rising", debounce: 50});