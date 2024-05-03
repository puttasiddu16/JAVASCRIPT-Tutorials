//Arithmetic operators
let a = 9;
let b = 5;
console.log("a + b =", a + b); //To perform addition of two valuve
console.log("a - b =", a - b); //To perform substraction of valuve
console.log("a * b =", a * b); //to perform multiplication of valuve
console.log("a / b =", a / b); //to perform divition of two valuve
console.log("a % b =", a % b); //To find reminder of two valuve
console.log("a ** b =", a ** b); //to perform power valuve

//unary operators
let c = 5;
let d = 9;
console.log("c =", c , "& d =", d);
c++; //or c=c+1;  console.log("c++ =", c++); ->post increment
console.log("c =", c);

d--; //or d=d-1; console.log("d-- =", d--); ->post decrement
console.log("d =", d);

//console.log("++d =", ++d); //pre increment
console.log("++d =", ++d);

//console.log("--c =", --c); //pre decrement
console.log("--c =", --c);

//assignment operators
let s = 10;
let r = 5;
s += 5; //s = s + 5;
console.log("s =", s); // (+=)
s -= 4; //s = s - 4;
console.log("s =", s); // (-=)
s *= 2; //s = s * 2;
console.log("s =", s); // (*=)
s /= 2; //s = s / 2;
console.log("s =", s); // (/=)
s %= 3; //s = s % 3;
console.log("s =", s); // (%=)
s **= 5; //s = s ** 5;
console.log("s =", s); // (**=)

//comparison operators
let x = 10; //number
let y = "10"; //string

console.log("x == y is", x == y); // equal to (==)
console.log("x != y is", x != y); // not equal to (!=)
console.log("x === y is", x === y); //eqval to & type (===)
console.log("x !== y is", x !== y); //not equal to & type (!==)
console.log("x > y =", x > y); //greater then (>)
console.log("x >= y =", x >= y); //greater then equal (>=)
console.log("x < y =", x < y); //smaller then (<)
console.log("x <= y =", x <= y); //smaller then egual (<=)

//logical operator
let e = 10;
let f = 5;

let cond1 = e > f;
let cond2 = e === 10;
console.log("cond1 && cond2 =", cond1 && cond2); //Logical AND (&&)
console.log("cond1 || cond2 =", cond1 || cond2); //Logical OR (||)
console.log("!(e>f) =", !(e>f));//Logical NOT (!)
console.log("!(e===10) =", !(e === 10));
console.log("!(e<f) || !(e!==10)=", !(e<f) || !(e!==10)); 
console.log("!(e<f) && !(e!==10)=", !(e<f) && !(e!==10));

// Conditional statement
// if statement
let age = 18;
if(age>=18){
    console.log("You can vote");
}
if(age<18){
    console.log("You connot vote");
}

let mode = 'dark';
let color;
if(mode === 'dark'){
    color = 'black';
}
if(mode === 'light'){
    color = 'light';
}
console.log(color);

//if else statement
let mod = 'dark';
let col;
if(mode !== 'dark'){
    col = 'black';
}
else{
    col = 'light';
}
console.log(col);

let ag = 12;
if(ag>=18){
    console.log("vote");
}
else{console.log("connot vote");
}

let n =10; //or to print odd make n=11 
if(n %2===0){
    console.log(n, "is even");
}
else{
    console.log(n, "is odd");
}
 
//else if statement
let mo ="sil";
let co;
if(mo === "dark"){
    co = "black";
}else if(mo === "blue"){
    co = "blue";
} else if(mo === "red"){
    co = "red";
}else{
    co = "none";
}
console.log(co);

let ge =14;
let rel = ge >= 18 ? "adult" : "not adult";
console.log(rel);

//practice set2 Q1
alert("Hacker"); //one time popup on browser window

let hack = prompt("hello!"); // gives a message on web broweser but it also takes input from the user &prints valuve
console.log(hack);

let numb = prompt("Enter a number!");
if(numb %5 === 0){
    console.log(numb, "is a multiple of 5");
}else{
    console.log(numb, "is a not multiple of 5");
}

//Practice set2 Q2
let score = prompt("enter a score (0-100)");
let grade;
if(score>=90 && score<=100){
    grade ="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else if(score>=0 && score<=49){
    grade="F";
}
console.log("according to your score your garde was", grade);

