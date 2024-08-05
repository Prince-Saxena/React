import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const lightmode = () => {
    setTheme("light");
  };
  const darkmode = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <>
      <ThemeProvider value={{ theme, lightmode, darkmode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn></ThemeBtn>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card></Card>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
