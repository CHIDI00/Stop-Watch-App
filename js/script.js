const time = document.querySelector('.time')
const start_Btn = document.querySelector('.start')
const stop_Btn = document.querySelector('.stop')
const reset_Btn = document.querySelector('.reset')

let seconds = 0;
let timeInterval = null;


function timer() {
    seconds++
    
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60 

    if (hrs < 10) hrs = '0' + hrs
    if (mins < 10) mins = '0' + mins
    if (secs < 10) secs = '0' + secs

    time.innerText = `${hrs}:${mins}:${secs}`
}

timer()

function start() {
    if (timeInterval) {
        return
    }
    timeInterval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(timeInterval)
    timeInterval = null
}

function reset() {
    stop()
    seconds = 0
    time.innerText = "00:00:00"
}

start_Btn.addEventListener('click', start)
stop_Btn.addEventListener('click', stop)
reset_Btn.addEventListener('click', reset)

// setTimeout(() => {
//     startBtnClick()
// }, 1000)