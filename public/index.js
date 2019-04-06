// let currentDate = new Date();
// let currentTime = currentDate.getSeconds();
//
let secondsHand = document.getElementById('seconds-hand');
let minutesHand = document.getElementById('minutes-hand');
let hoursHand = document.getElementById('hours-hand');
let display = document.getElementById('display-inner');
// let secondsRotation = (change) => {
//   change = 0;
//    change += 6;
//    // secondsHand += secondsHand.classList.add("seconds-rotation");
//    secondsHand.style.transform = `rotate(${change}deg)`
// }
//
//
//
// let secondsChanger = () => {
//     setInterval(secondsRotation, 1000);
// }
//
// secondsChanger()


let setDate = () => {
  const now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  if(hours > 12){
    hours -= 12
  } else if(hours == 0){
    hours = 12
  }

  let secondsDegrees = (seconds / 60) * 360;
  let minutesDegrees = (minutes / 60) * 360;
  let hoursDegrees = (hours / 12) * 360;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform =  `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(setDate, 1000);
