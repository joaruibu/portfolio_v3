
// ---------------------- Animación move cursor ----------------------


let mouseCursor = document.querySelector('.cursor');
let linksHover = document.querySelectorAll('a');
let mouseText = document.querySelector('.cursor__text')




//Comprobar si es un disp.táctil
function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch) {

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        //Ocultar cursor cuando este fuera del navegador
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseMove = (e) => {
        mouseCursor.style.setProperty('--cursor-x', e.clientX + "px");
        mouseCursor.style.setProperty('--cursor-y', e.clientY + "px");
    };

    const onMouseLeave = () => {
        mouseCursor.classList.add('hidden');
    };

    const onMouseEnter = () => {
        mouseCursor.classList.remove('hidden')
    }


    addEventListeners()

    // Animación hover sobre links

    linksHover.forEach(link => {

        link.addEventListener('mouseover', () => {
            if (link.className !== 'project__view') {
                mouseCursor.classList.add('cursor-scaleSmall');
                console.log('dentro caja pequeña')

            } else {
                mouseCursor.classList.add('cursor-scaleBig');
                mouseText.classList.add('visibility')

            }
        })


        link.addEventListener('mouseleave', () => {
            if (link.className !== 'project__view') {
                mouseCursor.classList.remove('cursor-scaleSmall')
                console.log('fuera caja pequeña')
            } else {
                mouseCursor.classList.remove('cursor-scaleBig');
                mouseText.classList.remove('visibility')
                console.log('fuera caja grande')
            }
        })
    })



}


// ---------------------- Texto email ----------------------
let email = document.querySelector('.email');

email.addEventListener('click', function () {
    email.innerHTML = 'joaquinruizbueno@gmail.com';

})