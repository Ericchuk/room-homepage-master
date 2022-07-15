let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let nav = document.querySelector(".nav-container");

function open(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
        // console.log("ddd");
    }else{
        nav.style.display = "block";
        // console.log("999");
    }
}

hamburger.addEventListener("click", open);
close.addEventListener("click", open);