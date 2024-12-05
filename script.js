//Randomly choose between rock paper scissors for computer choice
let computerChoice;

function getComputerChoice(){
    let randomChoiceNumber;
    randomChoiceNumber = Math.floor(Math.random() * 3)
    
    if (randomChoiceNumber === 0){
        computerChoice = "Rock";
        console.log("Rock! The robot holds out a pretty round pebble from it's collection.")
    }else if (randomChoiceNumber === 1){
        computerChoice = "Paper";
        console.log("Paper! The robot prints an A4 sheet from it's mouth while looking you in the eyes.")
    }else{
        computerChoice = "Scissors";
        console.log("Scissors! The robot shoves its C-shaped grippy hand at you.")
    }
}


let humanChoice;
//human choice depends on button press
function getHumanChoice(humanChoice){

    if (humanChoice === "Rock"){
        console.log("You choose Rock!");
    }else if(humanChoice === "Paper"){
        console.log("You choose Paper!");
    }else if(humanChoice === "Scissors"){
        console.log ("You choose Scissors!")
    }else{
        console.log("That's not a valid choice! ...or maybe you spelt it wrong. Either way, please just type Rock, Paper or Scissors.")
        getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;


let winText = "You win! The robot beeps in discontent. One point to you."
let loseText = "You lose! The robot does a little spin. One point to the robot!"

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a draw! The robot returns to starting position.")
    } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        ++computerScore;
        console.log(loseText);
        console.log(`Player currently has ${humanScore} | Robot currently has ${computerScore}`);
    } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        ++humanScore;
        console.log(winText);
        console.log(`Player currently has ${humanScore} | Robot currently has ${computerScore}`);
    } else if(humanChoice === "Rock" && computerChoice === "Paper"){
        ++computerScore;
        console.log(loseText);
        console.log(`Player currently has ${humanScore} | Robot currently has ${computerScore}`);
    } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        ++humanScore;
        console.log(winText);
        console.log(`Player currently has ${humanScore} | Robot currently has ${computerScore}`);
    } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        ++computerScore;
        console.log(loseText);
        console.log(`Player currently has ${humanScore} | Robot currently has ${computerScore}`);
    } else if(humanChoice === "Paper" && computerChoice === "Rock"){
        ++humanScore;
        console.log(winText);
        console.log(`Player currently has ${humanScore} | Robot currently has ${computerScore}`);
    }
}

function playGame(humanChoice){
    for (let roundCount = 1; ; ++roundCount){
        console.log(`Round ${roundCount}!`)
        getHumanChoice(humanChoice);
        getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
}

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.addEventListener("click", playGame('Rock'));
paperBtn.addEventListener("click", playGame('Paper'));
scissorsBtn.addEventListener("click", playGame('Scissors'));

const btnContainer = document.createElement('div');

btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);




