import "../blocks/header.css";
import currentDate from "../utils/date.js";
import HeaderLogo from "../assets/HeaderLogo.svg";
import HeaderPFP from "../assets/HeaderPFP.svg";
import ToggleSwitch from "./ToggleSwitch.jsx";

function Header({ AddItemClick, weatherData }) {
  return (
    <header className="header">
      <img src={HeaderLogo} alt="wtwr" />
      <time className="header__datetime">
        {currentDate}, {weatherData.city}
      </time>
      <ToggleSwitch />
      <button className="header__addclothes" onClick={AddItemClick}>
        + Add clothes
      </button>
      <p className="header__name">Terrence Tegegne</p>
      <img className="header__img" src={HeaderPFP} alt="PFP" />
    </header>
  );
}
export default Header;
