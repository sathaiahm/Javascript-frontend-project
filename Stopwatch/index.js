let displayname = document.getElementById("display");

let elapsedTime = 0;
let isRunning = false;
let timer = null;
let startTime = 0;

function start(){
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(updateDisplay, 10); 
    }
}

function stop(){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime; 
    isRunning = false;
}

function reset(){
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    display.textContent = "00:00:00:00";
}

function updateDisplay() {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor((elapsedTime)/(1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime)/(1000 * 60) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    displayname.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}