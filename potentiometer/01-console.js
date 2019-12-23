/*
 Print potentiometer value to the console.
*/


const potPin = Pin(B1);

E.on('init', () => {
  potPin.mode('analog');
});

setInterval(() => {
  console.log(analogRead(potPin));
}, 300);
