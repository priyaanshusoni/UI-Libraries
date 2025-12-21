"use client";

import { useTheme } from "@/theme";
import { useState } from "react";
// Placeholder component for ToggleTheme , you can implement design and functionality as needed
const ToggleTheme = () => {
  const { theme, setTheme, themes } = useTheme();
  return (
    <div className="mx-auto my-5 max-w-4xl rounded-full backdrop-blur-xs p-4 flex justify-between bg-primary text-white dark:bg-neutral-600 ">
      <button className="cursor-pointer" onClick={() => setTheme("light")}>
        Light Mode{" "}
      </button>

      <button className="cursor-pointer" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
    </div>
  );
};

export default ToggleTheme;
