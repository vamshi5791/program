'use strict'
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='CORRECT NUMBER';
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let secretnumber=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;
document.querySelector('.btncheck').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='No number!';
    }
    else if(guess===secretnumber){
        document.querySelector('.message').textContent='you guessed correct';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('.number').style.width='30rem';
       
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess!==secretnumber){
        if(score>1){
            document.querySelector('.message').textContent=guess>secretnumber?
            "your guess is To high":"your guess is To Low";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    }
    /*else if(guess>secretnumber){
        if(score>1){
            document.querySelector('.message').textContent="your guess is To high";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent=0;
        }
        
       
    }
    else if(guess<secretnumber){
        if(score>1){
            document.querySelector('.message').textContent="your guess is To Low";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent=0;
        }
        }*/
        
    
});
document.querySelector('.btnagain').addEventListener('click',function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#FFFFFF';
    document.querySelector('.number').style.width='15rem';

});
