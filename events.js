// const btn1 = document.querySelector('#btn1');
// btn1.onclick = () =>{
//     console.log("btn1 was clicked")
//     let a =5;
//     a++;
//     console.log("a =", a);
// }

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("dblclick", () => {
//     console.log("button 1 was clicked-handler1");
// })
// btn2.addEventListener("dblclick", () => {
//     console.log("button 1 was clicked-handler2");
// })
// const handler3 = ()=>{
//     console.log("button 1 was clicked-handler3");  
// }
// btn2.addEventListener("dblclick",handler3)

// btn2.addEventListener("dblclick", () => {
//     console.log("button 1 was clicked-handler4");
// })
// btn2.removeEventListener("dblclick", handler3);



// const div = document.querySelector("div");
// div.onmouseover = (evt)=> {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

//     console.log("your inside div!")
// }


//  practice test 1 create a toggle button when it clicked turn to dark thn clicked turn it to white
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode ="dark";
       body.classList.add("dark");
       body.classList.remove("light");

    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})