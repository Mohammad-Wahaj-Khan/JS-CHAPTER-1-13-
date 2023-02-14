// CHAPTER N0.1 = Completed

// QUESTION N0.1

// alert("WELLCOME.....")

// QUESTION N0.2

// alert("Error! Please Enter a valid password.")

// QUESTION N0.3

// alert("Welcome to JS Land...\nHappy Coding!")

// QUESTION N0.4

// alert("Welcome to JS Land...")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")

// OUESTION N0.5

// confirm("Hello...I can run JS through my web browser's console")

// QUESTION N0.6 = DONE

// QUESTION NO.7 = DONE
// _________**________ //

// CHAPTER N0.2 = DONE

// QUESTION NO.1

// var username;
// console.log("username")

// QUESTION NO.2

// var myName = "M.Wahaj Khan";
// console.log(myName)

// QUESTION NO.3

// var JS = "Hello World";
// alert(JS)

// QUESTION NO.4

// var myName = "Jhone Doe";
// alert(myName)

// var myAge = "15 years old";
// alert(myAge)

// var myCertificate = "Certified Mobile Application Development";
// alert(myCertificate)

// QUESTION N0.5

// var piZZa = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(piZZa)

// QUESTION N0.6

// var email = "MY email address is example@example.com" 
// alert(email)

// QUESTION N0.7

// var book = "I am trying to learn from the Book A smarter\nway to learn JavaScript"
// alert(book)

// QUESTION NO. 8

// document.write("Yah! I can write HTML content through javascript")

// QUESTION N0.9

// var myString = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(myString)

// _________**________ //

// CHAPTER NO.3 = DONE

// QUESTION NO.1

// var age = "15 years old"
// alert(age)

// QUESTION NO.2

// var visits = 1;
//   visits = visits + 1;
//   document.write("You have visited this site " + visits + " time(s).");

// QUESTION NO.3

// var birthyear = "2005"
// document.write("My birth year is 2005 <br> Data type of declared variable is  number")

// QUESTION NO.4

// var visitorName = "John Doe";
//   var productTitle = "T-shirt";
//   var quantity = 5;
//   document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// _________**________ //

// CHAPTER 4 = DONE

// QUUESTION NO.1

// a, b, c = 10, 20 ,30

// x, y, z = 40, 50, 60

// QUESTION NO.2

// Legal variable names:

// firstName
// last_name
// ageInYears
// salaryPerMonth
// isMarried

// Illegal variable names:

// 123abc (starts with a number)
// class (reserved word in some programming languages)
// 1st_Place (contains a space)
// &error (contains illegal characters)
// new% (contains illegal characters)

// QUESTION NO.3

// document.write("<b>Rules for naming JS variables</b><br><br>")
// document.write("Variables names can only contain , numbers , $ and _ .For example $my_1stVariable<br>")
// document.write("Variables must begin with a letter , $ or _ For example $name, _name or name<br>")
// document.write("Variable names are case sensitive<br>")
// document.write("Variable names should not be JS keywords")

// _________**________ //

// CHAPTER NO.5 = DONE

// QUESTION NO.1

// ADDITION ( + )

// var num1 = +prompt("Enter first Number")
// var num2 = +prompt("Enter second Number")

// var result = num1 + num2;
// document.getElementById("result").innerHTML = " Sum of " + num1 + " " + " and " + " " + num2 + " is " + result;

// QUESTION NO.2 

// SUBTRACTION ( - )

// var num3 = +prompt("Enter first Number")
// var num4 = +prompt("Enter second Number")

// var result = num3 - num4;
// document.getElementById("results").innerHTML = "Result: " + result;

// MULTIPLICATION ( * )

// var num5 = +prompt("Enter first Number")
// var num6 = +prompt("Enter second Number")
// var result = num5 * num6;
// document.getElementById("resul").innerHTML = "Result of " + num5 + " " + " and " + " " + num6 + " is " + result;

// DIVISION ( / )

// var num7 = +prompt("Enter first number")
// var num8 = +prompt("Enter second Number")
// var result = num7 / num8
// document.getElementById("rest").innerHTML = " Result of " + num7 + " " + " and " + " " + num8 + " is " + result;

// MODULUS ( % )

// var num9 = +prompt("Enter First Number")
// var num10 = +prompt("Enter Second Number")
// var result = num9 / num10 * 100
// document.getElementById("modulus").innerHTML = " Percentage of " + num9 + " " + " and " + " " + num10 + " is " + result;

// QUESTION NO.3

