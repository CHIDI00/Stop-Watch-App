const time_El = document.querySelector('.time')


const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', start)

let seconds = 7400;
let interval = null;

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

const time_El = document.querySelector('.time')
const start_El = document.querySelector('.start')
const stop_El = document.querySelector('.stop')

let seconds = 7400;
let interval = null;

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

// function start() {
//     if (interval) {
//         return
//     }
//     interval = setInterval(timer, 1000)
// }



// setTimeout(() => {
//     startBtnClick()
// }, 1000)