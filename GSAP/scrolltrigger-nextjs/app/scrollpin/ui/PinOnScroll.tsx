"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PinOnScroll = () => {
  const container = useRef(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      gsap.to(".container h1", {
        transform: "translateX(-150%)",

        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "+=2000",
          scrub: 3,

          markers: true,
          pin: true,
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div ref={container}>
      <div className="h-screen bg-neutral-200"></div>

      <div className="bg-neutral-900 min-h-screen relative container overflow-x-hidden">
        <h1
          ref={headingRef}
          className="main-heading absolute top-1/2 -translate-y-1/2 font-bold text-9xl transform whitespace-nowrap uppercase p-4"
        >
          We Are The Worlds First Attraction Driven Design Agency for Online Web
          Applications.
        </h1>
      </div>

      <div className="h-screen bg-neutral-200"></div>
    </div>
  );
};

export default PinOnScroll;
