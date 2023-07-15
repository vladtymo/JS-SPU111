// -=-=-=-=-=-=-=- Welcome to JS -=-=-=-=-=-=-=-
// --------- working with console
console.log("Some text message!");
console.warn("Some warning message!");
console.error("Some error message!");

// --------- variables
// js has weak typing - we can change the type

let data = 10;      // number 
data = 33.5;        // number
data = "hello";     // string
data = 'h"e"y';     // string
data = 'A';         // string 

data = true;        // boolean
data = null;        // null
data = undefined;   // undefined (bad practice to assing undefined explicitly)

data = [1, 2, 3];   // object
data = { id: 1001, login: "super_mario" };  // object
data = () => { console.log("I am a function!"); }; // function
data = [120, true, "red", [1, 2, 3], () => { console.log("Super Func!"); }]; // object

// invoke function
data[4]();

// check type
console.log(`Type of 'data':`, typeof (data));

// --------- browser dialogs
//alert("Hello JavaScript!");
let email = prompt("Enter you email:", "example@gmail.com");

// concatenation: str + str
console.log("Your email is " + email);
// interpolation: `str...${expression}...str`
console.log(`Your email is ${email}`);

// convert to number: +str
let year = +prompt("Enter current year");
console.log(`Current year: ${year}`);
console.log(`Next year: ${year + 1}`); // "2023" + "1"

// ---------- function declaration
function summ(a, b) {
    return a + b;
}

console.log(summ(12, 9));