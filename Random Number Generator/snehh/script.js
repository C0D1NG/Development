let val = document.getElementById('val')

const number = Math.floor(Math.random() * 100) + 1

const interval = setInterval(() => {
    val.innerHTML = Math.floor(Math.random() * 100) + 1
}, 80)

const timeOut = setTimeout(() => {
    clearInterval(interval)
    document.getElementById('button').removeAttribute('disabled')
    val.innerHTML = number
}, 800)