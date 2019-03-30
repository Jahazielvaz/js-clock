let currentDate = new Date();
let currentTime = currentDate.getSeconds();

let secondsHand = document.getElementById('seconds-hand');

let secondsRotation = () => {
   return secondsHand.classList.add("seconds-rotation");
}

let tryFunc = () => {
    return setInterval(console.log('Im chillin'), 1000);
}
