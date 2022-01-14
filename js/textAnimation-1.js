// ---------------------- Animación títulos ----------------------

var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();


tl.from(".work__title", 1, { x: "30vw", opacity: 0 });



const scene = new ScrollMagic.Scene({
    triggerElement: ".work__title",
    triggerHook: "onCenter",
    duration: "50%",

})  
    
  .setPin(".work__title")
  .setTween(tl)
    .addTo(controller);
  

    function updatePercentage(){
        tl.progress();
    }
    
