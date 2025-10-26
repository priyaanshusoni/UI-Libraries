"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComp = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".b", {
        x: 400,
        duration: 2,
        rotation: 360,
        ease: "back.inOut",
        // This is the basic example to trigger the scrollTrigger Plugin on the go
        scrollTrigger: {
          trigger: ".b",
          // There is a toggle actions property which suggest to toggle the animation on diffreent stages of scroll by default this animation runds only on first mount but if you want to re-run it on every scroll or when you scroll out of the viewport or when you want to what you want when you pause while scrolling you can defined these action in the toggleActions key.

          toggleActions: "restart pause play pause",
          markers: true,
          start: "top center",
          scrub: 2,
          // pin: true,
          onUpdate: (self) => {
            console.log(
              "progress:",
              self.progress.toFixed(3),
              "direction:",
              self.direction,
              "velocity",
              self.getVelocity()
            );
          },
        },
      });
    },
    {
      scope: container,
    }
  );
  return (
    <div className="bg-gray-400 min-h-screen text-black" ref={container}>
      <div className="min-h-screen relative ">
        <div className="w-25 h-25 bg-amber-500 absolute top-1/2 left-1/2 rounded-md a  "></div>
      </div>

      <div className="min-h-screen relative">
        <div className="w-25 h-25 bg-amber-500 absolute top-1/2 left-1/2 rounded-md b "></div>
      </div>

      <div className="min-h-screen relative">
        <div className="w-25 h-25 bg-amber-500 absolute top-1/2 left-1/2 rounded-md c "></div>
      </div>
    </div>
  );
};

export default ScrollTriggerComp;
