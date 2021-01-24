import { TweenMax, Power3, Back, gsap, ScrollTrigger } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function animate(gsapTxt) {
  TweenMax.from(gsapTxt, {
    duration: 2,
    y: 80,
    ease: Back.easeOut,
    opacity: 0,
    delay: 1
  });
}

function linkAnimate(node1, node2, node3) {
  TweenMax.from([node1, node2, node3], {
    duration: 1,
    y: 60,
    ease: Power3,
    opacity: 0,
    delay: 2,
    stagger: {
      amount: 0.6
    }
  });
}

export { animate, linkAnimate };
