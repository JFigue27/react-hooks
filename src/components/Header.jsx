import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import ThemeContext from "../context/ThemeContext";

const Header = (props) => {
  // const [darkMode, setDarkMode] = useState(false);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  const color = useContext(ThemeContext);
  return (
    <div className="Header">
      {/* <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
      <br /> */}
     
      <Button variant="contained" color={color} onClick={props.onClick}>
        {props.darkmode ? "Dark Mode" : "Light Mode"}
      </Button>
      <div style={{ marginBottom: "1rem" }}></div>
    </div>
  );
};

export default Header;
