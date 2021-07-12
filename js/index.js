let lable = document.querySelector("#lable");
let btnStart = document.querySelector("#btnStart");
let btnStop = document.querySelector("#btnStop");
let textBox = document.querySelector("#textBox");
let speed = document.querySelector("#speed");


let index = 0;
let timerId = 0;
let textArr = {};

function start() {
    clearTimeout(timerId);
    index = 0;
    textArr = textBox.value.split(" ");
   // textBox.hidden=true;
    timerId = setInterval(() => {
        if (index == textArr.length) {            
            stop();
            lable.innerText = "Введи текст и нажми Старт"
            return;
        }
        lable.innerText = textArr[index]
        index += 1;
    }, parseInt(speed.value) || 200);
}

function stop() {
    //textBox.hidden=false;
    clearTimeout(timerId)
    
}

