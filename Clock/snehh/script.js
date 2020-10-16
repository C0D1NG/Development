let start = document.getElementById('start')
let reset = document.getElementById('reset')
let over = document.getElementById('over')

let h, m, s;

const timeOver = () => {
    let i=0
    const blink = setInterval(() => {
        if(i>6){
            over.innerHTML = 'Time Over!'
            clearInterval(blink)
        }
        if(i%2 == 0) over.innerHTML = ''
        else over.innerHTML = 'Time Over!'
        i++
    }, 200)
}

start.onclick = () => {
    let hh = document.getElementById('hh'), mm = document.getElementById('mm'), ss = document.getElementById('ss')
    let htime = document.getElementById('htime'); let mtime = document.getElementById('mtime'); let stime = document.getElementById('stime'); 

    h = parseInt(hh.value); m = parseInt(mm.value); s = parseInt(ss.value)

    hh.value = null; mm.value = null; ss.value = null

    if(!h) h=0; if(!m) m=0; if(!s) s=0 

    over.innerHTML = ''

    htime.innerHTML = h
    mtime.innerHTML = m
    stime.innerHTML = s

    if(s!==0) s--;
    else if(m!==0) {m--; s=59}
    else if(h!==0) {h--; m=59; s=59}

        const countDown = setInterval(() => {
                htime.innerHTML = h
                mtime.innerHTML = m
                stime.innerHTML = s
            if(h+m+s === 0){
                over.innerHTML = 'Time Over!'
                timeOver()
                clearInterval(countDown)
            }
            if(s!==0) s--;
            else if(m!==0) {m--; s=59}
            else if(h!==0) {h--; m=59}
        }, 1000)

        reset.onclick = () => {
            clearInterval(countDown)
            
            htime.innerHTML = 0
            mtime.innerHTML = 0
            stime.innerHTML = 0

            over.innerHTML = ''
        }
}