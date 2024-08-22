alert("This project shows your input inside the document itself so each segments of the code needs not to be run separately and remembered if run in a single go");

//Question 1
var city = prompt("Kindly enter the name of a city");

document.write("Your input is "+city+"<br>");

if(city=="Karachi"||city=="karachi"){
    document.write("Welcome to the city of lights.<br>");
}else{
    document.writeln("Welcome to "+city+"<br>");
}

//Question 2
var gender= prompt("Kindly enter your gender (male/female)");

document.write("Your input is "+gender+"<br>");

if(gender=="male"||gender=="Male"||gender=="MALE"||gender=="m"||gender=="M"){
    document.write("Good Morning, sir<br>");
}else if(gender=="female"||gender=="Female"||gender=="FEMALE"||gender=="f"||gender=="F"){
    document.write("Good Morning, ma'am<br>");
}else{
    document.write("You can only enter gender in the format of 'male' or 'female'.<br>");
}

//Question 3
var signalColor = prompt("Kindly enter the color of road traffic signal");

document.write("Your input is "+signalColor+"<br>");

if(signalColor=="Red"||signalColor=="red"||signalColor=="RED"||signalColor=="r"||signalColor=="R"){
    document.write("Must Stop<br>");
}else if(signalColor=="Yellow"||signalColor=="yellow"||signalColor=="YELLOW"||signalColor=="y"||signalColor=="Y"){
    document.write("Ready to Move<br>");
}else if (signalColor=="Green"||signalColor=="green"||signalColor=="GREEN"||signalColor=="g"||signalColor=="G"){
    document.write("Move Now<br>");
}else{
    document.write("You can only enter a traffic signal colour in format of 'red', 'yellow', or 'green'.<br>");
}

//Question 4
var fuel = +prompt("Kindly enter the fuel remaining in the car (in litres).");

document.write("Your input is "+fuel+"<br>");

if(fuel<.25){
    document.writeln("Please refill the fuel in your car.<br>");
}else if(fuel==.25){
    document.writeln("Please be informed that the remaining fuel in the car is on the border-line.<br>");
}else{
    document.writeln("You are good to go!<br>");
}

//Question 5
var a=4;
if(++a===5){
    alert("Given condition for variable 'a' is true.");
}
//My answer is: yes, the alert message will be displayed because first value of 'a' is incremented from 4 to 5 then compared
//with the value of 5, which is true, AND type of 5, which is also true resulting in the 'AND' logic being true too,
//hence the alert is displayed.
//Actual output: "Given condition for variable 'a' is true." Alert Displayed

var b=82;
if(b++ === 83){
    alert("Given condititon for variable 'b' is true.");
}
//My answer is: no, the alert message will not be displayed because first the comparison will be made between the value of 'b'
//and 83, which is false because 82 and 83 are not equal, but their types are, making one of the comparisons as false,
//so the alert statement will not be displayed.
//Actual output: Alert not Displayed

var c=12;
if(c++ === 13){
    alert("Condition 1 is true.");
}
if(c===13){
    alert("Condtion 2 is true.");
}
if(++c < 14){
    alert("Condition 3 is true.");
}
if(c===14){
    alert("Condition 4 is true.");
}
//My answer is:
//for the first condition, no, the alert message will not be displayed because first the value of 'c' will be compared
//with 13 which is false, as 12 != 13, but the types of both are equal/same. The value of 'c' is then incremented from 12 to 13.
//So, one of the comparisons is false, hence the alert will not be displayed as the code block inside 'if' is not executed.
//Actual output: Alert Not Displayed
//
//for the second condition, yes, the alert message will be displayed because the incremented value of 'c' is 13 which is
//equal both in the value and the type of 13, hence, the code block inside 'if' will be executed.
//Actual output: "Condition 2 is true" Alert Displayed
//
//for the third condition, no, the alert message will not be displayed because first the value of 'c' is incremented from 13 to 14,
//then it is compared with 14. Since 14 is not less than 14, the condition is not satisfied, and the code block inside 'if' is not
//executed, hence the alert message is also not displayed.
//Actual output: Alert Not Displayed
//
//for the fourth condition, yes, the alert message will be displayed because the incremented value of 'c' is 14, and is equal
//both in the value and the type of 14, and will fulfill the condition. Hence, the code block inside 'if' will be executed, and
//the alert message will be displayed.
//Actual output: "Condition 4 is true" Alert Displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if(totalCost===laborCost+materialCost){
    alert("The cost equals");
}
//My answer is: yes the alert message will be displayed because the value and the type of 'totalCost' is equal to the sum of materialCost
//and laborCost. Also, befire comparison, it will first manipulate the right hand side of the comparison, then make the comparison with
//the calculated result.
//Actual output: "The cost equals" Alert Displayed

