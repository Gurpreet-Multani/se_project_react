import "../blocks/header.css";
import currentDate from "../utils/date.js";
import HeaderLogo from "../assets/HeaderLogo.svg";
import HeaderPFP from "../assets/HeaderPFP.svg";
import ToggleSwitch from "./ToggleSwitch.jsx";
import { Link } from "react-router-dom";

function Header({ AddItemClick, weatherData }) {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={HeaderLogo} alt="wtwr" />
      </Link>
      <time className="header__datetime">
        {currentDate}, {weatherData.city}
      </time>
      <ToggleSwitch />
      <button className="header__addclothes" onClick={AddItemClick}>
        + Add clothes
      </button>
      <Link to="/profile" className="header__link">
        <p className="header__name">Terrence Tegegne</p>
        <img className="header__img" src={HeaderPFP} alt="PFP" />
      </Link>
    </header>
  );
}
export default Header;
