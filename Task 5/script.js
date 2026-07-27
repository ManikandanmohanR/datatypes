//Task 1 –--> Student Registration
let studentName = prompt("enter the name");
let department = prompt("enter the dpartment");
let cgpa = prompt("enter the cgpa");

let status = (cgpa >= 8.0) ? "Eligible" : "Not Eligible";

console.log(`Student Name : ${studentName}`);
console.log(`Department : ${department}`);
console.log(`CGPA : ${cgpa}`);
console.log(`Status : ${status}`);



//Task 2 –--> Online Shopping Bill

let productPrice = prompt("enter the price");
let quantity = prompt("enter the quantity");
let totalPrice = productPrice * quantity;
let discountBill = 0;
if (totalPrice > 5000) {
    discountBill = totalPrice * 10 / 100;
}
else {
    totalPrice;
}
let final = totalPrice - discountBill;
console.log("Total : ", totalPrice);
console.log("Discount: ", discountBill);
console.log("Final price: ", final);


//Task 3 – Employee Salary
let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;
let netSalary = basicSalary + bonus - tax

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus)
console.log("Tax :", tax)
console.log("Net Salary :", netSalary);


//Task 4 –--> Movie Ticket Booking
let movie = "Leo";
let ticketPrice = 180;
let tickets = 5;

console.log("======ticket=========");

console.log("Movie :", movie);
console.log("Tickets : ", tickets)
console.log("Total :", ticketPrice)


//Task 5 –--> Login System
let username = prompt("enter the username");
let password = prompt("enter the password");

let obj = {
    name: "mani",
    pass: "09876",
}

if (username === obj.name && password === obj.pass) {
    console.log("Login Success");
}
else {
    console.log("Invalid Username or Password");
}


//Task 6 –--> Electricity Bill

let units = prompt("enter the unit");
let totalBill = 0;

if (units <= 100) {
    console.log("0-100 units → ₹5/unit");
    totalBill = units * 5;
} else if (units <= 200) {
    console.log("101–200 units → ₹7 / unit");
    totalBill = units * 7;
} else {
    console.log("Above 200 → ₹10 / unit");
    totalBill = units * 10;
}

console.log("Units : ", units);
console.log("Bill Amount : ", totalBill);


//Task 7 –--> Restaurant Order
let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item: ", menu[0]);
console.log("Last Item: ", menu[menu.length - 1]);
console.log("Total Items: ", menu.length)

menu.push("Fried Rice");
menu.splice(1, 1);
console.log(menu);


//Task 8 –--> Employee Object
let employee = {
    name: "Ravi",
    role: "Frontend Developer",
    salary: 40000
}

console.log(`Employee Name : ${employee.name}`);
console.log(`Role : ${employee.role}`);
console.log(`Salary : ${employee.salary}`);


//Task 9 –--> Product Inventory
let products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "CPU",
    "Speaker"
];

for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1} ${products[i]}`);
}


//Task 10 –--> Function

function calculateArea(length, width) {
    let area = length * width;
    console.log("Area : ", area);

}
calculateArea(10, 20)


//Task 11 –--> Bank Deposit

let currentBalance = 5000;

function deposit(amnt) {
    currentBalance = currentBalance + amnt

}
function withdraw(amnt) {
    currentBalance = currentBalance - amnt
}

deposit(2000)
withdraw(1000)
console.log(`Balance Amount :  ${currentBalance}`);


//Task 12 –--> Callback Function

function add(a, b) {
    return a + b;
}
function calculate(callback, a, b) {
    console.log("callback: ", callback(a, b));
    console.log("completed");
}

calculate(add, 10, 20);


//Task 13 –--> Generator Function
function* couponCode() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupon = couponCode();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


//Task 14 –--> Currying
function discount(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(discount(10)(20)(30))


//Task 15 –--> Spread Operator
let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend]

console.log(fullStack);

//Task 16 – Rest Operator

function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}

sum(10, 20, 30, 40, 50);


//Task 17 –--> Array Destructuring
let colors = ["Red", "Blue", "Green", "Yellow"];

let [a, b, c, d] = colors;

console.log(a);
console.log(b);
console.log(c);
console.log(d);


//Task 18 –--> Object Destructuring
let user = {
    name: "Navi",
    city: "Salem",
    role: "Developer"
}

let a1 = user.name;
let a2 = user.name;
let a3 = user.role;
console.log(a1);
console.log(a2);
console.log(a3);

//Task 19 –--> Shopping Cart
let cart = ["Mobile", "Laptop", "Watch"];
console.log(cart);
cart.push("Mouse")
console.log(cart);
cart.pop()
console.log(cart);
cart.shift()
console.log(cart);
cart.unshift("Speakar");
console.log(cart);

//Task 20 – Product Search
let product = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];


if (product.includes("Monitor")) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}



