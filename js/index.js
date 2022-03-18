// REEL POP UP
const btn = document.querySelector('.watch-reel-btn');
const reelContainer = document.querySelector('.reel-container');
const close = document.querySelector('.close-video');
const vid = document.querySelector('#myreel');

btn.addEventListener('click', () => {   //listens for a click on the "Watch reel" button
    reelContainer.classList.add('show');   //adds the class .show to the video-container
    close.classList.add('show');
})
close.addEventListener('click', () => { //listens for a click on the "x" button
    reelContainer.classList.remove('show');    //removes the class .show from the video-container
    close.classList.remove('show');
})

// PAUSE REEL WHEN CLOSED
const videoReel = document.querySelector('#video');
// saves the current iframe source
const vidsrc = videoReel.getAttribute('src');
function pauseReel() {
    // sets the source to nothing, stopping the video
    videoReel.setAttribute('src',''); 
    // sets it back to the correct link so that it reloads immediately on the next window open
    videoReel.setAttribute('src', vidsrc);
}

// HAMBURGER MENU
const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.mobile-nav-container');
const closeBurger = document.querySelector('.close-mobile-nav');

burgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('show-mobile-nav');
    closeBurger.classList.add('show');
})
closeBurger.addEventListener('click', () => {
    mobileNav.classList.remove('show-mobile-nav');
    closeBurger.classList.remove('show');
})

function closeMobileNav() {
    mobileNav.classList.remove('show-mobile-nav');
}