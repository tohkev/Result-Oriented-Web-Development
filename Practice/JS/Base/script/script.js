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

// function tips(money, service) {
//     if (service === "bad") {
//         return money * 0.10;
//     } else if (service === "ok") {
//         return money * 0.15;
//     } else if (service === "good") {
//         return money * 0.20;
//     } else {
//         return "That is not a service option";
//     }
// }

// money = +prompt("Enter the total:");
// service = prompt("Enter the quality of service (bad, ok, good):")
// console.log(`You would tip $${tips(money, service)}`);



// let nums = [1, 2, 3, 4];
// // let sum = 0;

// // for (let i = 0; i < nums.length; i++) {
// //     sum += nums[i];
// // }
// // console.log(sum);
// let sum = 0

// nums.forEach(function(e, i, a) {
//     sum += e
// })

// let nums = [-2, 16, 41, 21, 0, 6, -4];
// let evenCount = 0;
// let oddCount = 0;
// let zeroCount = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//         zeroCount++;
//     } else if (nums[i] % 2 === 1) {
//         oddCount++;
//     } else if (nums[i] % 2 === 0) {
//         evenCount++;
//     }
// }

// console.log(`Even: ${evenCount}`)
// console.log(`Odd: ${oddCount}`)
// console.log(`Zero: ${zeroCount}`)


// let min = nums[0];
// let minIndex;
// let max = nums[0];
// let maxIndex;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < min) {
//         min = nums[i];
//         minIndex = i;
//     }
//     if (nums[i] > max) {
//         max = nums[i];
//         maxIndex = i;
//     }
// }

// console.log(`Min: ${min}, index: ${minIndex}`)
// console.log(`Max: ${max}, index: ${maxIndex}`)

// let names = ['Kevin', 'Francis', 'Daniel', "Wyjun", "Ann", "Paul", "Kevin", "Kevin", "Ann"];

// let input = prompt("Enter a name:")
// let count = 0;

// for (let i = 0; i < names.length; i++) {
//     if (names[i].toLowerCase() === input.toLowerCase()) {
//         count++;
//     }
// }

// if (count === 1) {
//     console.log(`Name: ${input}: ${count} time`);
// } else {
//     console.log(`Name: ${input}: ${count} times`);
// }

// let input = prompt("Enter a sentence:");
// let words = [];

// function toCamelCase(string) {
//     split = string.split(" ");
//     for (let i = 0; i < split.length; i++) {
//         if (i === 0) {
//             words.push(split[i].toLowerCase());
//         } else {
//             words.push(split[i][0].toUpperCase() + split[i].substring(1));
//         }
//     }
//     return words.join('');
// }

// console.log(toCamelCase(input));


// let task = document.createElement('li');
// task.textContent = 'task 3';

// adding to the ul element
// let list = document.querySelector("ul");
// list.appendChild(task);

//adding to the ul element before the first item
// let list = document.querySelector('ul');
// let firstElement = list.children[0];
// list.insertBefore(task, firstElement);

//removing an item
// let list = document.querySelector('ul');
// let element = list.children[1];
// element.remove();

//MANIPULATING STYLE
// let p = document.querySelector(".green");
// p.style.color = "green";
// p.style.marginBottom = '30px';
// p.style.backgroundColor = 'black';
// p.style.fontSize = "50px";

//EVENTS
// let button = document.querySelector('.btn');

// // button.onclick = function () {
// //     alert("You have clicked the button");
// // }

// // button.onmouseover = function () {
// //     alert("Woah what are you doing?")
// // }

// button.addEventListener('click', function () {
//     console.log("What")
// })

// button.addEventListener('click', function () {
//     console.log("okay stop")
// })

// KEYBOARD EVENTS
let inp = document.querySelectorAll('input');

for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            console.log(this.value);
        }
    })
}


// inp.addEventListener('keypress', function () {
//     console.log(inp.value)
// })