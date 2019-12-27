/*
 Lit LED

 Components used in this example:
 - Espruino Pico
 - LED (built-in)
 - Photoresistor
 - 10K Resistor (brown-black-orange)
 */


const photoresistor = Pin(B1);

E.on('init', () => {
  photoresistor.mode('analog');
});

setInterval(() => {
  analogWrite(LED1, analogRead(photoresistor), { soft: true });
}, 300);
