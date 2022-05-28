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
if(window.matchMedia("(min-width: 1025px)").matches){

    discord.addEventListener('mouseenter', function(){
        discord.style.width = '100px';
        discord.style.opacity = 1;
        discord.style.marginLeft = '190px';
        discord.style.marginTop = '-12.5px';
    });
        discord.addEventListener('mouseleave', function(){
            discord.style.width = '80px';
            discord.style.opacity = 0.7;
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
            instagram.style.opacity = 0.7;
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
            tiktok.style.opacity = 0.7;
            tiktok.style.marginLeft = '320px';
            tiktok.style.marginTop = '-3px';
        });

}else if(window.matchMedia("(max-width: 1024px)").matches){

    discord.addEventListener('mouseenter', function(){
        discord.style.width = '80px';
        discord.style.opacity = 1;
        discord.style.marginLeft = '195px';
        discord.style.marginTop = '-10px';
    });
        discord.addEventListener('mouseleave', function(){
            discord.style.width = '70px';
            discord.style.opacity = 0.7;
            discord.style.marginLeft = '200px';
            discord.style.marginTop = '0px';
        });

    instagram.addEventListener('mouseenter', function(){
        instagram.style.width = '70px';
        instagram.style.opacity = 1;
        instagram.style.marginLeft = '75px';
        instagram.style.marginTop = '-10px';
    });
        instagram.addEventListener('mouseleave', function(){
            instagram.style.width = '60px';
            instagram.style.opacity = 0.7;
            instagram.style.marginLeft = '80px';
            instagram.style.marginTop = '0px';
        });

    tiktok.addEventListener('mouseenter', function(){
        tiktok.style.width = '80px';
        tiktok.style.opacity = 1;
        tiktok.style.marginLeft = '315px';
        tiktok.style.marginTop = '-10px';
    });
        tiktok.addEventListener('mouseleave', function(){
            tiktok.style.width = '70px';
            tiktok.style.opacity = 0.7;
            tiktok.style.marginLeft = '320px';
            tiktok.style.marginTop = '0px';
        });

}