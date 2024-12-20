
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
    playRound(humanChoice,computerChoice);
    winGame();
    
}

function choosePaper(){
    const log = document.createElement("p");
    log.textContent = "You choose Paper!";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    humanChoice = "Paper";
    getComputerChoice();
    playRound(humanChoice,computerChoice);
    winGame();
}

function chooseScissors(){
    const log = document.createElement("p");
    log.textContent = "You choose Scissors!";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    humanChoice = "Scissors";
    getComputerChoice();
    playRound(humanChoice,computerChoice);
    winGame();
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


function loseRound(){
    ++computerScore;
    const log = document.createElement("p");
    log.textContent = "You lose! The robot does a little spin. One point to the robot!";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    const score = document.createElement("p");
    score.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    gameLog.insertBefore(score, gameLog.childNodes[0]);
}

function winRound(){
    ++humanScore;
    const log = document.createElement("p");
    log.textContent = "You win! The robot beeps in discontent. One point to you.";
    gameLog.insertBefore(log, gameLog.childNodes[0]);
    const score = document.createElement("p");
    score.textContent = `Player currently has ${humanScore} | Robot currently has ${computerScore}`;
    gameLog.insertBefore(score, gameLog.childNodes[0]);
}

//combinations of choice
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        const log = document.createElement("p");
        log.textContent ="It's a draw! The robot returns to starting position.";
        gameLog.insertBefore(log, gameLog.childNodes[0]);
    } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        loseRound();
    } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        winRound();
    } else if(humanChoice === "Rock" && computerChoice === "Paper"){
        loseRound();
    } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        winRound();
    } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        loseRound();
    } else if(humanChoice === "Paper" && computerChoice === "Rock"){
        winRound();
    }
}

//announce winner and resets score
function winGame(){
    if (humanScore === 5){
        const log = document.createElement("p");
        log.textContent = "Aaaandddd STOP! The winner is...PLAYER!!";
        gameLog.insertBefore(log, gameLog.childNodes[0]);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        const log = document.createElement("p");
        log.textContent = "Aaaandddd STOP! The winner is...ROBOT!!";
        gameLog.insertBefore(log, gameLog.childNodes[0]);
        humanScore = 0;
        computerScore = 0;
    }
}

rockBtn.addEventListener('click', chooseRock);
paperBtn.addEventListener('click', choosePaper);
scissorsBtn.addEventListener('click', chooseScissors);


