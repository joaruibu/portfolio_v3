// ---------------------- Animación títulos ----------------------

var tl3 = new TimelineMax({ onUpdate: updatePercentage });
const controller3 = new ScrollMagic.Controller();

tl3.from(".contact__title", 1, { x: "60vw", opacity: 0 });

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".contact__title",
  triggerHook: "onCenter",
  duration: "60%",

})
  .setPin(".contact__title")
  .setTween(tl3)
  .addTo(controller3);

function updatePercentage() {
  tl3.progress();
}

