import {GoToPage} from "./js/routing.js"

let scrollPos = 0;
let slide = 0;
let leftSlider = document.getElementsByClassName("left-arrow")[0];
let slider = document.getElementsByClassName("slide-content")[0];
let rightSlider = document.getElementsByClassName("right-arrow")[0];
let slideWidth = document.getElementsByClassName("slider")[0].scrollWidth / 2;

window.addEventListener('resize', function(){
    let o = document.getElementsByClassName("slider")[0].scrollWidth / (2 * slideWidth);
    slide *= o;
    slideWidth = document.getElementsByClassName("slider")[0].scrollWidth / 2;
    slider.classList.add('notransition');
    slider.style.transform = 'translateX(' + slide + 'px)';
    slider.offsetHeight;
    slider.classList.remove('notransition');
    
})

rightSlider.addEventListener("click", function(e){
    if (slide <= -1 * slideWidth){
        return;
    }
    slide -= slideWidth;
    
    slider.style.transform = 'translateX(' + slide + 'px)';
})

leftSlider.addEventListener("click", function(e){
    if (slide >= 0){
        return;
    }
    slide += slideWidth;
    
    slider.style.transform = 'translateX(' + slide + 'px)';
})

window.addEventListener("hashchange", GoToPage);