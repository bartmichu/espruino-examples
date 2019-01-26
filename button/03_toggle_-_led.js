/*
 Use on-board button to toggle LED.
 */

setWatch(() => {
  digitalWrite(LED1, !digitalRead(LED1));
}, BTN, { repeat: true, edge: "rising", debounce: 50 });
