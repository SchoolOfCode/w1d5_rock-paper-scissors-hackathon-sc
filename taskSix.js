// Keep track of how many games have been played, as well as the number of wins, losses, and draws.

//PLAN
//Create an object to track score: games played, wins, losses, draws
//create nested if loop (tree :D ) to track score
    //adding result to relevant key in object

// This will be deemed as complete when this information is displayed after each round.



let moves = ["rock", "paper", "scissors"];

let score = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

//---------------------------------------Main flow 
let continuePlaying = true;

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
alert("You " + result + " The computer chose: " + computerMove);

continuePlaying = confirm("Would you like to keep playing? ");

}

let farewell = "THANKS FOR PLAYING :)";

if (score.wins > score.losses){
    farewell = "THANKS FOR PLAYING MY DEAR FRIEND";
} else {
    farewell = "APPALLING SHOW. TRY BETTER NEXT TIME";
}

alert(`You played ${score.gamesPlayed} times. 
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