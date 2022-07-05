import React from "react";
import "./SideMenu.css";
// icono hamburger
const menuToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default menuToggleButton;