
let nav = document.querySelector('#nav');

window.addEventListener('scroll', function(){
    let scroll = window.scroll;

    if (scroll > nav.offsetHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }

})

