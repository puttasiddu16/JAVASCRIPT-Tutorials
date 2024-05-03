//Lops in javascript
//forloop-
let i =1;
for(i=1;i<=5;i++){
    console.log("I am a hacker");
    console.log("i =",i);
}

//sum of first 5 numbers
let sum = 0;
let n=1000;
for(let i=1; i<=n; i++){
  sum=sum+i;  
}console.log("sum =", sum);

//infinite loops 

//while loops
let add=0;
let j=1;
while(j<=5){
  add=add+j;
  console.log(add);
  j++;
} 

// do-while
let k = 1;
do{
  console.log("Im a hacker");
  k++;
}while(k<=10);

// For of Loop
let str ="im a hacker";
let size = 0;
for(let val of str){
  console.log("val =", val);
  size++;
}
console.log("String size =", size);

// For in loop
let student={
  name:"Hacker",
  age:24,
  cgpa:7.1,
  isPass:true,
};
for(let key in student){
  console.log(key, "=",student[key]);
}

// Practice set3 Q1
for(let num = 0; num <= 100; num++){
  if(num %2 === 0){
    console.log("num =", num);
  }
}

// practice set3 Q2
let gameNum = 25;
let userNum = prompt("guess the game number :");
while(userNum != gameNum){
  userNum = prompt("Sorry you have entered wrong game number. Guess again!")
}
console.log("Congartulations you entered correct game number");


// Strings in javascript
let string="This is javascript";{
console.log("my string is =", string); // to declaire string
console.log("length of string is =",string.length); //to find length of sting
console.log("5 th value in string =",string[5]);} //to find perticuler letter in string

// template literals
let specialString = `hello im a hacker ${1+2*3}`;
console.log(specialString);

let obj ={
  item:"pen",
  price:20,
}
let op = `the coast of ${obj.item} is = ${obj.price} rs`;
console.log(op);
console.log("the coast of", obj.item, "is =", obj.price,"rs");

//Escape characters
console.log("hello im a \n Hacker"); // (\n)
console.log("hello\tworld!");
let st = "hello\tWorld";
console.log(st.length); //in this case it will not include \ valuve while printing it includes \t as a single character

// Sting metods in javascript
// for [toUpperCase() and toLowerCase] for both it is applicabel 
let oldStr = "To Upper Case";
let newStr = oldStr.toUpperCase(); //oldStr = oldStr.toUpperCase();
console.log(oldStr); 
console.log(newStr);// in case if we use aboue comented line then this line not requied.

// for [Trim()] method
let oldSt ="    trim method!    ";
console.log(oldSt.trim());

// for [slice(start, end?)]
let newSt ="0123456789";
console.log(newSt.slice(1,5));
let neSt ="helloworld";
console.log(neSt.slice(2,6));

// for [concat()]
let oSt = "Con";
let nSt = "cat";
let res=oSt.concat(nSt); // also we can write (let res = oSt + nSt;)
console.log(res);

// for [replace(searchVal, newVal)]
let ip="hello";
console.log(ip.replace("lo", "p")); //we can use replaceAll(startVal, endVal); for repeted lettersin string

// for [charAT(index)]
let outp ="iloveJS";
console.log(outp.charAt(2));

// practice set3 Q3
let fullName = prompt("Enter your full name without spaces");
let userName = "@" + fullName + fullName.length;
console.log(userName);