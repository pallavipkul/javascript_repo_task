 let image= document.querySelectorAll(".slider img");
    let current = 0;

        let select_prev =document.querySelector(".prev")
        select_prev.addEventListener("click", function(){
        image[current].classList.remove("active")
        current=(current-1 + image.length) % image.length;
        image[current].classList.add("active")
    });

        let select_next =document.querySelector(".next")
        select_next.addEventListener("click",function(){
        image[current].classList.remove("active")
        current=(current-1+image.length) % image.length;
        image[current].classList.add("active")
        });