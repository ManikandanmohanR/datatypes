// Date constructor in javascript

//Task 1 using html and javascript
/*go to ui page then choose date of birth and click to calculateAge button to display the calculateAge in years, months and days
and click to calculateAgeInDays button to display the age in days,
and click to calculateAgeInHours button to display the age in hours,
and click to calculateAgeInMinutes button to display the age in minutes,
and click to calculateAgeInSeconds button to display the age in seconds,
finally click to showCurrentTime button then display  the hours, minutes and seconds.
*/
// Age Calculator
function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // console.log(`Age: ${years} Years, ${months} Months, ${days} Days`);


    document.getElementById("result").innerHTML =
        `Age: ${years} Years, ${months} Months, ${days} Days`;
}
// calculateAge();
let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateAge);



function calculateAgeInDays() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let timeDiff = today - birthDate;
    let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // console.log(`Age in Days: ${daysDiff}`);

    document.getElementById("result").innerHTML = `Age in Days: ${daysDiff}`;
}
// calculateAgeInDays();

let calculateDaysButton = document.getElementById("calculateDaysButton");
calculateDaysButton.addEventListener("click", calculateAgeInDays);


function calculateAgeInHours() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let timeDiff = today - birthDate;
    let hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    // console.log(`Age in Hours: ${hoursDiff}`);

    document.getElementById("result").innerHTML = `Age in Hours: ${hoursDiff}`;
}
// calculateAgeInHours();
let calculateHoursButton = document.getElementById("calculateHoursButton");
calculateHoursButton.addEventListener("click", calculateAgeInHours);

function calculateAgeInMinutes() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let timeDiff = today - birthDate;
    let minutesDiff = Math.floor(timeDiff / (1000 * 60));

    // console.log(`Age in Minutes: ${minutesDiff}`);

    document.getElementById("result").innerHTML = `Age in Minutes: ${minutesDiff}`;
}
// calculateAgeInMinutes();
let calculateMinutesButton = document.getElementById("calculateMinutesButton");
calculateMinutesButton.addEventListener("click", calculateAgeInMinutes);


function calculateAgeInSeconds() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let timeDiff = today - birthDate;
    let secondsDiff = Math.floor(timeDiff / 1000);

    // console.log(`Age in Seconds: ${secondsDiff}`);

    document.getElementById("result").innerHTML = `Age in Seconds: ${secondsDiff}`;
}
// calculateAgeInSeconds();
let calculateSecondsButton = document.getElementById("calculateSecondsButton");
calculateSecondsButton.addEventListener("click", calculateAgeInSeconds);


function clock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

    document.getElementById("result").innerHTML = `Current Time: ${hours}:${minutes}:${seconds}`;
}
// clock();

let clockButton = document.getElementById("clockButton");
clockButton.addEventListener("click", clock);



//-------------------------------------------------------------

// go to console page show the output 

// task 2 using javascript
//set methods in javascript
let date = new Date();

date.setFullYear(2000);
date.setMonth(4);
date.setDate(3);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);

console.log(date);

//output: Wed May 03 2000 10:30:45 GMT+0530 (India Standard Time)

//get methods in javascript
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let date1 = new Date();

console.log(months[date1.getMonth()]);

// //output: August

//get day of the week
let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

let date2 = new Date();

console.log(days[date2.getDay()]);

//output: Thursday


//setFullYear() method in javascript
let date4 = new Date();

date4.setFullYear(2030);

console.log(date4);

//output:Tue Aug 06 2030 09:15:09 GMT+0530 (India Standard Time)


//Task 3 employee details using set methods in javascript
// set methods 
let employeeName = "Manikandan M";

let joiningDate = new Date();

joiningDate.setFullYear(2026);

joiningDate.setMonth(5);

joiningDate.setDate(15);

joiningDate.setHours(10);

joiningDate.setMinutes(30);

joiningDate.setSeconds(45);


// DISPLAY EMPLOYEE DETAILS

console.log("Employee Name : " + employeeName);
console.log("Joining Date : " + joiningDate);

//output: Employee Name : Manikandan M
//Joining Date : Mon Jun 15 2026 10:30:45 GMT+0530 (India Standard Time)


//Task 4 using set method 

let hotelName = "The Mayas Hotel";
let perdayRate = 1500;

let checkInDate = new Date();
checkInDate.setFullYear(2026);
checkInDate.setMonth(7);
checkInDate.setDate(4);
checkInDate.setHours(14);
checkInDate.setMinutes(30);
checkInDate.setSeconds(0);

let checkOutDate = new Date();
checkOutDate.setFullYear(2026);
checkOutDate.setMonth(7);
checkOutDate.setDate(6);
checkOutDate.setHours(12);
checkOutDate.setMinutes(0);
checkOutDate.setSeconds(0);

let timeDiff = checkOutDate.getDate() - checkInDate.getDate();
let total = timeDiff * perdayRate;

console.log("Hotel Name : " + hotelName);
console.log("Check-in Date : " + checkInDate);
console.log("Check-out Date : " + checkOutDate);
console.log("Total Amount : " + total);

//output: Hotel Name : The Mayas Hotel
//Check-in Date : Tue Aug 04 2026 14:30:00 GMT+0530 (India Standard Time)
//Check-out Date : Thu Aug 06 2026 12:00:00 GMT+0530 (India Standard Time)
//Total Amount : 3000

//using get methods in javascript

// train booking details using set andget methods in javascript

let trainName = "Vanthe Barath Express";
let trainNumber = 29601;
let departureDate = new Date();
let arrivalDate = new Date();
let fromStation = "Chennai";
let toStation = "mumbai";

departureDate.setFullYear(2026);
departureDate.setMonth(7);
departureDate.setDate(10);
arrivalDate.setFullYear(2026);
arrivalDate.setMonth(7);
arrivalDate.setDate(12);

let departureDay = departureDate.getDate();
let departureMonth = departureDate.getMonth();
let departureYear = departureDate.getFullYear();

let arrivalDay = arrivalDate.getDate();
let arrivalMonth = arrivalDate.getMonth();
let arrivalYear = arrivalDate.getFullYear();

console.log("Train Name : " + trainName);
console.log("Train Number : " + trainNumber);
console.log("From Station : " + fromStation);
console.log("To Station : " + toStation);
console.log("Departure Date : " + departureDay + "-" + (departureMonth + 1) + "-" + departureYear);
console.log("Arrival Date : " + arrivalDay + "-" + (arrivalMonth + 1) + "-" + arrivalYear);

//output: Train Name : Vanthe Barath Express
//Train Number : 29601
//From Station : Chennai
//To Station : mumbai
//Departure Date : 10-8-2026
//Arrival Date : 12-8-2026