// create variable called ComputerChoice

// create function called getComputerChoice

//     create a variable called randomChoiceNumber 
//     generate number between 0 to 2 and store output in randomChoiceNumber

//     If randomChoiceNumber is 0, store "Rock" in ComputerChoice and print "Rock" into console

//     Else if ComputerChoice is 1, store "Paper" in ComputerChoice and print "Paper" into console

//     Else store "Scissors" in ComputerChoice and print "Scissors" into console


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

getComputerChoice();

// Create variable called humanChoice

// Create function called getHumanChoice

//     prompt player to write their choice and store in humanChoice
//     In humanChoice, capitalise the first letter and make the rest lower case

//     If humanChoice equals "Rock", print "Rock" in console,
//     Else if humanChoice equals "Paper", print "Paper" in console,
//     Else if humanChoice equals "Scissors", print "Scissors" in console,
//     Else print "That's not a valid choice! ...or maybe you spelt it wrong. Either way, please type Rock, Paper or Scissors." in console. Allow player to re-enter choice.

let humanChoice;

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (humanChoice === "Rock"){
        console.log("You choose Rock!");
    }else if(humanChoice === "Paper"){
        console.log("You choose Paper!");
    }else if(humanChoice === "Scissors"){
        console.log("You choose Scissors!")
    }else{
        console.log("That's not a valid choice! ...or maybe you spelt it wrong. Either way, please just type Rock, Paper or Scissors.")
        getHumanChoice();
    }
}

getHumanChoice();
    
// create a variable called humanScore and set it to 0
// create a variable called computerScore and set it to 0

let humanScore = 0;
let computerScore = 0;
