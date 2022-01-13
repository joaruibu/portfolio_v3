// ---------------------- Animación títulos ----------------------

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.work__title',
        end: '+=100 ',
        scrub: 3,
    }
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about__title',
        end: '+=100 ',
        scrub: 3,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact__title',
        end: '+=100 ',
        scrub: 3,
    }
})


tl.from('.work__title', { x: '50vw', duration: 2 })
tl1.from('.about__title', { x: '50vw', duration: 2 })
tl2.from('.contact__title', { x: '50vw', duration: 2 })


// ---------------------- Animación hover proyectos ----------------------


let mouseCursor = document.querySelector('.cursor');
let linkHover   = document.querySelectorAll('a, button');
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
        console.log('aqkj')
    };

    const onMouseEnter = () => {
        mouseCursor.classList.remove('hidden')
    }
    
    
    addEventListeners()
    
    
    linkHover.forEach(link => {
        
        link.addEventListener('mouseover', () => {
            if (link.className !== 'project__view') {
                mouseCursor.classList.add('cursor-scaleSmall')
            } else {
                mouseCursor.classList.add('cursor-scaleBig');
                mouseText.classList.add('visibility')
            }
        })
        
        link.addEventListener('mouseleave', () => {
            if (link.className !== 'project__view') {
                mouseCursor.classList.remove('cursor-scaleSmall')
            } else {
                mouseCursor.classList.remove('cursor-scaleBig');
                mouseText.classList.remove('visibility')
            }
        })
    })
    

    
    
}