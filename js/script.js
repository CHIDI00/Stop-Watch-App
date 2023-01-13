const time_El = document.querySelector('.time')
const start_El = document.querySelector('.start')
const stop_El = document.querySelector('.stop')
const reset_EL = document.querySelector('.reset')

let seconds = 0;
let interval = null;

start_El.addEventListener('click', start)
stop_El.addEventListener('click', stop)
reset_EL.addEventListener('click', reset)

function timer() {
    seconds++

    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60 

    if (hrs < 10) hrs = '0' + hrs
    if (mins < 10) mins = '0' + mins
    if (secs < 10) secs = '0' + secs

    time_El.innerText = `${hrs}:${mins}:${secs}`
}

timer()

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval)
    interval = null
}

function reset() {
    stop()
    seconds = 0
    time_El.innerText = "00:00:00"
}


// setTimeout(() => {
//     startBtnClick()
// }, 1000)