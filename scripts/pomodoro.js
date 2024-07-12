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
      <button id="stop-button" disabled class = "js-stop-button">Stop</button>
    </div>
  `;
  return pomodoroHTML;
}
document.querySelector('.js-container')
    .innerHTML = renderPomodoro();

document.querySelector('.js-start-button')
    .addEventListener('click',()=>{
     document.querySelector('.js-minutes').innerHTML = countDownMinutes();
    });

    function countDownMinutes() {
      let minutes = parseInt(document.querySelector('.js-minutes').innerHTML, 10); 
    
      if (minutes === 25) {
        const intervalId = setInterval(() => {
          minutes--;
          document.querySelector('.js-minutes').textContent = minutes; 
    
          if (minutes === 0) {
            clearInterval(intervalId);
           
          }
        }, 60000); 
        return minutes;
      }
    }