import "./App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="App">
      <header className={darkMode ? "AppDarkMode" : "App"}>
        <h1>Hola React Hooks</h1>
        <Header onClick={() => setDarkMode(!darkMode)} darkmode={darkMode} />
        <Characters />
      </header>
    </div>
  );
}

export default App;
