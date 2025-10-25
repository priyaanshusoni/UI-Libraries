//Timelines are the key to creating easily adjustable, resilient sequences of animations. When you add tweens to a timeline, by default they'll play one-after-another in the order they were added.

const container = document.querySelector(".container");

Array.from({ length: 10 }).map((_, index) => {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
});

Array.from({ length: 10 }).map((_, index) => {
  const box = document.createElement("div");
  box.classList.add("box2");
  container.appendChild(box);
});

let tl = gsap.timeline({
  defaults: {
    y: 400,
    duration: 1,

    repeat: -1,
    yoyo: true,
    rotation: 360,
  },
});

tl.to(".box", {}, "+1");
tl.fromTo(
  ".box2",
  {
    y: 300,
  },
  {
    y: 0,
    duration: 1,
  }
);
