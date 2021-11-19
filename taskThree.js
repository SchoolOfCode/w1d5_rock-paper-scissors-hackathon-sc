// Using `prompt`, get a user-inputted value for the player move. Then call your function with that value as the player move and the hard-coded computer move. Display the result using `alert`.

//PLAN
//variables pointing to user input
//make alert that displays result
//call function with user input & preset computer move


// This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.

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
    
  
let playerMove = prompt("rock, paper, or scissors?");
let computerMove = "paper";

let result = getWinner(playerMove,computerMove); //0
alert("You chose: " + result + ". The computer chose: " + computerMove);
