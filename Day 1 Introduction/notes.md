📌 DOM (Document Object Model)

DOM browser ka model hota hai jo HTML ko JavaScript ke through access aur modify karne deta hai.

🧱 Four Pillars of DOM
1️⃣ Selection of Elements

HTML element ko JavaScript mein access karna taaki usko modify kiya ja sake.

2️⃣ Changing HTML

Selected element ka text ya HTML content JavaScript se update karna.

3️⃣ Changing CSS

JavaScript ke through HTML element ki styling change karna (color, size, background, etc.).

4️⃣ Event Listeners

User ke actions (click, hover, type, etc.) ko detect karke function run karna.

📍 Element Selectors

## querySelector()
First matching element ko select karta hai.

## querySelectorAll()
Matching elements ka group (NodeList) return karta hai.

## getElementById()
Element ko uski unique id se select karta hai.

## getElementsByClassName()
Same class wale multiple elements return karta hai.

✨ Changing HTML Methods

## innerHTML
Element ka HTML content change ya add karta hai.

## textContent
Sirf text ko update karta hai, HTML tags ko ignore karta hai.


🎨 Changing CSS
h1.style.color = "red";

JavaScript ki help se CSS property change karta hai (ex: color, background, fontSize).

🎯 Event Listener

addEventListener()
Kisi event (like click) ke hone par function execute karta hai.

button.addEventListener("click", function() {
    console.log("Clicked");
});
