
    // Animación portada.

const mainContainer = document.querySelector('main');
const animation = document.querySelector('.container-animation');

function animationHome() {
    
    gsap.from(".animation__line", { opacity: 1, duration: 1, stagger: 0.1, delay: 0.3 });
    gsap.to(".animation__line", { duration: 1, opacity: 1, delay: 1.3, stagger: 0.1 });
    gsap.to(".container-animation", { duration: 2, opacity: 0, delay: 2 });
    gsap.to(".container-animation", { duration: 2, opacity: 0, display: "none", position: "absolute", delay: 4 });
    gsap.to("main", { duration: 1, opacity: 1, display: `flex`, delay: 4 });

    window.localStorage.setItem("done", true);
}



const done = window.localStorage.getItem("done");

    if (!done) {
        animationHome();

    } else {
        mainContainer.classList.add("mainReady");
        animation.classList.add("animationNone");
    }
