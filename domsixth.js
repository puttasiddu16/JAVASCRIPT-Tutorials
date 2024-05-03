
// DOM manipulations
let byIdName = document.getElementById("heading");
console.dir(byIdName);

let byClassName = document.getElementsByClassName("heading-class");
console.dir(byClassName);
console.log(byClassName);

let byTagName = document.getElementsByTagName("p");
console.dir(byTagName);
console.log(byTagName);

let byTag = document.querySelector("h1");
console.dir(byTag);
console.log(byTag);

let byAllTag = document.querySelectorAll("p");
console.dir(byAllTag);
console.log(byAllTag);

let byClass = document.querySelector(".heading-class");
console.dir(byClass);
console.log(byClass);

let byAllClass = document.querySelectorAll(".heading-class");
console.dir(byAllClass);
console.log(byAllClass);

let byId = document.querySelector("#click");
console.dir(byId);
console.log(byId);

// dom properties

let div = document.querySelector("div");
console.dir(div);

let heading = document.querySelector("h1");
console.dir(heading);


//practice set6 Q1
let  h2 = document.querySelector("h2");
// console.dir(h2.innerText);
h2.innerText = h2.innerText + " From apna college!";
console.dir(h2.innerText);

//practice set6 Q2
let divs = document.querySelectorAll(".box");
let index = 1;
for(div of divs){
    div.innerText = `new unique valuve ${index}`;
    index++;
}
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 3";
// divs[2].innerText = "new unique value 1";
