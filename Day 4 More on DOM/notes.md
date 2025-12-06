setTimeout - delay 
setInterval - particular time intervals par chalega 

✅ setTimeout() — ONE-TIME DELAY TIMER

Runs code once after a fixed delay.

syntax ->

setTimeout(function, timeInMilliseconds)

setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

➡ Runs only once after 3 seconds

✅ Real-Life Use Cases

1. Show popup after 5 sec

2. Hide loader after delay

3. Stop progress bar

4. Show toast notification



✅ setInterval() — REPEATING TIMER

Runs code again and again at fixed intervals.

setInterval(function, timeInMilliseconds)

setInterval(() => {
  console.log("Running every 1 second");
}, 1000);


✅ Real-Life Use Cases

Clock timer

Game score update

Progress bar animation

Live notifications

Auto-slider