// document.write("Value after variable declaration is undefined<br>")
// document.write("Initial value: 5<br>")
// document.write("Value after increament is: 6<br>")
// document.write("Value after addition is: 13<br>")
// document.write("Value after decrement is: 12<br>")
// document.write("The remainder is: 0")

// QUESTION NO.4

// var ticketPrice = 600
// var numTicket = 5
// var totalCost = ticketPrice * numTicket
// console.log(totalCost)
// document.getElementById("ticket").innerHTML = "Total cost to buy" + " " + numTicket + " " + "ticket is " + totalCost + " " + "PKR" 

// QUESTION NO.5

// var num = +prompt("ENTER ANY NUMBER")

// for(var a = 1 ; a <= 10; a++) {
//     var result = num * a
//     document.write(num + " x " + a + " = " + result + " <br> ")
// }

// QUESTION NO.7

// Store the prices and quantities of the items in variables
// var item1Price = 1099;
// var item2Price = 699;
// var item1Quantity = 5;
// var item2Quantity = 5;
// var shippingCharges = 399;

// // Calculate the subtotal, tax, and total cost
// var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
// var tax = subtotal * 0.1; // Assume 10% tax rate
// var total = subtotal + tax + shippingCharges;

// // Show the receipt in the browser
// document.write("<h2>Order Receipt</h2>");
// document.write("<p>Item 1 Price: $" + item1Price.toFixed(2) + "</p>");
// document.write("<p>Item 1 Quantity: " + item1Quantity + "</p>");
// document.write("<p>Item 2 Price: $" + item2Price.toFixed(2) + "</p>");
// document.write("<p>Item 2 Quantity: " + item2Quantity + "</p>");
// document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
// document.write("<p>Tax: $" + tax.toFixed(2) + "</p>");
// document.write("<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>");
// document.write("<h3>Total: $" + total.toFixed(2) + "</h3>");
 

// QUESTION NO.8

// Marksheet

// var marksObtained =+prompt("Enter your Marks");
// var totalMarks = +prompt("Enter Total Marks");

// var percentage = marksObtained / totalMarks * 100
// if(marksObtained >= 500 && marksObtained < 550 ){
//     document.write("Total Marks:"+ " " + totalMarks + "<br>" + "Marks Obtained:" + " " + marksObtained + "<br>" + "Percentage:"+ " " + percentage)
// }
// else if(marksObtained >= 400 && marksObtained <= 490 ){
//     document.write("Total Marks:"+ " " + totalMarks + "<br>" + "Marks Obtained:" + " " + marksObtained + "<br>" + "Percentage:"+ " " + percentage)
// }
// else if(marksObtained >= 300 && marksObtained <= 390 ){
//     document.write("Total Marks:"+ " " + totalMarks + "<br>" + "Marks Obtained:" + " " + marksObtained + "<br>" + "Percentage:"+ " " + percentage)
// }
// else if(marksObtained >= 200 && marksObtained <= 290 ){
//     document.write("Total Marks:"+ " " + totalMarks + "<br>" + "Marks Obtained:" + " " + marksObtained + "<br>" + "Percentage:"+ " " + percentage)
// }
// else if(marksObtained >= 100 && marksObtained <= 190 ){
//     document.write("Total Marks:"+ " " + totalMarks + "<br>" + "Marks Obtained:" + " " + marksObtained + "<br>" + "Percentage:"+ " " + percentage)
// }
// else if(marksObtained >= 20 && marksObtained <= 90 ){
//     document.write("Total Marks:"+ " " + totalMarks + "<br>" + "Marks Obtained:" + " " + marksObtained + "<br>" + "Percentage:"+ " " + "Fail")
// }

// QUESTION NO.9

// var total = (10 * 104.80) + (25 * 28);
// document.write("Total currency in Pakistani Rupees: " + total);

// QUESTION NO.10

// var num = 7;
// var result = ((num + 5) * 10) / 2;
// document.write(result)

// QUESTION NO.11


// document.write("<b>Age Calculator</b><br><br>")
// var currentYear = +prompt("Enter Current Year")
// var birthYear = +prompt("Enter your Birth Year")

// var age1 = currentYear - birthYear
// var age2 = age1 - 1
// console.log(`They are either ${age1} or ${age2} years old`);
// document.write("Current Year:"+ " " + currentYear + "<br>" + "Birth Year:"+ " " + birthYear + "<br>" + "Your Age is:" + " " + age1 + " " + "or" + " " + age2);


// QUESTION NO.12
// document.write("<b>The Geometrizer</b><br><br>")

// var radius = +prompt("Enter Radius of a Circle")
// var circumference = +prompt("Enter Circumference of a Circle")

