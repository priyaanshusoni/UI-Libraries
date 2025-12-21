import * as React from "react";

type dataAttribute = `data-${string}`;

export type Attribute = "class" | dataAttribute;

export type validThemes = "light" | "dark";

interface ScriptProps
  extends React.DetailedHTMLProps<
    React.ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  > {
  [dataAttribute: dataAttribute]: any;
}

export interface UseThemeProps {
  /** List of all available theme names */
  themes: string[];
  /** Update the theme */
  //   setTheme: React.Dispatch<React.SetStateAction<string>>;
  setTheme: (theme: validThemes) => void;
  /** Active theme name */
  theme?: validThemes | undefined;
}

export interface ThemeProviderProps extends React.PropsWithChildren<unknown> {
  /** Forced theme name for the current page */
  disableTransitionOnChange?: boolean | undefined;
  /** Key used to store theme setting in localStorage */
  storageKey?: string | undefined;
  /** Default theme name . If `enableSystem` is false, the default theme is light */
  defaultTheme?: validThemes;
  /** HTML attribute modified based on the active theme. Accepts `class`, `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.), or an array which could include both */
  attribute?: Attribute | Attribute[] | undefined;

  nonce?: string;
  /** Props to pass the inline script */
  scriptProps?: ScriptProps;
}
