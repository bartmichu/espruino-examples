/*
 Use LEDs to signal on-board button events.
 */

setWatch(() => LED1.set(), BTN, { repeat: true, edge: "rising", debounce: 50 });
setWatch(() => LED1.reset(), BTN, { repeat: true, edge: "falling", debounce: 50 });
