// ---------------------- Animación títulos ----------------------

var tl2 = new TimelineMax({ onUpdate: updatePercentage });
const controller2 = new ScrollMagic.Controller();

tl2.from(".resume__title", 1, { x: "60vw", opacity: 0 });

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".resume__title",
  triggerHook: "onCenter",
  duration: "60%",
})

  .setPin(".resume__title")
  .setTween(tl2)
  .addTo(controller2);

function updatePercentage() {
  tl2.progress();
}

