const student = {
    name : "siddu",
    marks: 97.4,
    printMarks: function(){
        console.log("marks =", this.marks);
    },
};

const employee = {
    clcTax(){
        console.log("the tax rate is 10%");
    }
}

const karanArjun={
    salary: 50000,
};

karanArjun.__proto__=employee;


class ToyotaCar{
    constructor(brand, milage){
        console.log("creating a object")
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}
let fortuner = new ToyotaCar("innova", 15);
// fortuner.setBrand("toyota");
console.log(fortuner);
let tata = new ToyotaCar("fortuner", 12);
// tata.setBrand("punch");
console.log(tata);


// inheritence in javascript
class Parent{
    hello(){
        console.log("hello");
    }
}
class child extends Parent{

}
let obj = new child();

class person{
    constructor(name){
     this.species="homo sapiens";
     this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    constructor(name){
        super(name);
    }
    work(){
        super.eat();
        console.log("devlop, deploy, build, design.")
    }
}

let engObj = new engineer("sid!");

// child and parent have same methods then child function will get executed!! this is called (Method Overriding)

// Practice set 1
let DATA = "Secrate information";
class User{
    constructor(userName,Email){
        this.userName = userName;
        this.Email = Email;
    }
    wiewData(){
        console.log("data = ",DATA);
    }
}
class Admin extends User{
    constructor(userName,Email){
        super(userName,Email);
    }
    editData(){
        DATA = "Some new data";
    }
}
let student1 = new User("sid", "sid19@email.com");
let student2 = new User("ambika", "Ambika16@gamil.com");

let admin1 = new Admin("Admin", "admin@gmail.comm");

// try error methods
let a = 4;
let b = 2;
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
try{
    console.log("a+b = ", a+c);
}catch(err){
console.log(err)
}
//erorr
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b); 
console.log("a+b = ", a+b);

