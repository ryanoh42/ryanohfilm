// REEL POP UP
const btn = document.querySelector('.reel-btn'); //set constant for the "Watch Reel" button

const videoContainer = document.querySelector('.video-container'); //set constant for the video-container

const close = document.querySelector('.close-video'); //set constant for the "x" button

const vid = document.getElementById("myreel"); //set constant for the video/reel itself


btn.addEventListener('click', () => {   //listens for a click on the "Watch reel" button
    videoContainer.classList.add('show');   //adds the class .show to the video-container
})

close.addEventListener('click', () => { //listens for a click on the "x" button
    videoContainer.classList.remove('show');    //removes the class .show from the video-container
})

function playVid() {    //function to play the reel when it pops up
    setTimeout(function(){ vid.play(); }, 300); //delay playing the video for .3s
}

function pauseVid() {   //function to pause the reel when it closes
    vid.pause();
}



// HAMBURGER MENU
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurger = document.querySelector(".close-burger");

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('hide-burger');
})
closeBurger.addEventListener('click', () => {
    burgerMenu.classList.add('hide-burger');
})
