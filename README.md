![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)

# JavaScript Exercises

### 1. Exercise 1
**User Profile**: Create a program that defines three variables for a social media profile: a user's `username` (string), `age` (number), and `isOnline` (boolean). Then, output a welcome message using a **template literal** (e.g., "Welcome, Astrid! You are 28 years old and currently online.").
```javascript
class UserProfile {
    constructor(name,age,isOnLine) {
        this.name = name;
        this.age = age;
        this.isOnLine = isOnLine;
    }
    greet(){
        console.log("Welcome, my name is !" + this.name + this.age + this.isOnLine);
    }
}
```
### 2. Exercise 2
**Shopping Receipt**: Create two variables `price` and `quantity` with values `150` and `3`. Calculate and log the `subtotal`. Then, calculate the **tax** (25% of subtotal) and the **final total**.
```javascript
let Price = 150;
let Quantity = 3;
let Tax = 0.25 //25%

let SubTotal = Quantity * Price; //Sum TaxFree 
let total =SubTotal * Tax ;       // Sum After calculate Tax
console.log("Total:" + total);
```

### 3. Exercise 3
**Data Type Check**: You receive data from an API. Predict and log the output of the following comparisons to understand how JavaScript handles types:
- `10 == "10"`
- `10 === "10"`
- `undefined == null`
- `undefined === null`
Explain in a comment why we should prefer `===` for checking user IDs or passwords.
```javascript
/* 
 * We use === instead of == for security reasons — it checks both 
 * type and value, so it's harder to trick the comparison.
 * Multiple users can share the same user ID, and multiple users 
 * can share the same password, but no two users can have 
 * both the same user ID and the same password.
 */
```

### 4. Exercise 4
**Age Verification**: Write a script for a movie theater. Check if a variable `visitorAge` is between `12` and `18` (inclusive) to qualify for a "Teen Discount" using the `&&` operator. Log `true` or `false`.
```javascript
let visitorAge = 21;
function validateVisitorAge (visitorAge) {
    if (visitorAge >= 12 && visitorAge <= 18) {
        console.log(true);
    }else
        console.log(false);
}
validateVisitorAge(visitorAge);
```

### 5. Exercise 5
**Smart Thermostat**: Create a variable `roomTemperature`.
- If it's above 25, log "Turning on the AC... ❄️"
- If it's between 18 and 25, log "Temperature is perfect. ✅"
- If it's below 18, log "Turning on the heater... 🔥"
```javascript

let roomTemperature = 22;

if (roomTemperature > 25) {
    console.log("Turning on the AC... ❄️");
} else if (roomTemperature >= 18 && roomTemperature <= 25) {
    console.log("Temperature is perfect. ✅");
} else {
    console.log("Turning on the heater... 🔥");
}
```

### 6. Exercise 6
**Login Toggle**: Use a **single line** ternary operator to set a variable `buttonText`. If the variable `isLoggedIn` is `true`, the button should say `"Logout"`, otherwise it should say `"Login"`.
```javascript
let isLoggedIn = false;

console.log(isLoggedIn ? "logout" : "login"); //single Line
```

### 7. Exercise 7
**Traffic Light**: Create a variable `lightColor`. Use a `switch` statement to log instructions:
- `"red"` -> "Stop!"
- `"yellow"` -> "Slow down!"
- `"green"` -> "Go!"
- Default -> "Invalid color."
```javascript
const TrafficLight = ["Red", "Yellow", "Green"];
switch (TrafficLight[0]) { // change indexNumber of color to test switch cases
    case "Red":
        console.log("Stop!");
        break;
    case "Yellow":
        console.log("Slow down!");
        break;
    case "Green":
        console.log("Go!");
        break;
    default :
        console.log("Invalid Color");

}
```

### 8. Exercise 8
**Countdown Timer**: Write a `for` loop that simulates a rocket launch countdown from `10` down to `1`, and then logs "Lift off! 🚀".
```javascript
        let count = 10;
let intervalTimer = setInterval(function (){
    console.log(count);
    count --;

    if(count <0){
        clearInterval(intervalTimer);
        console.log("Lift Off! 🚀");
    }
},1000);  // 100 ms = 1 second
```

