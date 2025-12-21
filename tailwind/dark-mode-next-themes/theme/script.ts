export const script = (
  attribute: string,
  storageKey: string,
  defaultTheme: string
) => {
  const el = document.documentElement;

  function updateDOM(theme: string) {
    const isClass = attribute === "class";

    if (isClass) {
      // Logic for class="light" or class="dark"
      el.classList.remove("light", "dark"); // Clean up old
      el.classList.add(theme);
    } else {
      // Logic for data-theme="dark"
      el.setAttribute(attribute, theme);
    }
  }

  try {
    const localTheme = localStorage.getItem(storageKey);
    const theme = localTheme || defaultTheme;
    updateDOM(theme);
  } catch (e) {
    // Fail silently
  }
};
