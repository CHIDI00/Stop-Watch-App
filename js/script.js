const hourEl = document.getElementById('watch-container hour')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
// const milisecondEl = document.getElementById('milisecond')

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', start)

let seconds = 3800;
let interval = null;

function startBtnClick() {
    seconds ++

    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60

    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    hourEl.innerText = `${hrs}:${mins}:${secs}`
    // minutesEl.innerText = ``
    // secondsEl.innerText = `:`
    // milisecondEl.innerHTML = `${ms}:`
}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}



// setTimeout(() => {
//     startBtnClick()
// }, 1000)