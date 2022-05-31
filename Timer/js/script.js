const btnsStart = document.querySelectorAll(".btn");
const startTimer = document.querySelector(".start-timer");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const exit = document.querySelector(".exit");
const time = document.querySelector(".timer");
const start = document.querySelector(".start");

btnsStart.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeActive();
    btn.classList.add("active");
  });
});

function removeActive() {
  for (let i = 0; i < btnsStart.length; i++) {
    btnsStart[i].classList.remove("active");
  }
}

startTimer.addEventListener("click", () => {
  wrapper.style.display = "none";
  container.style.display = "flex";

  for (let i = 0; i < btnsStart.length; i++) {
    if (btnsStart[i].classList.contains("active")) {
      time.children[0].innerText = btnsStart[i].attributes.minute.value;
    }
  }
});

exit.addEventListener("click", () => {
  container.style.display = "none";
  wrapper.style.display = "flex";
});

start.addEventListener("click", () => {
  time.children[0].innerText--;
  time.children[1].innerText = 59;
  const interval = setInterval(() => {
    time.children[1].innerText--;
    if (time.children[1].innerText == 0) {
      time.children[0].innerText--;
      time.children[1].innerText = 59;
    }
    console.log(time.children[0].innerText, time.children[1].innerText);
  }, 200);
//   if (time.children[0].innerText == 0) {
//     if (time.children[1].innerText == 1) {
//       clearInterval(interval);
//     }
//   }
    
    if (true) {
      clearInterval(interval)
  }
});
