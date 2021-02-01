'use strict';

/*

//console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

//console.log(document.querySelector('.guess').value = 10);

document.querySelector('.guess').value = 10;

*/

//remove number after check
//disable button and text box after lost the game.
//150 score limit the game

let Secretnumber = Math.trunc(Math.random()*20)+1;
let Score = 20;
let HighestScore = 0;
let FinalScore = 150;

//document.querySelector('.number').textContent = Secretnumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);
    //console.log(guess);
    //console.log(Secretnumber);



    if (!guess) {
        //Blank Input

        //css manipulation DOM
        document.querySelector('body').style.backgroundColor = '#a19012';
        document.querySelector('.message').textContent = "Blank Input can't be checked with guessed Number!";

    }if(guess < 0 || guess< 1 || guess > 20 ){
        //Negative Number & Range out of Bound Input

        //css manipulation DOM
        document.querySelector('body').style.backgroundColor = '#a19012';
        document.querySelector('.message').textContent = "Negative Number Input or Input Range Out of Bound!";

    }else if(guess === Secretnumber){
        //Player Wins

        //css manipulation DOM
        document.querySelector('body').style.backgroundColor = '#039c4a';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = "Correct Number!";
        Score ++;
        document.querySelector('.score').textContent = Score;
        Secretnumber = Math.trunc(Math.random()*20)+1;
        

        if (Score > HighestScore || Score == 150) {
            HighestScore = Score;
            document.querySelector('.highscore').textContent = HighestScore;
            
        }
        if (Score >= 150) {
            HighestScore = Score;
            document.querySelector('.highscore').textContent = HighestScore;
            document.querySelector('.message').textContent = "You Win, Press Restart to Play again!";
            document.querySelector('.guess').disabled=true;
            document.querySelector('.check').disabled=true;
            document.querySelector('body').style.backgroundColor = '#7e018f';
        }
        
        
        


    }else if(guess > Secretnumber){
        //Player Guessed Number High
        //console.log('enter1');
        //css manipulation DOM
        document.querySelector('body').style.backgroundColor = '#ad1602';
        if (Score > 0) {
            document.querySelector('.message').textContent = "Too high!";
            Score --;
            document.querySelector('.score').textContent = Score;
            
        }else if(Score == 0){
            document.querySelector('.message').textContent = "Game Over, You lost the Game, Press Restart to Play again!";
            document.querySelector('.guess').disabled=true;
            document.querySelector('.check').disabled=true;
            document.querySelector('body').style.backgroundColor = '#1b018f';
        }
        

        
    }else if(guess < Secretnumber){
        //Player Guessed Number Low
        //console.log('enter2');
        //css manipulation DOM
        document.querySelector('body').style.backgroundColor = '#ad1602';
        if (Score > 0) {

            document.querySelector('.message').textContent = "Too low!";
            Score --;
            document.querySelector('.score').textContent = Score;
        }else if(Score == 0){
            document.querySelector('.message').textContent = "Game Over, You lost the Game, Press Restart to Play again!";
            document.querySelector('.guess').disabled=true;
            document.querySelector('.check').disabled=true;
            document.querySelector('body').style.backgroundColor = '#1b018f';
        }
        //document.getElementsByTagName("INPUT")[0].setAttribute(".guess", ""); //<input type="number" class="guess" />
    }

});

document.querySelector('.again').addEventListener('click', function () {
    //reset Game
    Score = 20;
    Secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = Score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.guess').disabled=false;
    document.querySelector('.check').disabled=false;
    //css manipulation DOM
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});
