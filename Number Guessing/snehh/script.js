let guess = document.getElementById('guess')
let hint = document.getElementById('hint')
let left = 5

let ans = Math.floor(Math.random() * 20) + 1

const gameLose = () => {
    document.getElementById('main').innerHTML = `Tough luck! The correct number was <span class="turns">${ans}</span><br><button onClick="location.reload()">Replay?</button>`
}

const gameWin = () => {
    document.getElementById('main').innerHTML = `Congrats! You guessed the number in <span class="turns">${5 - left + 1}</span> ${(left === 5)?'turn':'turns'}<br><button onClick="location.reload()">Replay?</button>`
}

guess.onclick = () => {
    document.getElementById('turns').innerHTML = left
    hint.innerHTML = ''

    let val = parseInt(document.getElementById('val').value)
    document.getElementById('val').value = null

    if(val){
        if(val === ans){
            gameWin()
        }else if(val > ans){
            hint.innerHTML = `${val} is too high`
        }else{
            hint.innerHTML = `${val} is too low`
        }
        left--
        if(left === 0) gameLose()
        else if(val!=ans) document.getElementById('turns').innerHTML = left
    }
}