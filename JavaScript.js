//================Exercise 1 => UserProfile.js==================//

//================Exercise 2 =================//
let Price = 150;
let Quantity = 3;
let Tax = 0.25 //25%

let SubTotal = Quantity * Price; //Sum TaxFree
let total =SubTotal * Tax ;       // Sum After calculate Tax
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
function validateVisitorAge (visitorAge) {
    if (visitorAge >= 12 && visitorAge <= 18) {
    console.log(true);
    }else
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