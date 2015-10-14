/*
 Reed switch x2 and on board LEDs.
 */

var door1 = new Pin(A8);
var door2 = new Pin(B5);

var led1 = LED1;
var led2 = LED2;

function updateLeds() {
  digitalWrite(led1, !door1.read());
  digitalWrite(led2, !door2.read());
}

E.on("init", function () {
  door1.mode("input");
  door2.mode("input");
  updateLeds();
});

setWatch(function () {
  updateLeds();
}, door1, {repeat: true, edge: "both", debounce: 5});

setWatch(function () {
  updateLeds();
}, door2, {repeat: true, edge: "both", debounce: 5});