let currentDate = new Date();
let currentTime = currentDate.getSeconds();

let seconds = document.getElementsByClassName("second-hand");

let rotation = () => {
  return seconds.style.color = "yellow";
}

rotation();
