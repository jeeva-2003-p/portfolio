let menuIcon = document.querySelector('#menu_icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    navbar.classList.toggle('active');
}