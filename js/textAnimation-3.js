// ---------------------- Animación títulos ----------------------

var tl2 = new TimelineMax({ onUpdate: updatePercentage });
const controller2 = new ScrollMagic.Controller();


tl2.from(".contact__title", 1, { x: "30vw", opacity: 0 });



const scene2 = new ScrollMagic.Scene({
    triggerElement: ".contact__title",
    triggerHook: "onCenter",
    duration: "50%",

})  
    
  .setPin(".contact__title")
  .setTween(tl2)
    .addTo(controller2);
  

    function updatePercentage(){
        tl2.progress();
    }
    
