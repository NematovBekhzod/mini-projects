const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minute");
const sekunds = document.querySelector("#second");
const convention = document.querySelector("#convention");

setInterval(timeupdate, 1000);

function timeupdate() {
  const time = new Date();
  let hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  if (hour > 11) {
      hour = hour - 12;
      convention.innerHTML = `<h1>PM</h1>`
  } else convention.innerHTML = `<h1>AM</h1>`;


  if (hour.toString().length < 2) {
    hours.innerHTML = `<h1>0${hour}</h1>`;
  } else {
    hours.innerHTML = `<h1>${hour}</h1>`;
  }
  if (minute.toString().length < 2) {
    minutes.innerHTML = `<h1>0${time.getMinutes()}</h1>`;
  } else {
    minutes.innerHTML = `<h1>${time.getMinutes()}</h1>`;
  }
  if (second.toString().length < 2) {
    sekunds.innerHTML = `<h1>0${time.getSeconds()}</h1>`;
  } else {
    sekunds.innerHTML = `<h1>${time.getSeconds()}</h1>`;
  }
}
