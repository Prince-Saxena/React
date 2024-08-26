import React from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index.js";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
	const [theme, setTheme] = useState("light");
	const light = () => {
		setTheme("light");
	};
	const dark = () => {
		setTheme("dark");
	};
	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(theme);
	}, [theme]);
	return (
		<ThemeProvider value={{ theme, light, dark }}>
			<Header />
			<Outlet />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
