const URL =  "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const newbtn = document.querySelector("#btn");

// using async await methods in fetch API's
const getFacts = async () =>{
    console.log("getting data....")
    let response= await fetch(URL);
console.log(response);
let data = await response.json()
factPara.innerText = data[2].text;
};
newbtn.addEventListener("click", getFacts);

// using primise chain method in fetch API's
// let getFacts= () => {
//     fetch(URL).then((response) => {
//        return response.json();
//     }).then((data)=>{
//    console.log(data);
//     factPara.innerText = data[2].text;
//     })
// }
// newbtn.addEventListener("click", getFacts);