const header = document.getElementById('header');
const nav = document.getElementById('nav');
const subMenu = document.getElementById('sub-menu');
const discord = document.getElementById('discord');
const instagram = document.getElementById('instagram');
const tiktok = document.getElementById('tiktok');
const icones = document.querySelector('.icons');



//Botão Menu
    function toggleMenu(){
        header.classList.toggle('active');
    }

    nav.addEventListener('click', toggleMenu);

//Icones Sociais
    discord.addEventListener('mouseenter', function(){
        discord.style.width = '100px';
        discord.style.opacity = 1;
        discord.style.marginTop = '-2vh';
    });
        discord.addEventListener('mouseleave', function(){
            discord.style.width = '80px';
            discord.style.opacity = 0.7;
            discord.style.marginTop = '0vh';
        });

    instagram.addEventListener('mouseenter', function(){
        instagram.style.width = '90px';
        instagram.style.opacity = 1;
        instagram.style.marginTop = '-2vh';
    });
        instagram.addEventListener('mouseleave', function(){
            instagram.style.width = '70px';
            instagram.style.opacity = 0.7;
            instagram.style.marginTop = '0vh';
        });

    tiktok.addEventListener('mouseenter', function(){
        tiktok.style.width = '100px';
        tiktok.style.opacity = 1;
        tiktok.style.marginTop = '-2vh';
    });
        tiktok.addEventListener('mouseleave', function(){
            tiktok.style.width = '80px';
            tiktok.style.opacity = 0.7;
            tiktok.style.marginTop = '0vh';
        });