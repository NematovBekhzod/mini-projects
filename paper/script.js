const btns = document.querySelectorAll(".fa-solid");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const userIcon = document.querySelector(".user .fa-solid");
const compIcon = document.querySelector(".comp .fa-solid");
const userPoints = document.querySelector("#user-pointer");
const friendPointer = document.querySelector("#friendship-pointer");
const compPointer = document.querySelector("#comp-pointer");

let uPoints = 0;
let fPoints = 0;
let cPoints = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classes = e.target.classList[1];
    console.log();
    user.innerHTML = `<i class="fa-solid ${classes}"></i>`;
    let randomClasses = randomComputer();
    comp.innerHTML = `<i class="fa-solid ${randomClasses}"></i>`;

    if (e.target.classList[1] == randomClasses) {
      fPoints++;
      friendPointer.textContent = fPoints;
    } else if (e.target.classList[1] == "fa-hand-scissors") {
      if (randomClasses == "fa-hand") {
        uPoints++;

      } else {
        cPoints++;
      }
    } else if (e.target.classList[1] == "fa-hand") {
      if (randomClasses == "fa-hand-scissors") {
        cPoints++;
      } else {
        uPoints++;
      }
    } else if (e.target.classList[1] == "fa-hand-back-fist") {
      if (randomClasses == "fa-hand-scissors") {
        uPoints++;
      } else {
        cPoints++;
      }
    }
    userPoints.textContent = uPoints;
    compPointer.textContent = cPoints;

    if (uPoints > cPoints) {
      userPoints.style.color = "green";
      compPointer.style.color = "red";
    } else if (uPoints < cPoints) {
      userPoints.style.color = "red";
      compPointer.style.color = "green";
    } else {
      userPoints.style.color = "green";
      compPointer.style.color = "green";
    }
  });
});

const randomComputer = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return `fa-hand-scissors`;
  if (random === 1) return `fa-hand`;
  if (random === 2) return `fa-hand-back-fist`;
  else return;
};

