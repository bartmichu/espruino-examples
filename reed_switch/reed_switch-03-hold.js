/*
 Reed switch.
 */

var door = new Pin(A8); //pull-up

E.on("init", function () {
  door.mode("input");
});

function doorOpenedHandler() {
  console.log("door opened");
}

function doorHeldHandler() {
  console.log("door held");
}

setWatch(function () {
  doorOpenedHandler();
}, door, {repeat: true, edge: "falling", debounce: 5});

setWatch(function () {
  doorHeldHandler();
}, door, {repeat: true, edge: "falling", debounce: 2000});