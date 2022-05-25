const btns = document.querySelectorAll(".fa-star")
const header = document.querySelector("header")

btns.forEach((item) => {
    item.addEventListener("click", newAdd)
    let arr = []
    function newAdd() {
        let count = item.id;
        switch(count) {
            case "1":
                header.innerHTML = '<i class="fa-solid fa-face-angry"></i>'
                break;
            
            case "2":
                header.innerHTML = '<i class="fa-solid fa-face-frown"></i>'
                break;
            
            case "3":
                header.innerHTML = '<i class="fa-solid fa-face-meh"></i>'
                break;
            
            case "4":
                header.innerHTML = '<i class="fa-solid fa-face-grin"></i>'
                break;
            
            case "5":
                header.innerHTML = '<i class="fa-solid fa-face-grin-stars"></i>'
                break;
        }
        arr = [];
        add(count);

        let newArr = [];
        for (let i = count; i < btns.length; i++) {
            newArr.push(btns[i]);
        }
        newArr.forEach((e) => {
            e.classList.remove("fa-solid");
        });
    }
    function add(count) {        
        for(let i = 0; i< count; i++) {
            arr.push(btns[i])
        }
        arr.forEach((e) => {
            e.classList.add("fa-solid")
        })
    }
})