// var circumference = 2 * Math.PI * radius
// document.write("Radius of Circle is:"+ " " + radius +"<br>" + "The circumference is:" + " " + circumference + "<br>")

// var area = Math.PI * radius ** 2
// document.write("The Area is:" + " " + area + "<br>")

// QUESTION NO.13
// document.write("<b>The Lifetime Supply Calculator</b><br><br>")

// var favoriteSnack = prompt("Enter Your Favorite Snack");
// var currentAge = +prompt("Enter Your Age");
// var maximumAge = 60;
// var amountPerDay = +prompt("Enter Amount of Snacks Per Day");

// // Calculate how many you would eat total for the rest of your life
// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var totalAmount = daysRemaining * amountPerDay;

// // Output the result to the screen
// document.write("Favorite Snack:" + " " + favoriteSnack + "<br>" + "Current Age:" + " " + currentAge + "<br>" + "Estimated Maximum Age:" + " " + maximumAge +"<br>" + "Amount of Snacks Per Day:" + " " + amountPerDay + "<br>");
// document.write("You will need" + " " + totalAmount + " " + favoriteSnack + " " + "to last you until the ripe old age of" + " " + maximumAge);

// _________**________ //


// CHAPTER NO.6-9

// QUESTION NO.1


// QUESTION NO.2

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// document.write("a is:" + " " + a +"<br>" + "b is:" + " " + b +"<br>" + "result is:" + " " + result +"<br>")

// var a = 2
// var b = 1
// var result = --a
// document.write("<br>"+"a is:" + " " + a+"<br>" + "result is:" + result +"<br>")

// var a = 2
// var b = 1
// var result = --a - --b
// document.write("<br>"+"a is:" + " " + a +"<br>" + "b is:" + " " + b +"<br>" + "result is:" + " " + result +"<br>")

// var a = 2
// var b = 1
// var result = --a - --b + ++b
// document.write("<br>"+"a is:" + " " + a +"<br>" + "b is:" + " " + b +"<br>" + "result is:" + " " + result +"<br>")

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// document.write("<br>"+"a is:" + " " + a +"<br>" + "b is:" + " " + b +"<br>" + "result is:" + " " + result +"<br>")

// QUESTION NO.3

// var name = prompt("Enter Your Name")
// alert("Hello!" + " " + name + " " + "Welcome to our Website")


// QUESTION NO.4 = NOT GIVEN

// QUESTION NO.5

// var num = prompt("Enter a number:");
// if (num === null || num === "") {
//   num = 5;
// }

// document.write("<h2>"+"Multiplication Table of"+ " " + num + "</h2>")
// for (var a = 1; a <= 10; a++) 
//   document.write(num + " x " + a + " = " + " " + num * a + " <br> ")

// QUESTION NO.6

// Step 1: Get input from user
// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");
// var totalMarks = 100;

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // Step 2: Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Step 3: Display the results in a table
// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalMarks*3 + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th>Percentage</th><th></th><th>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");


// _________**________ //


// CHAPTER NO.9-11 = DONE

// QUESTION NO.1

// var city = prompt("Enter a city name:");
// if (city === "Karachi") {
//   document.write("Welcome to the city of lights");
// } else{
//   document.write("Welcome to " + city);
// }

// QUESTION NO.2

// var gender = prompt("Enter your Gender")
// if (gender === "male"){
//     document.write(" Good Morning Sir")
// }
// else if(gender === "female"){
//     document.write("Good Morning Ma'am")
// }

// QUESTION NO.3

// var color = prompt("Enter the color of the road traffic signal:");

// if (color == "Red") {
//   alert("Must stop");
// } else if (color == "Yellow") {
//   alert("Ready to move");
// } else if (color == "Green") {
//   alert("Move now");
// } else {
//   alert("Invalid color");
// }


// QUESTION NO.4

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }


// QUESTION NO.5

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }    


// QUESTION NO.6

// function calculatePercentageAndGrade() {
//     const subject1 = parseFloat(document.getElementById("subject1").value);
//     const subject2 = parseFloat(document.getElementById("subject2").value);
//     const subject3 = parseFloat(document.getElementById("subject3").value);
//     const totalMarks = parseFloat(document.getElementById("totalMarks").value);
//     const obtainedMarks = subject1 + subject2 + subject3;
//     const percentage = (obtainedMarks / totalMarks) * 100;
//     let grade = "";
//     if (percentage >= 90) {
//       grade = "A+";
//     } else if (percentage >= 80 && percentage <= 89) {
//       grade = "A";
//     } else if (percentage >= 70 && percentage <= 79) {
//       grade = "B";
//     } else if (percentage >= 60 && percentage <= 69) {
//       grade = "C";
//     } else if (percentage >= 50 && percentage <= 59) {
//       grade = "D";
//     } else {
//       grade = "F";
//     }
//     const result = document.getElementById("resultof");
//     result.innerHTML = "Percentage: " + percentage.toFixed(2) + "%<br>Grade: " + grade;
// }

