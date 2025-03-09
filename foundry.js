



var lastScrollTop;
const navbar = document.querySelector('nav');
const menu = document.querySelector(".menu-button")
const menuATendina = document.querySelector(".menu-nascosto-links-fixed")
const fontList = document.querySelector(".font-list-a-tendina")
const backButton = document.querySelector(".back-button")
const fontButton = document.querySelector(".open-font-list")
var hiddenLinks = document.querySelectorAll(".uno-dei-links")
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-50%';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});

menuATendina.classList.add("disappear");

menu.addEventListener("click", () =>{
    if (menuATendina.classList.contains("disappear")){
        menuATendina.classList.remove("disappear");
        menuATendina.classList.add("appear");
        menu.classList.add("undisplay-class");
        backButton.classList.add("display-class")
    }
})

backButton.addEventListener("click", ()=>{
    if(menuATendina.classList.contains("appear")){
        menuATendina.classList.add("disappear");
        menuATendina.classList.remove("appear");
        menu.classList.remove("undisplay-class");
        backButton.classList.remove("display-class")
        fontList.classList.remove("appear")
        fontList.classList.add("disappear")
    }
})

hiddenLinks.forEach(
    function (hiddenLinks) {
        hiddenLinks.addEventListener("click", ()=>{
            if(menuATendina.classList.contains("appear")){
                menuATendina.classList.add("disappear");
                menuATendina.classList.remove("appear");
                menu.classList.remove("undisplay-class");
                backButton.classList.remove("display-class")
                fontList.classList.remove("appear")
                fontList.classList.add("disappear")
            }
        })
    })

fontList.classList.add("disappear")

fontButton.addEventListener("click", ()=>{
    if(fontList.classList.contains("disappear")){
        fontList.classList.add("appear")
        fontList.classList.remove("disappear")
    } else if (fontList.classList.contains("appear")){
        fontList.classList.add("disappear")
        fontList.classList.remove("appear")
    }
})



