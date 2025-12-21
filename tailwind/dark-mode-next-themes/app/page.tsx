import React from "react";
import ToggleTheme from "@/components/theme/ToggleTheme";
const page = () => {
  return (
    <div className="min-h-screen">
      <ToggleTheme />

      <div className="mx-auto my-10 max-w-4xl p-4 dark:text-gray-200 ">
        <h1 className="text-4xl font-bold mb-4">
          Dark Mode with Theme Provider
        </h1>
        <p className="mb-2">
          This is a sample application demonstrating dark mode implementation
          using Next.js and a custom theme provider.
        </p>
        <p className="mb-2">
          Use the buttons above to toggle between light and dark modes. The
          current theme is stored in local storage and applied on page load.
        </p>
        <p className="mb-2">
          The application uses CSS variables for theming, allowing for easy
          customization and extension of themes.
        </p>
      </div>
    </div>
  );
};

export default page;
