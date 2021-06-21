// header scroll 
const header = document.querySelector('header');
const plusBtn = document.querySelector('#plusBtn');

let plusClassNameEnter = plusBtn.classList.contains('mouseEnter');
let plusClassNameWheel = plusBtn.classList.contains('mouseLeave');

function transHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('trans');
    } else {
        header.classList.remove('trans');
    } 
}

function plusGone() {
    if (plusClassNameEnter === true) {
        plusBtn.classList.remove('mouseEnter');
        plusBtn.classList.add('mouseLeave');
    } else {
        plusBtn.classList.add('mouseEnter');
        plusBtn.classList.remove('mouseLeave');
    }
}

function plusWheel() {
    if (plusClassNameWheel === true) {
        plusBtn.classList.remove('mouseLeave');
        plusBtn.classList.remove('mouseEnter');
    } else {
        plusBtn.classList.add('mouseLeave');
        plusBtn.classList.remove('mouseEnter');
    }
    
}

window.addEventListener('scroll', transHeader);
plusBtn.addEventListener('mouseenter', plusGone);
plusBtn.addEventListener('mouseleave', plusWheel);

