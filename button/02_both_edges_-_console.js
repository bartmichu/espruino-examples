/*
 Print on-board button state to the console.
 */

setWatch(() => console.log(digitalRead(BTN)), BTN, { repeat: true, edge: "both", debounce: 50 });
