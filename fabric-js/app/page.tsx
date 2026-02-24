"use client";

import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const canvasEle = document.getElementById("myCanvas") as HTMLCanvasElement;

    //defining the kind of drawing environment that we want ?
    const ctx = canvasEle.getContext("2d");

    ctx!.fillStyle = "green";

    //creating a normal rectangle

    ctx?.fillRect(100, 10, 400, 400);
  });
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center gap-10">
      <h1 className="text-center text-3xl">
        A Basic Example of a Canvas Element
      </h1>

      {/* Canvas  */}

      <canvas
        id="myCanvas"
        width={400}
        height={400}
        className="bg-green-50 "
      ></canvas>
    </div>
  );
};

export default page;
