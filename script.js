
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

const gameLog = document.createElement('div');

rockBtn.textContent = "Rock!";
paperBtn.textContent = "Paper!";
scissorsBtn.textContent = "Scissors!";

const btnContainer = document.createElement('div');

btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);
document.body.appendChild(btnContainer);
document.body.appendChild(gameLog);


let humanChoice;

function chooseRock(){
    const log = document.createElement("p");
    log.textContent = "You choose Rock!";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    humanChoice = "Rock";
    getComputerChoice();
    
}

function choosePaper(){
    const log = document.createElement("p");
    log.textContent = "You choose Paper!";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    humanChoice = "Paper";
    getComputerChoice();
}

function chooseScissors(){
    const log = document.createElement("p");
    log.textContent = "You choose Scissors!";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    humanChoice = "Scissors";
    getComputerChoice();
}

let computerChoice;
//Randomly choose between rock paper scissors for computer choice
function getComputerChoice(){
    let randomChoiceNumber;
    randomChoiceNumber = Math.floor(Math.random() * 3)
    
    if (randomChoiceNumber === 0){
        const log = document.createElement("p");
        log.textContent = "Rock! The robot holds out a pretty round pebble from it's collection.";
        gameLog.insertBefore(log, gameLog.childNodes[0]);
        computerChoice = "Rock";
    }else if (randomChoiceNumber === 1){
        const log = document.createElement("p");
        log.textContent = "Paper! The robot prints an A4 sheet from it's mouth while looking you in the eyes.";
        gameLog.insertBefore(log, gameLog.childNodes[0]);
        computerChoice = "Paper";
    }else{
        const log = document.createElement("p");
        log.textContent = "Scissors! The robot shoves its C-shaped grippy hand at you.";
        gameLog.insertBefore(log, gameLog.childNodes[0]);
        computerChoice = "Scissors";
    }
}



let humanScore = 0;
let computerScore = 0;


let winText = "You win! The robot beeps in discontent. One point to you."
let loseText = "You lose! The robot does a little spin. One point to the robot!"

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        gameLog.textContent ="It's a draw! The robot returns to starting position."
    } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        ++computerScore;
        gameLog.textContent = loseText;
        gameLog.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        ++humanScore;
        gameLog.textContent = winText;
        gameLog.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    } else if(humanChoice === "Rock" && computerChoice === "Paper"){
        ++computerScore;
        gameLog.textContent = loseText;
        gameLog.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        ++humanScore;
        gameLog.textContent = winText;
        gameLog.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        ++computerScore;
        gameLog.textContent = loseText;
        gameLog.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    } else if(humanChoice === "Paper" && computerChoice === "Rock"){
        ++humanScore;
        gameLog.textContent = winText;
        gameLog.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    }
}

function playGame(){
    for (let roundCount = 1; ; ++roundCount){
        gameLog.textContent =`Round ${roundCount}!`;
        getHumanChoice(humanChoice);
        getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
}

rockBtn.addEventListener('click', chooseRock);
paperBtn.addEventListener('click', choosePaper);
scissorsBtn.addEventListener('click', chooseScissors);


