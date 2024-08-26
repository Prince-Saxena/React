import { useContext, createContext } from "react";

export const ThemeContext = createContext({
	theme: "light",
	light: () => {},
	dark: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
	return useContext(ThemeContext);
}
