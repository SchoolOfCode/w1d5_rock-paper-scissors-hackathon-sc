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

let moves = ["rock", "paper", "scissors"];

let score = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

let userName;

//---------------------------------------Main flow 
let continuePlaying = true;

//IsNaN PLAN

//Is not a number- isNaN(userName.slice(0,0))
//take the first letter of userName using slice(0,0)
// '4' is isNaN('4') 
//if it is a number it will return as false
//isNaN(userName.slice(0,1))

//Regular expression 

function isALetter(char){
    return (/[a-z]/).test(char);
}

while(userName === undefined) {
    userName = prompt(`What is your name? 
    (-Max 10 characters.
    -First character must be a letter.   
    -First character must NOT be a capital letter.)`);


    if (userName.length > 10 || isALetter(userName.slice(0,1)) === false){
        userName = undefined;
    }
}
alert(`Welcome ${userName}.`);

while(continuePlaying === true){
let playerMove = prompt("rock, paper, or scissors?");


let randomNumber = Math.floor(Math.random() * 3);

let computerMove = moves[randomNumber];
let result = getWinner(playerMove, computerMove); //0

if (result === -1) {
    score.losses++;
} else if (result === 1){
    score.wins++;
} else if (result === 0){
    score.draws++;
}
score.gamesPlayed++;

if (result === -1) {
    result = "lost!";
} else if (result === 1){
    result = "won!";
} else if (result === 0){
    result = "drew!";
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


function getWinner(playerMove, computerMove){


    if (playerMove === "rock" && computerMove === "paper"){
        return -1;
    }else if(playerMove === "rock" && computerMove === "scissors" ){
        return 1;
    }else if(playerMove === "rock" && computerMove === "rock" ){
        return 0;
    
    
    
    }else if(playerMove === "paper" && computerMove === "rock" ){
        return 1;
    }else if(playerMove === "paper" && computerMove === "scissors" ){
        return -1;
    }else if(playerMove === "paper" && computerMove === "paper" ){
        return 0;
    
    
    
    }else if(playerMove === "scissors" && computerMove === "rock" ){
        return -1;
    }else if(playerMove === "scissors" && computerMove === "paper" ){
        return 1;
    }else if(playerMove === "scissors" && computerMove === "scissors" ){
        return 0;
    }
    }