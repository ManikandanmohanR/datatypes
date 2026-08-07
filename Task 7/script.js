// javascript 

//Task 1----> Student Registration (Variables + Objects)

let name = "Manikandan M"
let age = 23
let department = "IT"
let courseFee = 45000

let student = {
    Name: name,
    Age: age,
    Department: department,
    CourseFee: courseFee,
}

console.log(`Name : ${student.Name}`);
console.log(`Age: ${student.Age}`);
console.log(`Department: ${student.Department}`);
console.log(`CourseFee: ${student.CourseFee}`);

if (age >= 18) {
    console.log("Eligible !");
} else {
    console.log("Not Eligible !")
}


//Task 2 ---> Employee Salary Calculator (Functions)


function employeeSalary(basicSalary, bonus, deduction) {
    console.log(`BasicSalary : ${basicSalary}`);
    console.log(`Bonus : ${bonus}`);
    console.log(`Deductions : ${deduction}`);

    let totalSalary = basicSalary + bonus - deduction;
    console.log(`TotalSalary : ${totalSalary}`);

}

employeeSalary(50000, 5000, 3650);


// Task 3 ---> Shopping Cart (Array) 


let array = ["Laptop", "Mouse", "Keyboard", "Headphone"];

array.push("Mobile");
console.log("Add one item: ", array);
array.shift()
console.log("Remove one item: ", array);
console.log("display all product: ", array);
console.log(`display first item : ${array[0]} `);
console.log(`display last item: ${array[array.length - 1]}`);


//Task 4 ---> Login Validation (If Else)

let userName = prompt("user name")
let password = prompt("user password")

let login = {
    userName: "admin",
    password: 12345
}
if (userName === login.userName && password === login.password) {
    console.log("Login Success");

} else {
    console.log("Invalid Username or Password");
}


//Task 5 --->Movie Ticket Booking (Ternary)

let ages = prompt("enter the age");

let checkCondition = ages >= 18 ? "Eligible" : "Not Eligible";

console.log(checkCondition);

// Task 6 ---> Employee Search (Array + Find)

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
]

let result = employees.find(emp => emp.name === "Kavin");
console.log(result);


//Task 7 ---> Product Filter (Filter)

let productPrice = [100, 200, 300, 2000, 150, 700, 450, 500]


let results = productPrice.filter((price) => price < 500);
console.log(results);


//Task 8 ---> Student Marks (Map)

let marks = [45, 56, 67, 89];

let totalmarks = marks.map((add) => add + 5);

console.log(totalmarks);


//Task 9 ---> Attendance Checker (Every)

let Marks = [90, 85, 70, 65]

let attendance = Marks.every((mark) => mark >= 50)

console.log(attendance);



//Task 10 ---> OTP Generator (Math + String)


let otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);


//Task 11 ---> 11. Password Strength Checker (String)

let password1 = "Abc@1234";

let hasUpper = false;
let hasNumber = false;
let hasSpecial = false;

let specialChars = "@#$%^&*!";

for (let ch of password1) {
    if (ch >= 'A' && ch <= 'Z') {
        hasUpper = true;
    } else if (ch >= '0' && ch <= '9') {
        hasNumber = true;
    } else if (specialChars.includes(ch)) {
        hasSpecial = true;
    }
}

if (password1.length >= 8 && hasUpper && hasNumber && hasSpecial) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}


//Task 12 ---> Product Search (Includes)


let products = ["Laptop", "Mobile", "Watch", "Camera"]

let search = "Mobile"

if (products.includes(search)) {
    console.log("available");

} else {
    console.log("not available");

}


//Task 13 ---> Current Digital Clock (Date + setInterval)


setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
}, 1000)


//Task 14 ---> Countdown Timer

let count = 10;

setInterval(() => {
    for (let i = count; i >= 0; i--) {
        console.log(i);
    }

}, 1000);


//Task 15 15. Fake API Product Viewer (Fetch API)
let api = "https://fakestoreapi.com/products"
fetch(api)
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            console.log(product.image);
            console.log(product.title);
            console.log(product.price);

        });
    })
    .catch(res => {
        console.log("error");
    })

//Task 16 ---> Employee Dashboard (Reduce)


let employeeSalary1 = [
    { name: "Mani", salary: 20000 },
    { name: "Praksh", salary: 30000 },
    { name: "Surya", salary: 50000 }
]

let totalSal = employeeSalary1.reduce((sum, add) =>
    sum + add.salary, 0
);

let averageSalary = Math.floor(totalSal / employeeSalary1.length);

let maxSalaryEmployee = employeeSalary1.reduce((max, emp) => {
    return emp.salary > max.salary ? emp : max;
});
// console.log(maxSalaryEmployee);
// 
console.log(`Total salary : ${totalSal}`);
console.log(`Average Salary: ${averageSalary}`);
console.log("High Salary :", maxSalaryEmployee);



//task 17 ---> Online Food Order
let menu = ["Pizza", "Burger", "Shawarma", "Fries"]

menu.push("grill");
console.log(`Add item : ${menu}`);
menu.pop()
console.log(`Remove item : ${menu}`);
console.log(`Total length : ${menu.length}`);
// Print Bill

let order = 250 * menu.length;

console.log(`Print Bill : ${order}`);

//Task 18 ---> Bank Account

let bankAcc = {
    name: "Mani",
    balance: 8300
}
function Deposit(amnt, accnt) {

    accnt.balance += amnt
    console.log("deposit amnt: ", accnt.balance);


}

function Withdraw(amnt, accnt) {
    accnt.balance -= amnt
    console.log("withdraw amnt: ", amnt);

}

function CheckBalance(accnt) {
    console.log("remaining balance", accnt.balance);
}

Deposit(50000, bankAcc);
Withdraw(35000, bankAcc);
CheckBalance(bankAcc);


//Task 19 ---> To-Do List


let list = ["sleep", "wakeup", "eating", "working", "playing"];

list.push("dinner");
console.log("add list :", list);
list.splice(4, 5);
console.log("delet list : ", list);
list[2] = "breakfast";
list[list.length] = "dinner"
console.log("Update the list & show all task ", list);


//Task 20 ---> Mini E-Commerce Product Management

let productObj = [
    { name: "laptop", price: 40000, category: "Electronics", stock: 30 },
    { name: "iphone15", price: 55000, category: "Electronics", stock: 70 },
    { name: "shoe", price: 400, category: "lather", stock: 20 }
]

productObj.push({
    name: "washing machine",
    price: 10000,
    category: "Electronics",
    stock: 10
})

console.log("Adding the product: ", productObj);

let searchobj = prompt("search object")

let searchobj1 = productObj.find(emp => emp.name === searchobj)

console.log("search the product: ", searchobj1);

const result2 = productObj.filter((emp) => emp.category === "Electronics");

console.log("Filter the product: ", result2);

let totalStock = productObj.reduce((sum, prod) => sum + prod.stock, 0);
console.log("Total stock:", totalStock);

let totalValue = productObj.reduce((sum, prod) => sum + prod.price * prod.stock, 0);
console.log("Total inventory value:", totalValue);




























