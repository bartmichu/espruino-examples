/*
 On board button and LEDs.
 */


const leds = [LED2, LED1];

setWatch((e) => {
  digitalWrite(leds, e.state + 0b01);
}, BTN, { repeat: true, edge: 'both', debounce: 50 });