// QUESTION NO.7

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess = prompt("Guess the secret number (between 1 and 10):");
// if (guess == secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (guess == secretNumber + 1 || guess == secretNumber - 1) {
//   alert("Close enough to the correct answer");
// }

// QUESTION NO.8

// var number = prompt("Enter a number:");
// if (number % 3 == 0) {
//   alert("The number is divisible by 3");
// } else {
//   alert("The number is not divisible by 3");
// }

// QUESTION NO.10

// var temperature = prompt("Enter the temperature in Celsius:");
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The weather today is normal.");
// } else if (temperature > 20) {
//   alert("Today's weather is cool.");
// } else {
//   alert("OMG! Today's weather is so cool.");
// }

// QUESTION NO.11

// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation == "+") {
//   result = firstNumber + secondNumber;
// } else if (operation == "-") {
//   result = firstNumber - secondNumber;
// } else if (operation == "*") {
//   result = firstNumber * secondNumber;
// } else if (operation == "/") {
//   result = firstNumber / secondNumber;
// } else if (operation == "%") {
//   result = firstNumber % secondNumber;
// } else {
//   alert("Invalid operation");
// }

// alert("The result is: " + result);

// _________**________ //

// CHAPTER NO.11-13 = DONE

// QUESTION NO.1

// // Take input character from user
// let inputChar = prompt("Enter a character:");

// // Get ASCII code of input character
// let charCode = inputChar.charCodeAt(0);

// // Check if input character is a number
// if (charCode >= 48 && charCode <= 57) {
//   document.write(inputChar + " is a number.");
// }
// // Check if input character is an uppercase letter
// else if (charCode >= 65 && charCode <= 90) {
//   document.write(inputChar + " is an uppercase letter.");
// }
// // Check if input character is a lowercase letter
// else if (charCode >= 97 && charCode <= 122) {
//   document.write(inputChar + " is a lowercase letter.");
// }
// // If input character is none of the above
// else {
//   document.write(inputChar + " is not a number or letter.");
// }


// QUESTION NO.2

// // Accept two integers from the user
// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// // Check which integer is larger
// if (num1 > num2) {
//   document.write(num1 + " is larger than " + num2);
// }
// else if (num2 > num1) {
//   document.write(num2 + " is larger than " + num1);
// }
// else {
//   document.write("Both integers are equal.");
// }

// QUESTION NO.3

// Take input number from user
// let num = parseInt(prompt("Enter a number:"));

// // Check if number is positive, negative or zero
// if (num > 0) {
//   document.write(num + " is a positive number.");
// }
// else if (num < 0) {
//   document.write(num + " is a negative number.");
// }
// else {
//   document.write("The number is zero.");
// }

// QUESTION NO.4

// // Take input character from user
// let character = prompt("Enter a character:");

// // Check if input character is a vowel
// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
//     character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
//   document.write("The character " + character + " is a vowel.");
// }
// else {
//   document.write("The character " + character + " is not a vowel.");
// }


// QUESTION NO.5

// // Store correct password in a variable
// let originalPassword = "password123";

// // Ask user to enter password
// let enteredPassword = prompt("Enter your password:");

// // Check if user has entered a password
// if (enteredPassword === "") {
//   document.write("Please enter your password.");
// }
// // Check if entered password is correct
// else if (enteredPassword === originalPassword) {
//   document.write("Correct! The password you entered matches the original password.");
// }
// else {
//   document.write("Incorrect password.");
// }

// QUESTION NO.6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// }
// else {
//   greeting = "Good evening";
// }

// QUESTION NO.7

// // Take input time from user
// let time = parseInt(prompt("Enter time in 24 hours clock format (e.g. 1900 for 7pm):"));

// // Convert time to 12 hours clock format
// if (time >= 0000 && time < 1200) {
//   document.write("The time is " + time + " hours, which is " + time + "am in 12 hours clock format.");
// }
// else if (time >= 1200 && time < 2400) {
//   let hour = time - 1200;
//   if (hour === 0) {
//     hour = 12;
//   }
//   document.write("The time is " + time + " hours, which is " + hour + "pm in 12 hours clock format.");
// }
// else {
//   document.write("Invalid time.");
// }


// _________**________ //





