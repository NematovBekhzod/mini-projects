const container = document.querySelector(".container");

setInterval(createSnow, 50);

function createSnow() {
  const snow = document.createElement("i");
  snow.classList.add("fa-brands");
  snow.style.position = "absolute";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = Math.random() * 3 + 3 + "s";
  snow.style.opacity = Math.random();
  snow.style.fontSize = Math.random() * 10 + 15 + "px";

  const logos = ["fa-telegram", "fa-instagram", "fa-facebook", "fa-youtube"];
  let a = random();
  snow.classList.add(logos[a]);

  container.append(snow);

  setTimeout(() => {
    snow.remove();
  }, 4000);
}

function random() {
  return Math.round(Math.random() * 3);
}
