/*
 Print on-board button events to the console.
 */


setWatch(() => console.log('button pushed'), BTN, { repeat: true, edge: 'rising', debounce: 50 });

setWatch(() => console.log('button released'), BTN, { repeat: true, edge: 'falling', debounce: 50 });
