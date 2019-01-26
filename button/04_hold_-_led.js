/*
 On board button and LEDs.
 */

setWatch(() => {
  digitalWrite(LED1, !digitalRead(LED1));
}, BTN, { repeat: true, edge: "rising", debounce: 2000 });

setWatch(() => {
  digitalWrite(LED2, !digitalRead(LED2));
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
