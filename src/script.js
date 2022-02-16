const timerText = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const breakBtn = document.getElementById('break-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click', startFn);
breakBtn.addEventListener('click', breakFn);
pauseBtn.addEventListener('click', pauseFn);
stopBtn.addEventListener('click', stopFn);

const DEFAULT_TIME = 1500; //25 minutes = 1,500 seconds
const BREAK_TIME = 300; //5 minutes = 300 seconds
let minutes = 24;
let seconds = 60;
let timeString = "";
let start = true;
let paused = false;
let reset = false;

function startFn(){
    startBtn.textContent = "Start";
    paused = false;
    reset = false;
    countdown();
    start = false;
}

function breakFn(){
    console.log("Break");
    timerText.textContent = `${(BREAK_TIME/60)}:00`;
    minutes = 4;
    seconds = 60;
    start = true;
    paused = true;
}

function pauseFn(){
    start = true;
    paused = true;
    reset = false;

}

function stopFn(){
    console.log("Stop");
    start = true;
    paused = true;
    reset = true;
    startBtn.textContent = "Start";
    timerText.textContent = `${(DEFAULT_TIME/60)}:00`;
    minutes = 24;
    seconds = 60;
}


function countdown(){
    if(start){
        const countdownTimer = setInterval(() => {
            if(reset){
                clearInterval(countdownTimer);
                start = true;
                paused = true;
                reset = false;
            }
    
            if(paused){
                clearInterval(countdownTimer);
            } else {
                //countdown seconds
                seconds--;
    
                //if seconds is less than 10, add a '0' to the string
                if(seconds < 10){
                    timerText.textContent = `${minutes}:0${seconds}`;
                } else{
                    timerText.textContent = `${minutes}:${seconds}`;
                }
    
                //once timer runs out, clear the interval
                if(minutes <= 0 && seconds <= 0){
                    clearInterval(countdownTimer);
                    reset = true;
                    alert("Time's up!");
                } else if(seconds <= 0){
                    minutes--; //decrease minutes after 60 seconds
                    seconds = 60;
                }   
            }
            
        }, 1000)
    }
    

}
