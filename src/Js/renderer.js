const navbar = document.querySelector('.nav-bar');
const opener = document.querySelector('.nav-bar-opener');
const closer = document.querySelector('.nav-bar-closer');
const buttons_showcase = document.querySelector('.buttons-showcase');
const buttons_container = document.querySelector('.buttons-container'); 
const cards_container = document.querySelector('.Cards_container');
const cards_showcase = document.querySelector('.cards-showcase');
const navvar_buttons = document.querySelector('.nav-bar-button-div');
const allContainers = document.querySelectorAll('.container-container > div');

opener.addEventListener('click', () => {
    navbar.classList.add('active');
    opener.classList.add('inactive');
});
closer.addEventListener('click', () => {
    navbar.classList.remove('active');
    opener.classList.remove('inactive');
});


buttons_showcase.addEventListener('click', () => {
     allContainers.forEach(container => {
        container.classList.add('inactive');
    });
    buttons_container.classList.remove('inactive');
    
});

cards_showcase.addEventListener('click', () => {
    allContainers.forEach(container => {
        container.classList.add('inactive');
    });
    cards_container.classList.remove('inactive');
    
    // add an algorithm to hide all other containers//
});
