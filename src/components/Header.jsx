import "../blocks/header.css";
import currentDate from "../utils/date.js";
import app from "../components/App.jsx";
import HeaderLogo from "../assets/HeaderLogo.svg";
import HeaderPFP from "../assets/HeaderPFP.svg";

function Header({ AddItemClick }) {
  return (
    <header className="header">
      <img src={HeaderLogo} alt="wtwr" />
      <time className="header__datetime">{currentDate}, New York</time>
      <button
        className="header__addclothes"
        onClick={AddItemClick} // <-- Change made here
      >
        + Add clothes
      </button>
      <p className="header__name">Terrence Tegegne</p>
      <img className="header__img" src={HeaderPFP} alt="PFP" />
    </header>
  );
}

export default Header;
