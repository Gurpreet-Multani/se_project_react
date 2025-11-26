import "../blocks/header.css";
import currentDate from "../utils/date.js";
import HeaderLogo from "../assets/HeaderLogo.svg";
import HeaderPFP from "../assets/HeaderPFP.svg";
import ToggleSwitch from "./ToggleSwitch.jsx";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Header({
  onRegisterModal,
  onLoginModal,
  isLoggedIn,
  weatherData,
  onAddItem,
  onToggleSideBar,
}) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const showAvatar = currentUser && currentUser.avatar;

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={HeaderLogo} alt="wtwr" />
      </Link>
      <time className="header__datetime">
        {currentDate}, {weatherData?.city}
      </time>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button className="header__addclothes" onClick={onAddItem}>
            + Add clothes
          </button>
          <Link
            to="/profile"
            className="header__link"
            onClick={onToggleSideBar}
          >
            <p className="header__name">{currentUser?.name}</p>
            {showAvatar ? (
              <img
                className="header__img"
                src={currentUser.avatar}
                alt="User Avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {currentUser?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </Link>
        </>
      ) : (
        <>
          <div className="header__Container-btn">
            <button className="header__auth-btn" onClick={onRegisterModal}>
              Sign Up
            </button>
            <button className="header__auth-btn" onClick={onLoginModal}>
              Log In
            </button>
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
