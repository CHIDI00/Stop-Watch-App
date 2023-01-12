const hourEl = document.getElementById('hour')
const minutesEl = document.getElementById('minute')
const secondsEl = document.getElementById('second')
const milisecondEl = document.getElementById('milisecond')

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', () => {
    timer
})

function startBtnClick() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ms = new Date().getMilliseconds()

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    ms = ms < 10 ? '0' + ms : ms

    hourEl.innerHTML = `${h}:`
    minutesEl.innerHTML = `${m}:`
    secondsEl.innerHTML = `${s}:`
    milisecondEl.innerHTML = `${ms}:`

    timer()
}

function timer() {
    t = setTimeout(startBtnClick, 1000)
}



// setTimeout(() => {
//     startBtnClick()
// }, 1000)