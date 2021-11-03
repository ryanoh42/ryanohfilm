// REEL POP UP
const btn = document.querySelector('.reel-btn'); //set constant for the "Watch Reel" button
const videoContainer = document.querySelector('.video-container'); //set constant for the video-container
const close = document.querySelector('.close-video'); //set constant for the "x" button
const vid = document.getElementById("myreel"); //set constant for the video/reel itself




btn.addEventListener('click', () => {   //listens for a click on the "Watch reel" button
    videoContainer.classList.add('show');   //adds the class .show to the video-container
    close.classList.add('show');
})
close.addEventListener('click', () => { //listens for a click on the "x" button
    videoContainer.classList.remove('show');    //removes the class .show from the video-container
    close.classList.remove('show');
})
// function playVid() {    //function to play the reel when it pops up
//     setTimeout(function(){ vid.play(); }, 300); //delay playing the video for .3s
// }
// function pauseVid() {   //function to pause the reel when it closes
//     vid.api("pause");
// }



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

// PAUSE REEL WHEN CLOSED
const videoReel = document.getElementById('video');
// saves the current iframe source
const vidsrc = videoReel.getAttribute('src');
function pauseReel() {
    // sets the source to nothing, stopping the video
    videoReel.setAttribute('src',''); 
    // sets it back to the correct link so that it reloads immediately on the next window open
    videoReel.setAttribute('src', vidsrc);
}
