// Conditional Statement

// Task 1 ---> Employee Login System

let obj = {
    name: "mani",
    password: "1234"
}
let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === obj.name && password === obj.password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}



// Task 2 ---> E-Commerce Discount

let amount = 4500;
let discount = 0;

if (amount >= 5000) {
    discount = 0.2 * amount;
    console.log("20% Discount Applied");
} else {
    console.log("No Discount");
}
let finalAmount = amount - discount;
console.log(discount);
console.log("Final Amount: ₹" + finalAmount);



// Task 3 ---> ATM Withdrawal

let balance = 10000;
let withdraw = 10000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
} else {
    console.log("Insufficient Balance");
}



//Task 4 ---> Student Grade System

let mark = 87;

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 80) {
    console.log("Grade B");
}
else if (mark >= 70) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}



//Task 5 ---> Traffic Signal

let signal = "green";

switch (signal) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid");
}



//Task 6 --->  Online Shopping Delivery Charge

let orderAmount = 1350;
let deliveryCharge = 80;
let totalAmount = 0;

console.log("Above 1000 order amount will get free delivery otherwise delivery charge will be added for the food");
if (orderAmount >= 1000) {
    console.log("Free Delivery for the food : ₹", totalAmount = orderAmount);
} else {
    let totalAmount = orderAmount + deliveryCharge;
    console.log("delivery charge will be added for the food");
    console.log("Order Amount : ₹" + orderAmount);
    console.log("Delivery charge : ₹" + deliveryCharge);
    console.log("Total : ₹" + totalAmount);
}



//Task 7 ---> User Age Verification

let age = prompt("Enter the user age:");
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}



//Task 8 ---> Find Largest Number

let a = 10;
let b = 20;
let c = 30;

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
}
else {
    console.log(c);
}



//Task 9 ---> Mobile Password

let pin = prompt("Enter 4-digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}



//Task 10 ---> Product Stock

let Stock = 0;

if (Stock === 0) {
    console.log("Out of stock");
} else {
    console.log("available");

}



//Task 11: Employee Salary Bonus

let salary = prompt("Enter employee salary");
let bonus = 0;

if (salary > 50000) {
    bonus = 10000;
}
else if (salary > 30000) {
    bonus = 5000;
}
else {
    bonus = 2000;
}

console.log("Employee bonus: ", bonus);


//Task 12: Electricity Bill

let units = prompt("enter the electric units");
let rate = 0;
let total = 0;

if (units <= 100) {
    rate = 2;
    total = rate * units;
} else if (units <= 200) {
    rate = 4;
    total = 4 * units;
}
else {
    rate = 6;
    total = rate * units;
}
console.log("electric bill :", total);



//Task 13 ---> Movie Ticket Booking

let Ages = prompt("enter the age:");
if (Ages < 5) {
    console.log("Free");
}
else if (Ages < 18) {
    console.log("Above age at 5 : ", 100);
} else {
    console.log("above the age at 18 ", 200);
}



//Task 14: Hospital Token System

let personType = prompt("enter the person category");

switch (personType) {

    case "emergency":
        console.log("Token 1");
        break;

    case "seniorCitizen":
        console.log("Priority");
        break;

    case "normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid");
}



//Task 15: Company Attendance

let attendance = prompt("Enter the attendance status");

switch (attendance) {
    case "present":
        console.log("working");
        break;
    case "leave":
        console.log("Leave Approved");
        break;
    case "absent":
        console.log("Salary Deduction");
        break;
}



//Task 16: Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let totalCart = rice + sugar + oil;
let discountGrocery = 0;
console.log("Total: ", totalCart);

if (totalCart > 1000) {
    discountGrocery = 10 * totalCart / 100;
    totalCart = totalCart - discountGrocery;
    console.log("10% discount applied");
}
console.log("Discount: ", discountGrocery);
console.log(totalCart);



//Task 17: Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log(i + 1 + ". " + products[i]);
}



//Task 18: Employee Database

let employee = {
    name: "Mani",
    role: "Developer",
    salary: 50000
}

for (let key in employee) {
    console.log(employee[key]);
}



//Task 19: Type Casting
let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num);
console.log(bool);
console.log(str);

//Task 20: Banking Menu

let choice = prompt("Enter your choice:");

switch (choice) {
    case "1":
        console.log("Deposit");
        break;
    case "2":
        console.log("Withdraw");
        break;
    case "3":
        console.log("Balance");
        break;
    case "4":
        console.log("Exit");
        break;
    default:
        console.log("Invalid choice");
}



//Mini Project (Interview Level)
console.log("------Employee Management-----");

let employeeData = [
    {
        name: "Mani",
        role: "Developer",
        salary: 50001,
        attendance: "present"
    },
    {
        name: "Ilayaraja",
        role: "tester",
        salary: 40000,
        attendance: "leave"
    }
];
let choices = prompt("Enter your choice:");
switch (choices) {
    case "1":
        console.log("Add Employee");
        break;
    case "2":
        console.log("Show Employee Details");
        for (let employee of employeeData) {
            console.log(`Name: ${employee.name}`);
            console.log(`Role: ${employee.role}`);
            console.log(`Salary: ${employee.salary}`);
        }
        break;
    case "3":
        console.log("Calculate Bonus");
        for (let employee of employeeData) {
            let bonus = 0;
            if (employee.salary > 50000) {
                bonus = 10000;
            } else if (employee.salary > 30000) {
                bonus = 5000;
            } else {
                bonus = 2000;
            }
            console.log(`Bonus for ${employee.name}: ${bonus}`);
        }
        break;
    case "4":
        console.log("Check Attendance");
        for (let employee of employeeData) {
            if (employee.attendance === "present") {
                console.log(`${employee.name} is working`);
            }
            else {
                console.log(`${employee.name} is leave`);
            }
        }
        break;
    case "5":
        console.log("Print Salary");
        for (let employee of employeeData) {
            console.log(`${employee.name} salary is ${employee.salary}`);
        }
        break;
    case "6":
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
}

