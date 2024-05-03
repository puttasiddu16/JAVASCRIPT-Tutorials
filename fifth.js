// Functions in javascript
// function defination
function myFunction(){
console.log("well come to the hacker world!");
console.log("we are hacking a world:)");
}
//function call
myFunction();

// function defintion with parameters
function hiFunction(msg, n){ //=> (msg) is a parameter
    console.log(msg * n);
}
hiFunction("hello hacker", 100); // (hello hacker) is a arguement

//function sum add 2 numbers
function sum(a, b){
    console.log(a+b);
}
sum(1, 2);

//return function returns single value
function add(x, y){
    s = x+y;
    return s;
}
let ans = add(4, 5);
console.log(ans);

//Arrow function java script
//addition normally
function total(s, r){
    t = s+r;
    return t;
}let tot = total(2, 3);
console.log(tot);

// addition using arrow function
const arrowSum = (i,j) =>{
   return i+j;
}
//multiplication normally 
function totalMul(s, r){
    return s*r;
}

//multiplication using arrow function
let arrowMul = (k, l) =>{
   return k*l;
}

//also we can print withouth parameters
const print = () =>{ console.log("hello javascript");}

//practice test5 Q1
function countVowels(str) {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
   return count;
}
//practice test5 Q2 (using arrow function print the same)
const countVow = (str) => {
    let cont = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            cont++;
        }
    }
   return cont; 
}

// foe each loop in array 
let item = [1, 2, 3, 4, 5, 6];
item.forEach((val) => {
console.log(val);
})

let city = ["banglore", "mumbai", "pune", "chennai"];
city.forEach((val, index, city) => {
console.log(val.toUpperCase(), index, city);
})

// practice set5 Q3(using for each loop in array)
let nums = [911, 82, 53, 64, 35];
nums.forEach((nums)=>{
    console.log(nums*nums); //or use this in barckets (nums**2)
})
//let nums = [911, 82, 53, 64, 35];
// let calcSquare = (nums)=>{
//console.log(nums**2);}
// nums.forEach(calcSquare);

//Map methods in array 
let n = [1,2,3,4,5];
let newN = n.map((val)=>{
    return val**2;
});
console.log(newN);

//Filter methods in array
let numb = [1,2,3,4,5,6,7,8,9,0];
let newNumb = numb.filter((val) => {
    return val%2 === 0; //For odd umbers use(val%2 !== 0)
});
console.log(newNumb);

//reduce method
let nu = [1,2,3,4];
const op = nu.reduce((res, cur) => {
return res > cur ? res :cur;
});
console.log(op);

//practice set5 Q4
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppersMarks = marks.filter((val) => {
    return val>90;
});
console.log(toppersMarks);

//practice set5 Q5
let p = prompt("enter a number:=");
let arr = [];
for(q=1;q<=p;q++){
    arr[q-1] = q;
};
console.log(arr);

//practice set5 Q6
let totalSum = arr.reduce((res, curr) =>{
    return res + curr;
});
console.log("totalSum =", totalSum);

let factorial= arr.reduce((res, curr) =>{
    return res * curr;
});
console.log("factorial is =", factorial);
