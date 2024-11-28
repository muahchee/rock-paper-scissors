// create variable called ComputerChoice

// create function called getComputerChoice
//     randomly generate number between 0 to 2 and store output in ComputerChoice

//     If ComputerChoice is 0, print "Rock" into console
//     Else if ComputerChoice is 1, print "Paper" into console
//     Else print "Scissors" into console


let computerChoice;

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3)
    
    if (computerChoice === 0){
        console.log("Rock! The robot holds out a pretty round pebble from it's collection.")
    }else if (computerChoice === 1){
        console.log("Paper! The robot prints an A4 sheet from it's mouth while looking you in the eyes.")
    }else{
        console.log("Scissors! The robot shoves its C-shaped grippy hand at you.")
    }
}

getComputerChoice();

// Create variable called humanChoice

// Create function called getHumanChoice

//     create variable humanInput
//     prompt player to write their choice and store in humanInput
//     In humanInput, capitalise the first letter and make the rest lower case

//     If humanInput equals "Rock", store 0 in humanChoice and print "Rock" in console,
//     Else if humanInput equals "Paper", store 1 in humanChoice and print "Paper" in console,
//     Else if humanInput equals "Scissors", store 2 in humanChoice and print "Scissors" in console,
//     Else print "That's not a valid choice! ...or maybe you spelt it wrong. Either way, please type Rock, Paper or Scissors." in console. Allow player to re-enter choice.

let humanChoice;

function getHumanChoice(){
    let humanInput;
    humanInput = prompt("Rock, Paper or Scissors?");
    humanInput = humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();

    if (humanInput === "Rock"){
        humanChoice = 0;
        console.log("You choose Rock!");
    }else if(humanInput === "Paper"){
        humanChoice = 1;
        console.log("You choose Paper!");
    }else if(humanInput === "Scissors"){
        humanChoice = 2;
        console.log("You choose Scissors!")
    }else{
        console.log("That's not a valid choice! ...or maybe you spelt it wrong. Either way, please just type Rock, Paper or Scissors.")
        getHumanChoice();
    }
}

getHumanChoice();
    
