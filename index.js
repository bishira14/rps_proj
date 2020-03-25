const playGame = () => {
let playerScore = 0;
let computerScore = 0;
let pScore = document.querySelector('.player-score p');
let cScore = document.querySelector('.computer-score p');

  const startGame = () => {

    let letsPlay = document.querySelector('.intro button');
    let theIntro = document.querySelector('.intro');
    let theMatch = document.querySelector('.match');

    letsPlay.addEventListener('click', function(){
      theIntro.classList.remove('fadeIn');
      theIntro.classList.add('fadeout');

      theMatch.classList.remove('fadeout');
      theMatch.classList.add('fadeIn');
      console.log('hello');
    });

  }

  const playMatch = () => {
    let options = document.querySelectorAll('.options button');
    let playerHand = document.querySelector('.player-hand');
    let computerHand = document.querySelector('.computer-hand');
    let hands = document.querySelectorAll('.hands img');
    let optionLabel = document.querySelector('.match h1');


    let arrayOfChoices = ['rock', 'paper', 'scissors'];
         for(let i = 0; i < options.length; i++){
             options[i].addEventListener('click', function(){
             let random = Math.floor(Math.random() * 3);
              hands.forEach((hand) => {
                if(hand.classList.contains('player-hand')){
                  hand.style.animation = 'shakePlayer 2s ease';
                }else{
                  hand.style.animation = 'shakeComputer 2s ease';
                }
                hand.addEventListener('animationstart',function(){
                  playerHand.src = 'img/rock.png';
                  computerHand.src = 'img/rock.png';
                });
                hand.addEventListener('animationend',function(){
                  hand.style.animation = '';
                  });
              });


             setTimeout(function(){

               if(options[i].classList.contains('rock')){
                 playerHand.src = 'img/rock.png';
                 computerHand.src = `img/${arrayOfChoices[random]}.png`;
                 if(arrayOfChoices[random] == 'paper'){
                   computerScore++;
                   cScore.innerHTML = computerScore;
                   optionLabel.innerHTML = 'Computer Wins';
                 }else if(arrayOfChoices[random] == 'scissors'){
                   playerScore++;
                   pScore.innerHTML = playerScore;
                   optionLabel.innerHTML = 'Player Wins';
                 }else{
                  optionLabel.innerHTML = 'Its a Tie';
                 }

               }else if (options[i].classList.contains('paper')){
                  playerHand.src = 'img/paper.png'
                  computerHand.src = `img/${arrayOfChoices[random]}.png`;
                  if(arrayOfChoices[random] == 'scissors'){
                    computerScore++;
                    optionLabel.innerHTML = 'Computer Wins';
                    cScore.innerHTML = computerScore;
                  }else if(arrayOfChoices[random] == 'rock'){
                    playerScore++;
                    pScore.innerHTML = playerScore;
                    optionLabel.innerHTML = 'Player Wins';
                  }else{
                   optionLabel.innerHTML = 'Its a Tie';
                  }
               }else{
                    playerHand.src = 'img/scissors.png'
                    computerHand.src = `img/${arrayOfChoices[random]}.png`;
                    if(arrayOfChoices[random] == 'rock'){
                      computerScore++;
                      cScore.innerHTML = computerScore;
                      optionLabel.innerHTML = 'Computer Wins';
                    }else if(arrayOfChoices[random] == 'paper'){
                      playerScore++;
                      pScore.innerHTML = playerScore;
                      optionLabel.innerHTML = 'Player Wins';
                    }else{
                     optionLabel.innerHTML = 'Its a Tie';
                    }
               }
             },2000);

             })
         }


  }

  startGame();
  playMatch();
}

playGame();
