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