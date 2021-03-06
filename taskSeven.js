// ## Task 7: Get the player's name using a prompt

// Create a username `prompt` and use the username the player inputs in the game so that a player 
// can see their name in the messages sent to them.
// ==> make variable for username


// To make it more uniform, restrict the number of characters a username can be to 10 or fewer.
// ==>if statement to limit length of string and save to variable. if more than 10 create alert using while loop

// This will be deemed as complete when the users cannot enter a username longer than 10 characters.
// ==> Refractor the alert to username

// 🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.  
// 🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised. 

//------------------------------------------Global Variables.
//let moves = ["rock", "paper", "scissors","lizard","spock"];

let score = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}


let userName;

let continuePlaying = true;

//Store the posible moves in one array and the opposite moves in another array with the same index
let moves = ["rock", "paper", "scissors","lizard","spock"];
let oppositeMoves = ["paper", "scissors", "rock", "scissors", "lizard"];
//set the probability outside of the function as a default, let it be passed into the function so
// the probability can be unique at call time
let probability = 100;
//---------------------------------------Main flow 

//IsNaN PLAN

//Is not a number- isNaN(userName.slice(0,0))
//take the first letter of userName using slice(0,0)
// '4' is isNaN('4') 
//if it is a number it will return as false
//isNaN(userName.slice(0,1))
//This worked but regular expressions work better

//Regular expression 



while(userName === undefined) {
    userName = prompt(`What is your name? 
    -Max 10 characters.
    -First character must be a letter.   
    -First character must NOT be a capital letter.`);
    
    
    if (userName.length > 10 || isALetter(userName.slice(0,1)) === false){
        userName = undefined;
    }
}
alert(`Welcome ${userName}.`);

while(continuePlaying === true){
    let playerMove = prompt("Rock, paper, lizard, scissors, spock?!!!?!?!?!?!?!??");
    
    computerMove = getComputerMove(probability, playerMove.toLowerCase());
    
    let result = getWinner(playerMove.toLowerCase(), computerMove); //0
    
    if (result === -1) {
        score.losses++;
    } else if (result === 1){
        score.wins++;
    } else if (result === 0){
        score.draws++;
    }else{
        score.losses++;
    }
    
    score.gamesPlayed++;
    
    if (result === -1) {
        result = "lost!";
    } else if (result === 1){
        result = "won!";
    } else if (result === 0){
        result = "drew!";
    }else{
        result = "please enter something next time, do you think I have all day? You really can't check one little word?!";
        
    }
    alert(`${userName} ${result}. 
    The computer chose: ${computerMove}`);
    
    continuePlaying = confirm(`Would ${userName} like to keep playing?`);
    
}

let farewell = "THANKS FOR PLAYING :)";

if (score.wins > score.losses){
    farewell = `THANKS FOR PLAYING MY DEAR FRIEND, ${userName}. You're AMAZING!!!`;
} else {
    farewell = `APPALLING SHOW ${userName}!!!! TRY BETTER NEXT TIME`;
}

alert(`${userName} played ${score.gamesPlayed} times. 
You won ${score.wins} many times. 
You lost ${score.losses} many times. 
You drew ${score.draws} many times. 
${farewell}`);



//--------------------------------------------Functions  


//-----------Probability plan
//How to make a move be selected x amount of times out of a hundred?
//define the probability 
//make an array that can be added to via .push()
//loop through the array 100 times, push in the move that beats the user for the probaility amount 
// so a probability of 50 will appear 50/100
//fill the rest of the array with random moves
//choose a random move from the array and return it 
//store it in computerMove

function getComputerMove(prob, TheUsersChoice){

    //if TheUsersChoice is empty:

    if(typeof TheUsersChoice === undefined){
        TheUsersChoice = moves[ Math.floor(Math.random() * moves.length)] ;
        console.log(`Moves user choice empty: Choosing ${TheUsersChoice} `);
    };

    //create two variables for the function: a random number between 0-2 to select a random move 
    //One is an array to store 100 moves into
    let randomNumber = Math.floor(Math.random() * moves.length);
    let oneHundredChoices = [];
    //loop 100 times to fill the array
    for (let x = 0; x<100; x++){
        //add the opposite of the users choice to the array for as many times as probability, make the rest random
        if(x<prob){
            //get the index from moves of the users position, use that index in oppositeMoves to get the winning move. 
            let usersChoicePosition = moves.indexOf(TheUsersChoice);
            oneHundredChoices.push(oppositeMoves[usersChoicePosition]);
        }else{
            //make all the choices after the amount of probability random, generate a new random number
            oneHundredChoices.push(moves[randomNumber]);
            randomNumber = Math.floor(Math.random() * moves.length);
        }
        
    }
    console.log(oneHundredChoices);
    //select a random move from the oneHundredChoices array and return it. 
    randomNumber = Math.floor(Math.random() * oneHundredChoices.length );
    return(oneHundredChoices[randomNumber]);
}


