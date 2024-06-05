let userScore = 0;
let compScore = 0;

let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const getcompChoice = () => {
    const choices = ["r", "p", "s"];
    const randNumber = Math.floor(Math.random()*3);
    return choices[randNumber];
}

const convertTo = (letter) => {
    if(letter === "r") return "rock";
    if(letter === "p") return "paper";
    return "scissor";
}
const win = (userChoice, compChoice) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertTo(userChoice)}${smallUserWord} beats ${convertTo(compChoice)}${smallCompWord}. YOU WIN!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() =>{userChoice_div.classList.remove("green-glow")}, 1000);
};
const loose = (userChoice, compChoice) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertTo(userChoice)}${smallUserWord} looses to ${convertTo(compChoice)}${smallCompWord}. YOU LOOSE!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() =>{userChoice_div.classList.remove("red-glow")}, 1000);  
};
const draw = (userChoice, compChoice) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTo(userChoice)}${smallUserWord} equals ${convertTo(compChoice)}${smallCompWord}. ITS A DRAW!`;
    userChoice_div.classList.add("lightgray-glow");
    setTimeout(() =>{userChoice_div.classList.remove("lightgray-glow")}, 1000);
};

const game = (userChoice) => {
    const compChoice = getcompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, compChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        loose(userChoice, compChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
       draw(userChoice, compChoice);
        break;    
    }
}

const main = () =>{
rock_div.addEventListener("click", () => game("r"));
paper_div.addEventListener("click", () => game("p"));
scissor_div.addEventListener("click", () => game("s"));S
};

main();