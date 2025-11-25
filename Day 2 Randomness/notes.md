⭐ Short Explanation: Randomness in DOM + Math.random()

Math.random() gives a random number between 0 and 1 (0 included, 1 excluded).

Example: 0.2345, 0.9876, 0.0012

Useful for:
✔ Random colors
✔ Random numbers
✔ Random positions
✔ Random selections

Common Patterns

1. Random number between 0 and N

Math.floor(Math.random() * N);

Example: Random number 0–9
Math.floor(Math.random() * 10);


2. Random color
const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

function random(n){
  return Math.floor(Math.random() * (n+1));
}


3. Random item from an array

let arr = [red, blue, green, white]
let rndmitm = arr[Math.floor(Math.random() * arr.length)]

📌 Key combo:
Math.random() + Math.floor()
