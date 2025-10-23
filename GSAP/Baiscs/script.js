gsap.fromTo(
  ".text h1",
  {
    // y: 800,
    y: () => window.innerHeight / 2,
    duration: 5,
    color: "orangered",
  },
  {
    y: 0,
    duration: 3,
    delay: 1,
    ease: "steps(12)",
    color: "white",
    stagger: 1,
  }
); // => Tween

// gsap.set(
//   ".text > h1",

//   {
//     y: 400,
//     duration: 3,
//     delay: 1,
//     ease: "bounce.out",
//   }
// ); // => Tween

const container = document.querySelector(".container");

Array.from({ length: 50 }).map((_, i) => {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
});

// This is stagger animation example -> advanced

gsap.to(".box", {
  y: 40,

  duration: 2,
  ease: "power1.inOut",
  scale: 0.1,
  stagger: {
    each: 0.1,
    scale: 0.1,
    from: "center",
    axis: "y",
    yoyo: true,
    repeat: -1,
    grid: "auto",
  },
});
