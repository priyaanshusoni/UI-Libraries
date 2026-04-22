"use client";

import React from "react";

const page = () => {
  const ws = new WebSocket("wss://echo.websocket.org");

  ws.onopen = () => {
    console.log("WebSocket connection opened");
    ws.send("Hello, WebSocket!");
  };

  ws.onmessage = (event) => {
    console.log("Received message:", event.data);
  };

  return <div></div>;
};

export default page;
