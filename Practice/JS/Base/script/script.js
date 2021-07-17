// let x = 5;
// let name = "Walt Disney";
// let text = `If you can dream it, you can do it!
//                 by ${name}`
// console.log(text.length)

// let isAdult = confirm("Are you 18 years of age?")

// let firstName = prompt("Enter your first name:", '')
// let lastName = prompt("Enter your last name:", '')
// let age = prompt("Enter your age:", '')
// console.log(`Hello ${firstName} ${lastName}. You are ${age} years old.`)

// this is a comment

// let favoriteDrink = "vodka";

// if (favoriteDrink === "coffee") {
//     console.log("I'll have coffee")
// } else if (favoriteDrink === "tea") {
//     console.log("I'll have tea")
// } else if (favoriteDrink === "hot chocolate") {
//     console.log("I'll have hot chocolate")
// } else {
//     console.log("I'll have water.")
// }

// let num = +prompt("Enter a number:");

// for (let i = 1; i <= 10; i += 1) {
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// let numOne = +prompt("Enter a number:", '0');
// let numTwo = +prompt("Enter another number:", '0');
// let total = 0;

// for (i = numOne; i <= numTwo; i += 1) {
//     if (i % 2 === 0) {
//         total += i;
//     }
// }

// console.log(total)

// let num = +prompt("Enter a number:");
// let i = 0;
// let sum = 0;

// while (i <= num) {
//     sum += i
//     i += 1;
// }

// console.log(sum)

// let num = +prompt("Enter a number", "0");
// let sum = 0;

// while (num !== 0) {
//     sum += num;
//     num = +prompt("Enter a number", "0");
// }

// console.log(sum)

// let x = "Hello";

// console.log(typeof x)

// function greeting() {
//     console.log("Hello World!")
// }

// function square(x) {
//     console.log(x ** 2)
// }

// function isValid(password) {
//     if (password.length >= 5) {
//         return true;
//     } else {
//         return false;
//     }
// }

// password = prompt("Enter a password:")
// if (isValid(password)) {
//     alert("This is a valid password");
// } else {
//     alert("This is not valid");
// }

// function repeat(text, n) {
//     for (let i = 1; i <= n; i += 1) {
//         console.log(text);
//     }
// }

// text = prompt("Enter a text:");
// n = prompt("Enter a number:");
// repeat(text, n);

function tips(money, service) {
    if (service === "bad") {
        return money * 0.10;
    } else if (service === "ok") {
        return money * 0.15;
    } else if (service === "good") {
        return money * 0.20;
    } else {
        return "That is not a service option";
    }
}

money = +prompt("Enter the total:");
service = prompt("Enter the quality of service (bad, ok, good):")
console.log(`You would tip $${tips(money, service)}`);









