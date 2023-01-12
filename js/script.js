const hourEl = document.getElementById('hour')
const minutesEl = document.getElementById('minute')
const secondsEl = document.getElementById('second')
const milisecondEl = document.getElementById('milisecond')

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', () => {
    startBtnClick()
})

function startBtnClick() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ms = new Date().getMilliseconds()
}
