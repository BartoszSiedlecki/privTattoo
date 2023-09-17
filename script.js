const mobileMenu = document.getElementById("mobile-menu");
const exit = document.getElementById("exit");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function(){
    mobileMenu.style.left = 0;
})

exit.addEventListener("click", function(){
    mobileMenu.style.left = "-50%";
})