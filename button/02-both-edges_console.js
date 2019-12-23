/*
 Print on-board button state to the console.
 */


setWatch((e) => console.log(e.state), BTN, { repeat: true, edge: 'both', debounce: 50 });
