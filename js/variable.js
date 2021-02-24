//this is a single comment

/* multi 
line comment */

// exercise 1
//Declaring variable for job title.
let jobTitle = "Web Developer";

//Declaring variable for geo location.
let geoLocation = "Singapore";

//Declaring variable for salary.
let salary = 3500;

let result = "You will be " + jobTitle + " in " + geoLocation + ", drawing $" + salary + " a month.";

console.log(result);

//exercise 2

let birthYear = 1990; // declaring var for birth year
let futureYear = 2023;  // declaring  var for future year
let age = futureYear - birthYear
let result1 = "i will be either " + age + " or " + (age - 1) + " in " + futureYear + ".";
console.log(result1);

let currentAge = 35;
let maxAge = 40;
let amtSavedPerDay = 5;

let amtSaved = (maxAge-currentAge)* 365 * amtSavedPerDay;
let answer = "I will have $" + amtSaved + " in savings until the old age of 40";
console.log(answer);