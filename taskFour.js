// ## Task 4: Computer Player

// Write a function that generates a random computer move. Use that function to make a 
//dynamic game where the computer move is randomly chosen every time instead of being hard-coded.

// <details>
// <summary>Hint</summary>
// `Math.random()` might be useful!
// </details>

// This will be deemed as complete when the player can input any move in the prompt, the computer 
//move is chosen by random, and the correct result shows in the alert.

// make an array
// Random Number
// index array by random Number
// set computer choice to index array



let playerMove = prompt("rock, paper, or scissors?");

let moves = ["rock", "paper", "scissors"];

let randomNumber = Math.floor(Math.random() * 3);

let computerMove = moves[randomNumber];
let result = getWinner(playerMove, computerMove); //0
alert("Here's your result: " + result + ". The computer chose: " + computerMove);

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
