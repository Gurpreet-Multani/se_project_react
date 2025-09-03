import "../blocks/ToggleSwitch.css";
import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="Toggle__container">
      <input
        className="Toggle__input"
        type="checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <span className="Toggle__fahrenheit-label">F</span>
      <span className="Toggle__celsius-label">C</span>
    </div>
  );
}

export default ToggleSwitch;
