const btns = document.querySelectorAll(".btn")
const btnsContainer = document.querySelector(".btns")
const telegram = document.querySelector(".modal-telegram");
const instagram = document.querySelector(".modal-instagram")
const youtube = document.querySelector(".modal-youtube")
const facebook = document.querySelector(".modal-facebook")
const closeds = document.querySelectorAll(".closed")
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnsContainer.style.display = "none"
        if (btn.classList.contains("btn-telegram")) {
            telegram.style.display = "flex"
        } else {
            telegram.style.display = "none";
        }
        if (btn.classList.contains("btn-instagram")) {
            instagram.style.display = "flex"
        } else {
            instagram.style.display = "none";
        }
        if (btn.classList.contains("btn-youtube")) {
            youtube.style.display = "flex"
        } else {
            youtube.style.display = "none";
        }
        if (btn.classList.contains("btn-facebook")) {
            facebook.style.display = "flex"
        } else {
            facebook.style.display = "none";
        }
        
    })
})

closeds.forEach((closed) => {
    closed.addEventListener("click", () => {
        btnsContainer.style.display = "flex"
        closed.parentElement.style.display = "none"
    })
})