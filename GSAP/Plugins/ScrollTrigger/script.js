gsap.registerPlugin(ScrollTrigger);

// gsap.to(".b", {
//   scrollTrigger: {
//     trigger: ".b",

//     start: "top center",

//     toggleActions: "restart pause resume play",
//   },
//   x: 200,

//   duration: 2,
//   rotation: 360,
// });

//This animation is applied on the Box with class c when I scroll to that box

//Adding ScrollTrigger to a Timeline

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "top center",

    // markers: true,
  },
});

tl.to(".a", {
  x: 200,
  duration: 2,
  rotation: 360,
});

tl.to(".b", {
  x: 200,
  duration: 2,
  rotation: 360,
});

tl.to(".c", {
  x: 200,
  duration: 2,
  rotation: 360,
});
