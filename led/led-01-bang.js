/*
 Blink on-board LED every 300 milliseconds.
 */


setInterval(() => digitalWrite(LED1, !digitalRead(LED1)), 300);
