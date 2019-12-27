/*
 Print potentiometer readings to the console.

 Components used in this example:
 - Espruino Pico
 - Photoresistor
 - 10K Resistor (brown-black-orange)
 */


const photoresistor = Pin(B1);

E.on('init', () => {
  photoresistor.mode('analog');
});


setInterval(() => {
  console.log(analogRead(photoresistor));
}, 300);
