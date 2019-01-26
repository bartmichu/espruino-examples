/*
 On board button and console log.
 */

setWatch(() => console.log("button held down"), BTN, { repeat: true, edge: "rising", debounce: 2000 });
setWatch(() => console.log("button pushed"), BTN, { repeat: true, edge: "rising", debounce: 50 });
