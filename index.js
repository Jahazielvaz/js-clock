// let currentDate = new Date();
// let currentTime = currentDate.getSeconds();
//
// let secondsHand = document.getElementById('seconds-hand');

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
  let secondsDegrees = (seconds / 60) * 360;
  console.log(secondsDegrees)
}

setInterval(setDate, 1000);
