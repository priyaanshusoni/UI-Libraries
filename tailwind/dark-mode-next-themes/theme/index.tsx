// This is the Entry file for the Global Theme Provider Component

"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  memo,
} from "react";
import {
  UseThemeProps,
  ThemeProviderProps,
  Attribute,
  validThemes,
} from "./types";
import { script } from "./script";
const ThemeContext = createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = {
  themes: [],
  setTheme: (_) => {},
};
const defaultThemes = ["light", "dark"];
const isServer = typeof window === "undefined";

// helper functions

const saveToLocalStorage = (storageKey: string, value: string) => {
  try {
    localStorage.setItem(storageKey, value);
  } catch (e) {
    console.warn("Local storage is not available:", e);
  }
};

const getTheme = (key: string, fallback?: string) => {
  if (isServer) return undefined;
  let theme;
  try {
    theme = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }
  return theme || fallback;
};

const disableAnimation = (nonce?: string) => {
  const css = document.createElement("style");
  if (nonce) css.setAttribute("nonce", nonce);
  css.appendChild(
    document.createTextNode(
      `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};

// useTheme hook

export const useTheme = () => {
  return useContext(ThemeContext) ?? defaultContext;
};

// Global Theme Provider

export const ThemeProvider = (props: ThemeProviderProps) => {
  const context = useContext(ThemeContext);

  // Ignore nested context providers, just passthrough children
  if (context) return <>{props.children}</>;
  return <Theme {...props} />;
};

const Theme = ({
  disableTransitionOnChange = true,
  storageKey = "theme",
  defaultTheme = "light",
  attribute = "data-theme",
  children,
  nonce,
  scriptProps,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState(() =>
    getTheme(storageKey, defaultTheme)
  );

  const applyTheme = useCallback(
    (theme: string | undefined) => {
      let resolved = theme;
      if (!resolved) return;

      const enable = disableTransitionOnChange ? disableAnimation(nonce) : null;
      const d = document.documentElement;

      const handleAttribute = (attr: Attribute) => {
        if (attr === "class") {
          d.classList.remove(...defaultThemes);
          if (resolved) d.classList.add(resolved);
        } else if (attr.startsWith("data-")) {
          if (resolved) {
            d.setAttribute(attr, resolved);
          } else {
            d.removeAttribute(attr);
          }
        }
      };

      if (Array.isArray(attribute)) attribute.forEach(handleAttribute);
      else handleAttribute(attribute);

      enable?.();
    },
    [nonce]
  );

  const setTheme = useCallback((value: validThemes) => {
    setThemeState(value);
    saveToLocalStorage(storageKey, value);
  }, []);

  //local storage event handeling

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      if (!e.newValue) {
        setTheme(defaultTheme);
      } else {
        setThemeState(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [setTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const providerValue = useMemo(
    () => ({
      theme: theme as validThemes,
      setTheme,
      themes: defaultThemes,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext value={providerValue}>
      {/* <ThemeScript
        {...{
          storageKey,
          attribute,
          defaultTheme,
          nonce,
          scriptProps,
        }}
      /> */}

      {children}
    </ThemeContext>
  );
};

// export const ThemeScript = memo(
//   ({
//     storageKey,
//     attribute,
//     defaultTheme,
//     nonce,
//     scriptProps,
//   }: Omit<ThemeProviderProps, "children">) => {
//     const scriptArgs = JSON.stringify([
//       attribute,
//       storageKey,
//       defaultTheme,
//     ]).slice(1, -1);

//     return (
//       <script
//         async={true}
//         {...scriptProps}
//         suppressHydrationWarning
//         nonce={typeof window === "undefined" ? nonce : ""}
//         dangerouslySetInnerHTML={{
//           __html: `(${script.toString()})(${scriptArgs})`,
//         }}
//       />
//     );
//   }
// );
