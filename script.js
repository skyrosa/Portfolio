let nav = document.querySelector("#nav");

window.addEventListener("scroll", function () {
    let scroll = window.scroll;

    if (scroll > nav.offsetHeight) {
    nav.classList.add("fixed-nav");
    } else {
    nav.classList.remove("fixed-nav");
    }
});

function scrollToTop() {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    });
}

window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-to-top").style.display = "block";
    } else {
    document.querySelector(".scroll-to-top").style.display = "none";
    }
}

window.onload = function () {

    const images = [
        'portfolio-site/perfil-message.png',
        'portfolio-site/hobbies-message.png',
        'portfolio-site/likes-message.png',
        'portfolio-site/hates-message.png'
    ];

    let actualPosition = 0;
    let $buttonBack = document.querySelector('#buttonBack');
    let $buttonNext = document.querySelector('#buttonNext');
    let $messages = document.querySelector('#messages');

    function nextImage() {
        if(actualPosition >= images.lenght - 1) {
            actualPosition = 0;
        } else {
            actualPosition++;
        }
        renderize();
    }

    function backImage() {
        if(actualPosition <= 0) {
            actualPosition = images.lenght -1;
        } else {
            actualPosition--;
        }
        renderize();
    }

    function renderize() {
        $messages.style.backgroundImage = `url(${images[actualPosition]})`;
    }

    $buttonBack.addEventListener('click', backImage);
    $buttonNext.addEventListener('click', nextImage);

    renderize();

}