function renderPomodoro() {
  let pomodoroHTML = '';
  pomodoroHTML += `
  <h1>Pomodoro Timer</h1>
    <div class="timer-display">
      <span id="minutes" class = "js-minutes">25</span>
      <span>:</span>
      <span id="seconds" class = "js-seconds">00</span>
    </div>
    <div class="controls">
      <button id="start-button" class = "js-start-button">Start</button>
      <button id="stop-button" class = "js-stop-button">Stop</button>
    </div>
  `;
  return pomodoroHTML;
}

document.querySelector('.js-container')
    .innerHTML = renderPomodoro();

let isTimerRunning = false;
let intervalId;
let intervalId2;
document.querySelector('.js-start-button')
    .addEventListener('click', () => {
      if (!isTimerRunning) {
        countDownMinutes();
        countDownSeconds();
        isTimerRunning = true;
  }
});

document.querySelector('.js-stop-button')
    .addEventListener('click', () => {
      if (isTimerRunning) { 
        isTimerRunning = false;     
        clearInterval(intervalId2);
        clearInterval(intervalId);   
  }
  
});

      function countDownMinutes() {
      let minutes = parseInt(document.querySelector('.js-minutes').innerHTML, 10); 
    
      if (minutes === 25) {
          intervalId = setInterval(() => {
          minutes--;
          document.querySelector('.js-minutes').textContent = minutes; 
    
          if (minutes === 0) {
            clearInterval(intervalId);
           
          }

        }, 60000); 
        return minutes;
      }
    }

    
      function countDownSeconds() {
      let minutes = parseInt(document.querySelector('.js-minutes').innerHTML, 10);
      let seconds = parseInt(document.querySelector('.js-seconds').innerHTML, 10);
      while(minutes !== 0) {
      seconds = 59;
      document.querySelector('.js-seconds').textContent = seconds; 
           intervalId = setInterval(() => { 
           seconds--;
           document.querySelector('.js-seconds').textContent =seconds; 
     
           if (seconds === 0) {
             clearInterval(intervalId);
             seconds = 59;
             document.querySelector('.js-seconds').textContent = seconds;
             if(seconds === 59) {
                  intervalId2 = setInterval(()=>{
                  seconds--;
                  document.querySelector('.js-seconds').textContent = seconds;
          if (seconds === 0) {
            clearInterval(intervalId2);
            countDownSeconds();
          }
              } 
              , 1000); 
             }
            return seconds;
             }
            }, 1000);
            return seconds;
           } 
         } 

     
        