/*
 Use separate intervals to switch on-board LED on and off.
 */

setInterval(() => LED2.reset(), 1000);

setInterval(() => LED2.set(), 2000);
