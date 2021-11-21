// Now that we have a fully functioning game, our next step is to have it run as many times as people would like to play 
// without having to refresh the page.

// Use a `while loop` and `confirm`.

// This will be deemed as complete when a player can keep playing indefinitely and has the option to stop playing after every round.


//put in a while loop conditional on a variable called continuePlaying: while continuePlaying === true
//confirm after each game is player wants to loop and store in variable
//if true/they DO continue loop
//if false/DO BREAK out of the loop :) 


let moves = ["rock", "paper", "scissors"];


//---------------------------------------Main flow 
let continuePlaying = true;

while(continuePlaying === true){
let playerMove = prompt("rock, paper, or scissors?");


let randomNumber = Math.floor(Math.random() * 3);

let computerMove = moves[randomNumber];
let result = getWinner(playerMove, computerMove); //0

alert("Here's your result: " + result + ". The computer chose: " + computerMove);
continuePlaying = confirm("Would you like to keep playing? ");

}

alert("THANKS FOR PLAYING MY DEAR FRIEND");


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