### 9. Exercise 9
**Number List**: Iterate through numbers `1` to `20`. For each number, log if it is `"Even"` (like a row in a table) or `"Odd"` using the remainder operator `%`.
```javascript
let NumberList = Array.from({length: 20}, (_, i) => i + 1);

NumberList.forEach(function (number) {
    if (number % 1 === 0) {
        console.log(number)
    }

});
```

### 10. Exercise 10
**Discount Function**: Create a function called `applyDiscount` that takes `price` and `percentage`. It should return the discounted price. (e.g., `applyDiscount(100, 20)` should return `80`).
```javascript
let Price1 = 100;
let Percentage = 20;

function applyDiscount(price1, percentage) {
    let discountedPrice = price1 - (price1 * percentage / 100);
    console.log("Discounted Price: " + discountedPrice);
}

applyDiscount(Price1, Percentage);
```

### 11. Exercise 11
**Greeting Arrow**: Convert this traditional function into a modern **arrow function** for a website welcome message:
```javascript
function formatWelcome(name) {
    return "Hello, " + name + "! Welcome back.";
}
```
```javascript
const formatWelcome = (name) => "Hello, " + name + "! Welcome back.";

console.log(formatWelcome("Angel"));
```

### 12. Exercise 12
**Email Default**: Create a function `sendEmail` that takes a `recipient` and a `subject`. If `subject` is not provided, it should default to `"No Subject"`.
```javascript
let recipient = "angel@example.com";
let subject = "Meeting Tomorrow";

// skicka värdena rakt av
sendEmail(recipient);                     

function sendEmail(recipient, subject) {
    if (recipient && subject) {
        console.log("Email sent!");
    } else if (recipient) { // No subject 
        console.log("No subject!");
    }else if(subject) {
        console.log("No recipient!");
    }

}
```

### 13. Exercise 13
**Price Increase**: You have an array: `const oldPrices = [50, 100, 250]`. Use `.map()` to create a new array where every price is increased by 10% due to inflation.
```javascript
let inflation = 0.1; // 10% = 10/100
const newPrice = [50, 100, 250].map(function (price) {
    return price + (price * inflation);
});
console.log(newPrice);
```

### 14. Exercise 14
**Inventory Check**: You have an array of stock levels: `const inventory = [0, 12, 5, 0, 8, 3]`. Use `.filter()` to create a new array containing only the items that are **in stock** (greater than 0).
```javascript
const newArray = [0, 12, 5, 0, 8, 3].filter(count => count > 0);
console.log(newArray);
```

### 15. Exercise 15
**Cart Total**: You have an array of item prices in a cart: `const cart = [19.99, 5.50, 24.00]`. Use `.reduce()` to calculate the **Total Amount** the customer needs to pay.
```javascript
const TotalAmount = [19.99, 5.50, 24.00].reduce( (total,current) => total + current);
console.log(TotalAmount.toFixed(2)); // Rounding total included multiple decimal using .toFixed(2) 2 digit only
```

### 16. Exercise 16
**User Object**: Create an object representing a `userAccount` with properties: `username`, `email`, `followerCount`, and `isVerified` (boolean). Log the username and email using dot notation.
```javascript
// Copy your code here
```

### 17. Exercise 17
**Profile Update**: Take the `userAccount` from Exercise 16. Add a `bio`, update the `followerCount`, and delete the `email` property (for privacy). Log the final object.
```javascript
// Copy your code here
```

### 18. Exercise 18
**Local Storage Simulation**: Convert your `userAccount` object into a **JSON string** (like you would do to save it to LocalStorage). Then, parse it back into an object.
```javascript
// Copy your code here
```

### 19. Exercise 19
**Safe API Parsing**: Write a function `fetchConfig` that takes a JSON string. Use `try...catch` to parse it. If the string is broken (invalid JSON), log a friendly error message: "Configuration error: Please check your data."
```javascript
// Copy your code here
```

### 20. Exercise 20
**Auto-Date**: Create a `Date` object. Log the current **Year** and **Month**, then format the date into a readable string like `"03/03/2026"` using `.toLocaleDateString()`.
```javascript
// Copy your code here
```