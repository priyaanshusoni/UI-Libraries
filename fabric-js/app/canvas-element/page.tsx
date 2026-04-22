"use client";

import React, { useEffect } from "react";

// First of all the canvas api which means the canvas Tag provides two drawing context to use =>
// 1. 2D context
// 2, 3D context

const page = () => {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

    canvas.height = window?.innerHeight - 100;

    canvas.width = window?.innerWidth - 100;

    const ctx = canvas.getContext("2d");

    // Creating a Rectangle

    ctx!.fillStyle = "blue";
    ctx?.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200);
  });
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center gap-10">
      <canvas
        id="myCanvas"
        className="border-2 border-white rounded-xs bg-[#b5a0f9]"
      >
        This text will be print if your device does not support the canvas
        element
      </canvas>
    </div>
  );
};

export default page;
