let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choices");



const scoreBoard = document.querySelector(".score-board");

const messege = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencomChoice=()=>{
    const options = ["rock", "paper", "scissor"];
    const randInx = Math.floor(Math.random()*3);
    return options[randInx];
}

const darwGame = () =>{
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";
        }else{
            compScore++;
            compScorepara.innerText = compScore;
            msg.innerText =`You Loose! ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor ="red";
        }
} 

const playGame = (userChoice) => {
    console.log("User Choice=", userChoice);
    const compChoice = gencomChoice();
    console.log("comp Choice=", compChoice);

    if(userChoice === compChoice){
        darwGame();
    }else{
       let userWin = true;
       if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
       }else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false: true;
       }else{
        userWin = compChoice === "rock" ? false : true;
       }
       showWinner(userWin, userChoice, compChoice);
    }
};

choice.forEach((choice) ,() =>{
   choice.addEventListner("click", () =>{
    console.log("rock was clicked");
   })
});