/*
 Reed switch and on board LED.
 */

var door = new Pin(A8);
var led = LED1;

function updateLed() {
  digitalWrite(led, door.read());
}

E.on("init", function () {
  door.mode("input");
  updateLed();
});

setWatch(function () {
  updateLed();
}, door, {repeat: true, edge: "both", debounce: 5});