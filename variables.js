let variable = "All around the world";
console.log(variable.charAt(variable.toUpperCase(1)));
let i = 10;
console.log(i);

let myName = "Hasan";
let age = 24;
let favColour = 'red';

console.log(`Hello, my name is ${myName} and I am ${age} years old. My favourite colour is ${favColour}.`);

myName = "Khan";
age = 25;
favColour = "Maroon";

console.log(`My surname is ${myName} and I will be ${age} years old next year. My favourite colour is ${favColour}.`);

let breakfast = "Cereal";
let lunch = "Pasta";
let dinner = "Pizza";

console.log(`Today I ate ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

breakfast = "Toast";
lunch = "Noodles";
dinner = "Mac n cheese";

console.log(`Tomorrow I will eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

// let bar = ("    |    |    |    \n    |    |    |    \n    |    |    |    ");
// let line=("-------------------");

// // let space1 = "x"
// // let space2 = 
// // let space3 = 
// // let space4 = 
// // let space5 = 
// // let space6 = 
// // let space7 = 
// // let space8 =
// // let space9 = 

if (1 === "1") {
    console.log(true);
} else {
    console.log(false);
}

let country = "UK";

if (age > 17 && country === "UK") {
    console.log("Yes, I can serve you");
} else {
    console.log("You aren't old enough");
}

let pizzaTopping = "Chicken";

switch (pizzaTopping){
    case "Lamb":
    case "Jalapenos":
    case "Chicken":
    console.log(`These are important ingredients for my pizza and ${pizzaTopping} is the main topping.`);
    break;
    case "Pineapple":
    console.log("Pineapple does not go on pizza!");
    break;
    case "Pepperoni":
    console.log("I don't mind having this on my pizza");
    break;
    default: "I don't want this on my pizza";
}

let password = "tHisIsmYpassWord214";

if (password.length < 8 ) {
    console.log("Password is too short!");
} else {
    console.log(`Password is ${password}`);
}

let num = 9.5;

if (num % 5 ===0 || num % 3 === 0) {
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}

if (num % 3 == 0) {
    console.log("Fizz")
} else if(num % 5 == 0) {
    console.log("Buzz")
} else if(num % 3 === 0 && num % 5 === 0) {
    console.log("Fizz buzz")
} else {
    console.log(num)
}