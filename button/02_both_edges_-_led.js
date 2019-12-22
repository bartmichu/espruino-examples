/*
 Use LED to signal on-board button events.
 */

setWatch(() => {
  digitalWrite(LED1, digitalRead(BTN));
}, BTN, { repeat: true, edge: 'both', debounce: 50 });
