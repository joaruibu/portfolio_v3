// ---------------------- Animación títulos ----------------------

var tl1 = new TimelineMax({ onUpdate: updatePercentage });
const controller1 = new ScrollMagic.Controller();

tl1.from(".about__title", 1, { x: "60vw", opacity: 0 });

const scene1 = new ScrollMagic.Scene({
  triggerElement: ".about__title",
  triggerHook: "onCenter",
  duration: "60%",
})

  .setPin(".about__title")
  .setTween(tl1)
  .addTo(controller1);

function updatePercentage() {
  tl1.progress();
}

