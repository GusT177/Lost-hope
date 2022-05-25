const header = document.getElementById('header');
const nav = document.getElementById('nav');
const subMenu = document.getElementById('sub-menu');

//Botão Menu
    function toggleMenu(){
        header.classList.toggle('active');
    }

    nav.addEventListener('click', toggleMenu);