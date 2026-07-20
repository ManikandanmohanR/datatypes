// Task 1 ---> Employee Profile

let name = "Manikandan M";
let employeeId = "ST-2026-4016";
let department = "Full Stack Development";
let salary = 30000;
let isPermanent = true;

console.log("Name :", name);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("Permanent :", isPermanent);


// Task 2 ---> Student Details
//create a object for student details

let student = {
    name: "Manikandan",
    age: 25,
    course: "BTech (IT)",
    college: "MKCE",
    passed: true
};

console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);



// Task 3 ---> Shopping Cart
//create a array for shopping cart

let cart = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log(cart[0]);
console.log(cart[2]);
console.log(cart[cart.length - 1]);
console.log(cart.length);


// Task 4 ---> Company Employee Database
//create a object for employee details

let employee = {
    name: "Manikandan",
    designation: "Software Developer",
    salary: 35000,
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "python"]
};

console.log("Employee Name :", employee.name);
console.log("Designation :", employee.designation);
console.log("Second Skill :", employee.skills[1]);


// Task 5 ---> Salary Calculation
//calculate total salary using arthimetic operation

let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log("Total Salary :", totalSalary);


// Task 6 ---> GST Calculator
//calculate GST amount using arthimetic operation

let productPrice = 4500;
let gst = 18;

let gstAmount = (productPrice * gst) / 100;
let finalAmount = productPrice + gstAmount;

console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount);


// Task 7 ---> Even or Odd
//check even or odd number using ternary operator

let number = 25;

let check = (number % 2 === 0 ? "Even Number" : "Odd Number");
console.log(check);


// Task 8 ---> Login System
// check login credentials using ternary operator

let username = "admin";
let password = 12345;

let loginStatus = (username === "admin" && password === 12345 ? "Login Success" : "Invalid Credentials");
console.log(loginStatus);


// Task 9 ---> Voting Eligibility
// check voting eligibility using ternary operator

let age = 22;
let eligibility = (age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote");
console.log("Voting Eligibility :", eligibility);


// Task 10 ---> EMI Eligibility
// check EMI eligibility using ternary operator

let empSalary = 40000;
let experience = 2;

let emiEligibility = (empSalary > 30000 && experience >= 2 ? "Eligible for EMI" : "Not Eligible for EMI");
console.log("EMI Eligibility :", emiEligibility);


// Task 11 ---> Product Discount
// discount amount using arthimetic operation

let price = 5000;
let discount = 10;

let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);



//Task 12 ---> User Registration

let userName = "Manikandan";
let email = "manikandan@gmail.com";
let phone = "8526538112";
let city = "Trichy";

console.log("----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);



//Task 13 ---> Social Media Profile
// craete a object for social media profile

let profile = {
    username: "Mani",
    followers: 5000,
    following: 450,
    posts: 120,
    verified: true
};

console.log("Username :", profile.username);
console.log("Followers :", profile.followers);
console.log("Verified Status :", profile.verified);



//Task 14 ---> Restaurant Menu
//create a array for restaurant menu

let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[menu.length - 1]);



//Task 15 ---> Banking System

let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;

console.log("Remaining Balance :", remainingBalance);



//Task 16 ---> Mobile Store

let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let finalMobileAmount = mobilePrice - exchange - coupon;

console.log("Final Amount :", finalMobileAmount);



//Task 17 ---> Employee Promotion

let exp = 5;
let performance = true;

let promotion = (exp >= 5 && performance ? "Promotion Approved" : "Promotion Pending")
console.log(promotion);



//Task 18 ---> Movie Ticket

let ticketPrice = 180;
let people = 5;

let totalAmount = ticketPrice * people;

console.log("Total Amount :", totalAmount);



//Task 19 ---> Weather App

let temperature = 38;
let weatherStatus = (temperature >= 35 ? "Hot Day" : "Normal Weather");
console.log("Weather Status :", weatherStatus);



//Task 20 ---> Mini HR Management

let employeeDetails = {
    empCode: "ST-2026-4016",
    name: "Manikandan M",
    department: "Full Stack Developer",
    designation: "Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("Employee Code :", employeeDetails.empCode);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Last Skill :", employeeDetails.skills[employeeDetails.skills.length - 1]);
console.log("Permanent Status :", employeeDetails.permanent);
