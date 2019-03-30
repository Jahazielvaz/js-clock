let currentDate = new Date();
let currentTime = currentDate.getSeconds();

let activeTime = () => {
  return currentTime;
}


console.log(currentTime);
setInterval(() => console.log(`The current time is ${activeTime()}`), 1000);
