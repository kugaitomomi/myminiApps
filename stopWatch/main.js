"use strict";
class StopWatch {
  constructor() {
    this.startButton = document.getElementsByClassName("startButton")[0];
    this.endButton = document.getElementsByClassName("stopButton")[0];
    this.time = document.getElementById("time");
    this.timeHistory = document.getElementById("timeHistory");
    this.music = document.getElementById("myAudio");
    this.startTimer = null;
    this.text = "開始";
  }

  addMessage(text) {
    let p = document.createElement("p");
    p.classList.add("timerHistory");
    let today = new Date();
    let nowTime = `${today.getHours().toString().padStart(2, "0")}時${today
      .getMinutes()
      .toString()
      .padStart(2, "0")}分${today.getSeconds().toString().padStart(2, "0")}秒`;
    p.append(nowTime + text);
    timeHistory.append(p);
  }

  init() {
    this.startButton.addEventListener("click", () => {
      let i = 0;
      if (this.startTimer === null) {
        this.startButton.disabled = true;
        this.text = "開始";
        let seconds = () => {
          if (i === 10) {
            this.music.play();
            clearInterval(this.startTimer);
            let stopMsg = document.createElement("p");
            stopMsg.innerText = "終了します";
            this.time.innerHTML = "";
            this.time.append(stopMsg);
          } else {
            console.log(i);
            i++;
            this.time.innerText = i;
          }
        };
        let count = 1000;
        this.startTimer = setInterval(seconds, count);
        this.addMessage(this.text);
      }
    });

    this.endButton.addEventListener("click", () => {
      this.startButton.disabled = false;
      this.text = "終了";
      this.music.pause();
      this.music.currentTime = 0;
      if (this.startTimer !== null) {
        this.time.innerText = 0;
        clearInterval(this.startTimer);
        this.startTimer = null;
        this.addMessage(this.text);
      }
    });
  }
}

// function stopWatch() {
//   let startButton = document.getElementsByClassName("startButton")[0];
//   let endButton = document.getElementsByClassName("stopButton")[0];
//   let time = document.getElementById("time");
//   let timeHistory = document.getElementById("timeHistory");
//   let music = document.getElementById("myAudio");
//   let startTimer = null;
//   let text = "開始";

//   function addMessage(text) {
//     let p = document.createElement("p");
//     p.classList.add("timerHistory");
//     let today = new Date();
//     let nowTime = `${today.getHours().toString().padStart(2, "0")}時${today
//       .getMinutes()
//       .toString()
//       .padStart(2, "0")}分${today.getSeconds().toString().padStart(2, "0")}秒`;
//     p.append(nowTime + text);
//     timeHistory.append(p);
//   }

//   startButton.addEventListener("click", () => {
//     if (startTimer === null) {
//       startButton.disabled = true;
//       text = "開始";
//       let i = 1;
//       let seconds = () => {
//         if (i === 10) {
//           music.play();
//           clearInterval(startTimer);
//           let stopMsg = document.createElement("p");
//           stopMsg.innerText = "終了します";
//           time.innerHTML = "";
//           time.append(stopMsg);
//         } else {
//           console.log(i);
//           time.innerText = i;
//           i++;
//         }
//       };
//       let count = 1000;
//       startTimer = setInterval(seconds, count);
//       addMessage(text);
//     }
//   });

//   endButton.addEventListener("click", () => {
//     startButton.disabled = false;
//     text = "終了";
//     if (startTimer !== null) {
//       clearInterval(startTimer);
//       startTimer = null;
//       addMessage(text);
//     }
//   });
// }

// stopWatch();
const stopWatch = new StopWatch();
stopWatch.init();

//1. if we push the started button, It starts to count time.
//2. We should display the time on the display.
//3. At the same, we need to display the start time on the historical display.
//4. If we push the ended button, It ends to count time.
//5. At the same, we need to display the end time on the historical display.
