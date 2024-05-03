// Arrays in javascript
let marks = [87, 34, 23 ,78, 98,56,84];
console.log(marks);
console.log("lenght of array =", marks.length);

let heros = ["ironman", "antman", "hulk", "thor", "batman", "loki"];
console.log(heros);

//looping over an array
//For loop
let hero=["ironman", "antman", "hulk", "thor", "batman", "loki"];
for(let ind=0;ind<hero.length;ind++){
    console.log(hero[ind]);
}
//for-of loop
let mark = [87, 34, 23 ,78, 98,56,84];
for(let score of mark){
    console.log(score);
}

let cities = ["delhi", "hyderabad", "mumbai", "pune", "banglore"];
for(let city of cities){
 console.log(city.toUpperCase());
}

//practice set4 Q1
let scores = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of scores){
    sum += val;
}
avg = sum/scores.length;
console.log(sum);
console.log(`the average score of the class = ${avg}`);

//practice set4 Q2
let price = [250, 645, 300, 900, 50];
let i = 0;
for(let val of price){
    console.log(`value at index ${i} = ${val}`);
    let offer = val/10;
    price[i]=price[i]-offer;
    console.log(`prices ofter offer ${price[i]}`);
    i++;
}

let items = [250, 645, 300, 900, 50];
for(let j=0; j<items.length; j++){
    let off = items[j]/10;
    items[j] -= off;
}console.log(items)

// array methods 
//1) push() method in array
let foodItems = ["paneer", "tomato", "potato", "litchy"];
console.log(foodItems);
let newfoodItems = foodItems.push("maggie", "bread", "chips");
console.log(newfoodItems);

//2) pop() method in array
let food= ["paneer", "tomato", "potato", "litchy"];
console.log(food);
let deletedFood = food.pop();
console.log(food);
console.log("deleted food is =", deletedFood);

//3) toString method in array
let foodie = ["paneer", "tomato", "potato", "litchy"];
console.log(foodie);
console.log(foodie.toString());
console.log(foodie);

//4) concat() to add array into other prints result
let marvelHero = ["captain", "groot", "loki", "hulk"];
console.log(marvelHero);

let dcHero = ["ironman", "krish", "superman"];
console.log(dcHero);

let indHero = ["rogue",];

let totalHero = marvelHero.concat(dcHero, indHero);
console.log(totalHero);

//5) unshift(); method in array
let marvel = ["ironman", "krish", "superman"];
marvel.unshift("antman");
console.log(marvel);
let mar = marvel.shift();
console.log(mar);

//6) slice() method in array
let vel = ["ironman", "krish", "superman", "groot", "loki", "hulk"];
console.log(vel);
console.log(vel.slice(1,4));

//7) splice() method in array
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 n.splice(2, 3, 12, 23, 14); 

//n.splice(2, 0, 15) (add numbers)

//n.splice(3, 1); (delete numbers)

//n.splice(3, 1, 4); (Replace numbers)

// practice set4 Q3
let companies = ["bloomburg", "microsoft", "uber", "google", "Ibm", "netflix"];
// 1 companies.shift();
// 2 companies.splice(2, 1, "ola");
companies.push("amazon");