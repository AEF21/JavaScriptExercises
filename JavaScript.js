//================Exercise 1 => UserProfile.js==================//

//================Exercise 2 =================//
let Price = 150;
let Quantity = 3;
let Tax = 0.25 //25%

let SubTotal = Quantity * Price; //Sum TaxFree
let total = SubTotal * Tax;       // Sum After calculate Tax
console.log("Total:" + total);

//================Exercise 3 =================//
/*
 * We use === instead of == for security reasons — it checks both
 * type and value, so it's harder to trick the comparison.
 * Multiple users can share the same user ID, and multiple users
 * can share the same password, but no two users can have
 * both the same user ID and the same password.
 */
//================Exercise 4 =================//
let visitorAge = 21;

function validateVisitorAge(visitorAge) {
    if (visitorAge >= 12 && visitorAge <= 18) {
        console.log(true);
    } else
        console.log(false);
}

validateVisitorAge(visitorAge);
//================Exercise 5 =================//

let roomTemperature = 22;

if (roomTemperature > 25) {
    console.log("Turning on the AC... ❄️");
} else if (roomTemperature >= 18 && roomTemperature <= 25) {
    console.log("Temperature is perfect. ✅");
} else {
    console.log("Turning on the heater... 🔥");
}
//================Exercise 6 =================//
let isLoggedIn = false;

console.log(isLoggedIn ? "logout" : "login"); //single Line

// multiple line
function ToggleVisibility() {
    isLoggedIn = !isLoggedIn
    if (isLoggedIn === true) {
        console.log("logout");
    } else //!isloggedIn
        console.log("login");
}

ToggleVisibility();
//================Exercise 7 =================//
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

//================Exercise 8 =================//

let count = 10;
let intervalTimer = setInterval(function () {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(intervalTimer);
        console.log("Lift Off! 🚀");
    }
}, 1000);  // 100 ms = 1 second

//================Exercise 9 =================//
let NumberList = Array.from({length: 20}, (_, i) => i + 1);

NumberList.forEach(function (number) {
    if (number % 1 === 0) {
        console.log(number)
    }

});
//================Exercise 10 =================//

let Price1 = 100;
let Percentage = 20;

function applyDiscount(price1, percentage) {
    let discountedPrice = price1 - (price1 * percentage / 100);
    console.log("Discounted Price: " + discountedPrice);
}

applyDiscount(Price1, Percentage);

//================Exercise 11 =================//

let name = "Angel";
const formatWelcome = (name) => "Hello, " + name + "! Welcome back.";

console.log(formatWelcome("Angel"));


/*
let name = "Angel";

const introduce = (userName) => {
    return "Hello " + userName + " Welcome back";
};

const introduceFirstTime = (userName) => {
    return "Hello " + userName + " Welcome to our site!";
};

// Kolla om användaren varit här förut
if (localStorage.getItem("hasVisited")) {
    console.log(introduce(name)); // återkommande besökare
} else {
    console.log(introduceFirstTime(name)); // första besöket
    localStorage.setItem("hasVisited", "true"); // markera att de nu varit här
}
 */
//================Exercise 12 =================//
let recipient = "angel@example.com";
let subject = "Meeting Tomorrow";

        // skicka värdena rakt av
sendEmail(recipient);                     // No subject

function sendEmail(recipient, subject) {
    if (recipient && subject) {
        console.log("Email sent!");
    } else if (recipient) {
        console.log("No subject!");
    }else if(subject) {
        console.log("No recipient!");
    }

}

//================Exercise 13 =================//
let inflation = 0.1; // 10% = 10/100
const newPrice = [50, 100, 250].map(function (price) {
    return price + (price * inflation);
});
console.log(newPrice);
//================Exercise 14 =================//
const newArray = [0, 12, 5, 0, 8, 3].filter(count => count > 0);
console.log(newArray);
//================Exercise 15 =================//
const TotalAmount = [19.99, 5.50, 24.00].reduce( (total,current) => total + current);
console.log(TotalAmount.toFixed(2)); // Rounding total included multiple decimal using .toFixed(2) 2 digit only