if(true){
    alert("True");
}
if(false){
    alert("False");
}
//My answer is: the alert message of 'True' will be displayed, but the alert message of 'False' will not be displayed because for the code
//block inside 'if' to execute, the conditon must be 'true', which is already coded as 'true', whereas in the second 'if', the condition is
//coded as 'false' hence the condition does not get fulfilled, and the code block inside the second 'if' is not executed and the alert
//message is not displayed. Also, this is basically how the if statements work where the conditions make, usually, some comparisons and then
//either a true or a false is an outcome leading to the condition being either being fulfilled or not and the execution of the code block
//itself, resonating with the name 'if' condition fulfills, run this code block.
//Actual output: "True" Alert Displayed Only.

if("car"<"cat"){
    alert("Car is smaller than cat.");
}
//My answer is: yes, the alert message will be displayed because the word "cat" is lexicographically smaller than the word "cat" because
//both the words are the same in lexicographic order from "c" to "a", i.e. "ca", but since the letter 'r' comes before the letter 't' in
//the alphabetical order, that is why the letter 'r' is considered smaller than 't' just like in number system, the number 1 comes before
//2, hence is considered smaller than 2.
//Actual output: "Car is smaller than cat." Alert Displayed

//Question 6
var marks1 = +prompt("Kindly enter the marks obtained in subject 1");
var marks2 = +prompt("Kindly enter the marks obtained in subject 2");
var marks3 = +prompt("Kindly enter the marks obtained in subject 3");

document.write("Your input is "+marks1+"<br>");
document.write("Your input is "+marks2+"<br>");
document.write("Your input is "+marks3+"<br>");

var totalMarks = 300;
var marksObtained = marks1 + marks2 + marks3;
var percentage = (marksObtained/totalMarks) * 100;

var grade, remarks;
if(percentage>=80){
    grade="A-one";
    remarks="Excellent";
}else if(percentage>=70){
    grade="A";
    remarks="Good";
}else if(percentage>=60){
    grade="B";
    remarks="You need to improve";
}else if(percentage>=0){
    grade="Fail";
    remarks="Sorry";
}else{
    grade="Invalid Percentage";
    remarks="-";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("<br>");
document.write("Total marks: "+totalMarks+"<br>");
document.write("Marks obtained: "+ marksObtained+"<br>");
document.write("Percentage: "+ percentage+"%"+"<br>");
document.write("Remarks: "+ remarks+"<br>");

//Question 7
var secretnumber= 5;
var guess=+prompt("Guess the secret number between 1 to 10");

document.write("Your input is "+guess+"<br>");

if(guess==secretnumber){
    document.write("Bingo! Correct answer<br>");
}else if((guess+1)==secretnumber){
    document.write("Close enough to the correct answer.<br>");
}else{
    document.write("Nice try! Keep guessing to know the secret number.<br>");
}

//Question 8
var divisibleBy3 = +prompt("Kindly enter a number to know whether it is divisible by 3");

document.write("Your input is "+divisibleBy3+"<br>");

if(divisibleBy3%3==0){
    document.write("Yes, the number "+divisibleBy3+" is divisible by 3.<br>");
}else{
    document.write("No, the number "+divisibleBy3+" is not divisible by 3.<br>");
}

//Question 9
var evenOrOdd = +prompt("Kindly enter a number to know whether it is even or odd");

document.write("Your input is "+evenOrOdd+"<br>");

if(evenOrOdd%2==0){
    document.write(evenOrOdd+" is an even number.<br>");
}else{
    document.write(evenOrOdd+" is an odd number.<br>");
}

//Question 10
var temperature = +prompt("What is the temperature outside?");

document.write("Your input is "+temperature+"<br>");

if(temperature>40){
    document.write("It is too hot outside.<br>");
}else if(temperature>30){
    document.write("The weather today is normal.<br>");
}else if(temperature>20){
    document.write("Today's weather is cool.<br>");
}else if(temperature>10){
    document.write("OMG! Today's weather is so cool.<br>");
}else{
    document.write("It is super cold!<br>");
}

//Question 11
var firstNumber=+prompt("Enter first number");
var secondNumber=+prompt("Enter the second number");
var operation=prompt("Enter one of +, -, *, /, %");

document.write("Your input is "+firstNumber+"<br>");
document.write("Your input is "+secondNumber+"<br>");
document.write("Your input is "+operation+"<br>");

if(operation=="+"){
    document.write(firstNumber+" + "+secondNumber+" = "+(firstNumber+secondNumber)+"<br>");
}else if(operation=="-"){
    document.write(firstNumber+" - "+secondNumber+" = "+(firstNumber-secondNumber)+"<br>");
}else if(operation=="*"){
    document.write(firstNumber+" * "+secondNumber+" = "+(firstNumber*secondNumber)+"<br>");
}else if(operation=="/"){
    document.write(firstNumber+" / "+secondNumber+" = "+(firstNumber/secondNumber)+"<br>");
}else if(operation=="%"){
    document.write(firstNumber+" % "+secondNumber+" = "+(firstNumber%secondNumber)+"<br>");
}else{
    document.write("Choose only from +, -, *, /, %.");
}