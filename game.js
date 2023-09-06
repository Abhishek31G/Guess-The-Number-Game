let number = parseInt((Math.random()*101)+1); //generates random number between : 1 to 100
let chances = 0;
for(let i = 0;i <100;i++){
    let user_guess = parseInt(prompt("Guess the number: "));
    chances++;
    if(number===user_guess){
        console.log(`Bravo! You guessed it right. The number is ${number}`)
        console.log(`You took ${chances}chances, so your score is ${100-chances}`)
    }else if(number>user_guess){
        console.log(`Sorry! Better luck next time. The number is  greater than ${user_guess}`)
    }else{
        console.log(`Sorry! Better luck next time. The number is  less than ${user_guess}`)
    }
    
}
