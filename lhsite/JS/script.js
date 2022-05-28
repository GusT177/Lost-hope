const header = document.getElementById('header');
const nav = document.getElementById('nav');
const subMenu = document.getElementById('sub-menu');
const discord = document.getElementById('discord');
const instagram = document.getElementById('instagram');
const tiktok = document.getElementById('tiktok');

//Botão Menu
    function toggleMenu(){
        header.classList.toggle('active');
    }

    nav.addEventListener('click', toggleMenu);

//Icones Sociais

    discord.addEventListener('mouseenter', function(){
        discord.style.width = '100px';
        discord.style.opacity = 1;
        discord.style.marginLeft = '190px';
        discord.style.marginTop = '-12.5px';
    });
        discord.addEventListener('mouseleave', function(){
            discord.style.width = '80px';
            discord.style.opacity = 0.85;
            discord.style.marginLeft = '200px';
            discord.style.marginTop = '-3px';
        });

    instagram.addEventListener('mouseenter', function(){
        instagram.style.width = '90px';
        instagram.style.opacity = 1;
        instagram.style.marginLeft = '70px';
        instagram.style.marginTop = '-12.5px';
    });
        instagram.addEventListener('mouseleave', function(){
            instagram.style.width = '70px';
            instagram.style.opacity = 0.85;
            instagram.style.marginLeft = '80px';
            instagram.style.marginTop = '-3px';
        });

    tiktok.addEventListener('mouseenter', function(){
        tiktok.style.width = '100px';
        tiktok.style.opacity = 1;
        tiktok.style.marginLeft = '310px';
        tiktok.style.marginTop = '-12.5px';
    });
        tiktok.addEventListener('mouseleave', function(){
            tiktok.style.width = '80px';
            tiktok.style.opacity = 0.85;
            tiktok.style.marginLeft = '320px';
            tiktok.style.marginTop = '-3px';
        });