let currentDate = new Date();
let currentTime = currentDate.getSeconds();

let secondsHand = document.getElementById('seconds-hand');

let secondsRotation = (num) => {
  secondsHand += secondsHand.style["transform"] = `rotate(${num}deg)`;
  // secondsHand += secondsHand.style["transform-origin"] = "right";
}

secondsRotation(50);
