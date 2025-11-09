"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const ImageSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    canvas.width = 1200;
    canvas.height = 540;

    const frameCount = 6;
    const currentFrame = (index) =>
      `/assets/image-sequence/Frame${index + 1}.png`;

    const images = [];
    const airpods = {
      frame: 0,
    };

    // Preload all the images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // Define the render function
    function render() {
      const image = images[airpods.frame];
      if (!image || !image.complete || !context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const canvasAspect = canvas.width / canvas.height;
      const imageAspect = image.width / image.height;

      let renderWidth, renderHeight, xOffset, yOffset;

      // If image is wider than canvas → fit height, crop width
      if (imageAspect > canvasAspect) {
        renderHeight = canvas.height;
        renderWidth = image.width * (canvas.height / image.height);
        xOffset = (canvas.width - renderWidth) / 2;
        yOffset = 0;
      }
      // If image is taller than canvas → fit width, crop height
      else {
        renderWidth = canvas.width;
        renderHeight = image.height * (canvas.width / image.width);
        xOffset = 0;
        yOffset = (canvas.height - renderHeight) / 2;
      }

      context.drawImage(image, xOffset, yOffset, renderWidth, renderHeight);
    }

    // The GSAP scroll-based animation
    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".canvas-container", // Use the trigger from your HTML
        start: "top top", // When the top of the trigger hits the top of the viewport
        end: "+=3500", // Animate over 3500px of scroll
        markers: true,
        pin: ".pin", // Pin the ".pin" element
        scrub: 0.5, // Smooth scrubbing
      },
      onUpdate: render, // Call the render function on every frame update
    });

    // Draw the first frame once it's loaded
    images[0].onload = render;
  }, []);

  return (
    <>
      <div className="pin">
        <div className="canvas-container">
          <canvas id="hero-lightpass" ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default ImageSequence;
