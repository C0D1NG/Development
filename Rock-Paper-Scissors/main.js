let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let player;
let you = document.getElementById('you');
let comp = document.getElementById('computer');
let wins = document.getElementById('winScore'); 
let lose = document.getElementById('loseScore');
let tie = document.getElementById('tieScore');
let reset = document.getElementById('button');

rock.addEventListener('click', getRock);
rock.addEventListener('click', computer);
paper.addEventListener('click', getPaper);
paper.addEventListener('click', computer);
scissors.addEventListener('click', getScissors);
scissors.addEventListener('click', computer);
reset.addEventListener('click', resetScore);



function getRock(){
    player = 0;
    you.innerHTML = 'Your Selection: <i class="fas fa-hand-rock"></i>';
}

function getPaper(){
    player = 1;
    you.innerHTML = 'Your Selection: <i class="fas fa-hand-paper"></i>';
}

function getScissors(){
    player = 2;
    you.innerHTML = 'Your Selection: <i class="fas fa-hand-scissors"></i>';
}

function computer(){
    var number = Math.floor(Math.random() * 3);
    if(number === 0){
        comp.innerHTML = 'Computer Selection: <i class="fas fa-hand-rock"></i>';
    }else if(number === 1){
        comp.innerHTML = 'Computer Selection: <i class="fas fa-hand-paper"></i>';
    }else{
        comp.innerHTML = 'Computer Selection: <i class="fas fa-hand-scissors"></i>';
    }
    score(number)
}

function score(number){
  if(player === number){
    tie.innerHTML = parseInt(tie.innerHTML) + 1;
  }else if(player === 0 && number === 2 || player === 1 && number === 0 || player === 2 && number === 1){
      wins.innerHTML = parseInt(wins.innerHTML) + 1;
  }else{
      lose.innerHTML = parseInt(lose.innerHTML) + 1;
  }
}

function resetScore(){
    tie.innerHTML = 0;
    wins.innerHTML = 0;
    lose.innerHTML = 0;
    you.innerHTML = 'Your Selection:';
    comp.innerHTML = 'Computer Selection:'
}
