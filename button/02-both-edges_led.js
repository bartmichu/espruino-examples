/*
 Use LED to signal on-board button events.
 */


setWatch((e) => {
  digitalWrite(LED1, e.state);
}, BTN, { repeat: true, edge: 'both', debounce: 50 });
