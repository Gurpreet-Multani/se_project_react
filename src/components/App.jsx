import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import Profile from "./Profile.jsx";
import ProtectedRoute from "./ProtectedRoute";

import { getWeatherData } from "../utils/weather.js";
import { getItems, addItem, removeItem } from "../utils/api.js";
import * as auth from "../utils/auth.js";

import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import "../index.css";
import "../blocks/Profile.css";
import "../blocks/SideBar.css";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();

  //function to open modal
  function handleOpenAddItemModal() {
    setActiveModal("add-item");
  }
  //function to close modal
  function handleCloseModal() {
    setActiveModal("");
  }

  function handleRegisterModal() {
    setActiveModal("register");
  }

  function handleLoginModal() {
    setActiveModal("login");
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          navigate("/profile");
        })
        .catch((err) => console.error("Token check failed:", err));
    }
  }, [isLoggedIn, navigate]);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleToggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleAddItem = (newItem, resetForm) => {
    const token = localStorage.getItem("jwt");
    addItem(newItem, token)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
        resetForm();
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
  };

  const handleRegister = (values, resetForm) => {
    auth
      .register(values)
      .then(() => {
        handleLogin({ email: values.email, password: values.password });
        resetForm();
      })
      .catch((err) => console.error("Registration failed:", err));
  };

  const handleLogin = (values) => {
    auth
      .login(values)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          handleCloseModal();
        }
      })
      .catch((err) => console.error("Login failed:", err));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  const handleCardDelete = (cardId) => {
    const token = localStorage.getItem("jwt");
    removeItem(cardId, token)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== cardId)
        );
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app">
          <Header
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
            isLoggedIn={isLoggedIn}
            weatherData={weatherData}
            onAddItem={handleOpenAddItemModal}
            onToggleSideBar={handleToggleSideBar}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  isLoggedIn={isLoggedIn}
                  onCardDelete={handleCardDelete}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    onAddItem={handleOpenAddItemModal}
                    onCardClick={handleCardClick}
                    onLogout={handleLogout} // This was already here, which is great!
                    user={currentUser}
                    isSideBarOpen={isSideBarOpen}
                    onCardDelete={handleCardDelete}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />

          <ModalWithForm
            isOpen={activeModal === "add-item"}
            onClose={handleCloseModal}
            onAddItem={handleAddItem}
            buttonText="Add garment"
          />

          {selectedCard && (
            <ItemModal
              isOpen={activeModal === "preview"}
              card={selectedCard}
              onClose={handleCloseModal}
              onCardDelete={handleCardDelete}
              currentUser={currentUser}
            />
          )}

          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={handleCloseModal}
            onRegister={handleRegister}
            onLoginModal={handleLoginModal}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onClose={handleCloseModal}
            onLogin={handleLogin}
            onRegisterModal={handleRegisterModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
