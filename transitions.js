let contact_section = document.querySelector('.contact');

window.addEventListener('scroll', () => {
    scale = ((window.scrollY - (window.screen.height*4))/10);
    position = ((window.scrollY - (window.screen.height*5))/3);
    if (position < 50) {
        position = 50;
    }
    yParallax = ((window.scrollY - (window.screen.height*4.8))/1.5);
    contact_section.style.backgroundSize = scale + "%";
    contact_section.style.backgroundPosition = 'center ' + position + "%";
    contact_section.querySelectorAll('*').forEach(contact_element => {
        contact_element.style.transform = "translateY(" + yParallax + 'px)';
    })
})

function easeInOutCubic(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    }

const lenis = new Lenis(wrapper=document.querySelector(".scroll-container"), easing = (t) => easeInOutCubic(), duration=0.5)

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('activated');
    document.querySelector('.menu').classList.toggle('show');
}