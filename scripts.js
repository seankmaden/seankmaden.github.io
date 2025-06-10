// script.js

document.getElementById("menuButton1").addEventListener("click", function() {
    let menu = document.getElementById("menu1");
    menu.classList.toggle("expanded");
});

document.getElementById("menuButton2").addEventListener("click", function() {
    let menu = document.getElementById("menu2");
    menu.classList.toggle("expanded");
});

document.getElementById("menuButton3").addEventListener("click", function() {
    let menu = document.getElementById("menu3");
    menu.classList.toggle("expanded");
});

document.getElementById("menuButton4").addEventListener("click", function() {
    let menu = document.getElementById("menu4");
    menu.classList.toggle("expanded");
});

function openPage(pageName) {
    closeNav();
    const tabContents = document.getElementsByClassName('tab-content');
    for (const content of tabContents) {
        content.style.display = 'none';
    }

    document.getElementById(pageName).style.display = 'block';
}

// Set the default tab (e.g., 'home')
openPage('home');

function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

// scroll box script, from year in text 2024
document.querySelector('.scrollbox').addEventListener('scroll', function() { console.log('Scrolling...'); });
function openPage(pageName) {
    closeNav();
    const tabContents = document.getElementsByClassName('tab-content');
    for (const content of tabContents) {
        content.style.display = 'none';
    }
    document.getElementById(pageName).style.display = 'block';
}