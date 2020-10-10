const computer = Math.floor(Math.random() * 3) + 1
let result = 'tie'

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

rock.onclick = () => {
    if(computer === 3){
        result = 'win'
    }else if(computer === 2){
        result = 'lose'
    }
    endGame(1)
}

paper.onclick = () => {
    if(computer === 1){
        result = 'win'
    }else if(computer === 3){
        result = 'lose'
    }
    endGame(2)
}

scissor.onclick = () => {
    if(computer === 2){
        result = 'win'
    }else if(computer === 1){
        result = 'lose'
    }
    endGame(3)
}

const endGame = (n) => {
    document.getElementById('cont').innerHTML = `
        <div class="res">Result: <span class="${result==='win'?'green':result==='lose'?'red':'gray'}">${result}</span></div><br>
        <div class="sub">You played: ${n===1?'Rock':n===2?'Paper':'Scissor'}</div><br>
        <div class="sub">Computer played: ${computer===1?'Rock':computer===2?'Paper':'Scissor'}</div><br>
        <button class="button" onclick="location.reload()">Play again?</button>
    `
}