function isALetter(char){
    return (/[a-z]/).test(char);
}

function getWinner(playerMove, computerMove){
    
    //rock
    
    
    if(playerMove === "rock" && computerMove === "paper" ){ //loss
        return -1;}
        else if(playerMove === "rock" && computerMove === "spock" ){ //loss
        return -1;}
            
        else if(playerMove === "rock" && computerMove === "scissors" ){ //win
        return 1;}
        else if(playerMove === "rock" && computerMove === "lizard" ){ //win
        return 1;}
                    
        else if(playerMove === "rock" && computerMove === "rock" ){ //draw
        return 0;
    }
        //paper
       

    if(playerMove === "paper" && computerMove === "lizard" ){ //loss
        return -1;}
        else if(playerMove === "paper" && computerMove === "scissors" ){ //loss
        return -1;}
                            
        else if(playerMove === "paper" && computerMove === "rock" ){ //win
         return 1;}
        else if(playerMove === "paper" && computerMove === "spock" ){ //win
        return 1;}
                                    
        else if(playerMove === "paper" && computerMove === "paper" ){ //draw
        return 0;
        }
                                    
        //scissors
                                    
        if(playerMove === "scissors" && computerMove === "rock" ){ //loss
        return -1;}
        else if(playerMove === "scissors" && computerMove === "spock" ){ //loss
        return -1;}
                                            
        else if(playerMove === "scissors" && computerMove === "paper" ){ //win
        return 1;}
        else if(playerMove === "scissors" && computerMove === "lizard" ){ //win
        return 1;}
                                                    
        else if(playerMove === "scissors" && computerMove === "scissors" ){ //draw
        return 0;
         }
                                                    
        //lizard
                                                    
        if(playerMove === "lizard" && computerMove === "rock" ){ //loss
        return -1;}
        else if(playerMove === "lizard" && computerMove === "scissors" ){ //loss
        return -1;}
                                                            
        else if(playerMove === "lizard" && computerMove === "spock" ){ //win
        return 1;}
        else if(playerMove === "lizard" && computerMove === "paper" ){ //win
        return 1;}
                                                                    
        else if(playerMove === "lizard" && computerMove === "lizard" ){ //draw
        return 0;
        }
                                                                    
        //spock
                                                                    
                                                                    
        if(playerMove === "spock" && computerMove === "lizard" ){ //loss
        return -1;}
        else if(playerMove === "spock" && computerMove === "paper" ){ //loss
        return -1;}
                                                                            
        else if(playerMove === "spock" && computerMove === "scissors" ){ //win
        return 1;}
        else if(playerMove === "spock" && computerMove === "rock" ){ //win
        return 1;}
                                                                                    
        else if(playerMove === "spock" && computerMove === "spock" ){ //draw
        return 0;
        }
        else {return 99;
        }
                                                                                                                                                                
        }
                                                                                
                                                                                
// Rock, paper scissors is now boring. We need to jazz is up a bit.  
// Add some more moves that a player can make.  
// Check out this example:  
//![rock paper scissors lizard spock](./RPSLS.jpeg)  

// Modify your logic to represent your new version of this timeless children's game.


//Rock paper scissors lizard spock

//rock beats scissors
//rock beats lizard

//scissors beats lizard
//scissors beats paper

//paper beats rock
//paper beats spock

//lizard posions spock
//lizard beats paper


//spock beats scissors
//spock beats rock


//How many times does something beat and lose or draw?
//Something can win twice and lose twice.



// How would you go about making the computer win every time?
    //Asking what the human enters and then get the computer to select a choice that beats it
        //Store all possibilities in arrays
// How would you go about making it so that the computer wins more often (1/2 the time, 1/4 of the time 90% of the time)?
    //Create function where you can pass in a probability between 0-100% (either user-entered or hard-coded by programmer)
    //OR 
// Plan how you'd go about implementing this (use pseudo-code).

// If you have time, see if you can start writing this.