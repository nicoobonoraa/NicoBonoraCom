
var lastScrollTop;
navbar = document.querySelector('.navbar-nuova');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-10%';
}
else{
navbar.style.top='2%';
}
lastScrollTop = scrollTop;
});