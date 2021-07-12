let lable = document.querySelector("#lable");
let btnStart = document.querySelector("#btnStart");
let btnStop = document.querySelector("#btnStop");
let btnPause = document.querySelector("#btnPause");
let btnPlay = document.querySelector("#btnPlay");
let textBox = document.querySelector("#textBox");
let speed = document.querySelector("#speed");

btnPause.hidden = true;
btnPlay.hidden = true;
btnStop.hidden = true;

let index = 0;
let timerId = 0;
let textArr = {};

function start() {
    index = 0;

    textArr = textBox.value.split(" ");

    btnStart.hidden = true;
    textBox.hidden = true;

    btnPause.hidden = false;
    btnStop.hidden = false;

    play()
}

function stop() {
    index = 0;
    lable.innerText = "Введи текст и нажми Старт"
    btnStart.hidden = false;
    textBox.hidden = false;

    btnPlay.hidden = true;
    btnPause.hidden = true;

    clearTimeout(timerId)
}

function pause() {
    btnPlay.hidden = false;
    btnPause.hidden = true;
    clearTimeout(timerId)
}

function play() {
    btnPlay.hidden = true;
    btnPause.hidden = false;

    timerId = setInterval(() => {
        if (index == textArr.length) {
            stop();
            return;
        }
        lable.innerText = textArr[index]
        index += 1;
    }, parseInt(speed.value) || 200);
}