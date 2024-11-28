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
        console.log("Rock")
    }else if (computerChoice === 1){
        console.log("Paper")
    }else{
        console.log("Scissors")
    }
}

getComputerChoice();

Create variable called humanChoice
Create function called getHumanChoice
    create variable humanInput
    prompt player to write their choice and store in humanInput
    
    
