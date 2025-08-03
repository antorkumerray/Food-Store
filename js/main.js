var header = document.getElementById('header');
var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menu-icon');
menuIcon.onclick = () => {
    menu.classList.toggle('menuactive')
}
window.onscroll = () => {
    menu.classList.remove('menuactive');
}

window.addEventListener("scroll", function() {
    header.classList.toggle("headeractive", window.scrollY > 20);
});