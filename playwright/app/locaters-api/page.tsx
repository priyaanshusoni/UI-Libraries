"use client";

import React from "react";
import { Button } from "antd";

const page = () => {
  return (
    <div className="mt-20 max-auto">
      <h1>Understanding Locaters API</h1>

      <h2>Get By Role</h2>

      <Button type="primary" role="button">
        Click Me (Role: button)
      </Button>

      <h2>Locate By Label</h2>
    </div>
  );
};

export default page;
