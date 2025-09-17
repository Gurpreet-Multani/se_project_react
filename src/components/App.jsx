import { useState, useEffect } from "react";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import { getWeatherData } from "../utils/weather.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import "../index.css";
import Profile from "./Profile.jsx";
import SideBar from "./SideBar.jsx";
import "../blocks/Profile.css";
import "../blocks/SideBar.css";
import { Route, Routes } from "react-router-dom";
import { getItems, addItem, removeItem } from "../utils/api.js";

function App() {
  const [clothingItems, setClothingItems] = useState([]);

  //state for adding and closing a modal
  const [activeModal, setActiveModal] = useState("");
  //function to open modal
  function handleOpenAddItemModal() {
    setActiveModal("add-item");
  }
  //function to close modal
  function handleCloseModal() {
    setActiveModal("");
  }

  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  //basically renaming the inital keys

  //calls the api function
  //data represents the .json formate at the ending of the api function
  //we are setting the value of weatherdats with the setWeatherData setter
  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // This useEffect should be here to fetch clothing items
  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // The empty dependency array means it runs once on mount

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //handleToggleSwithcChange Function
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItem = (newItem, resetForm) => {
    addItem(newItem)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
        resetForm();
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
  };

  const handleCardDelete = (card) => {
    // Pass the entire card object to removeItem
    removeItem(card)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== card._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <Header
          AddItemClick={handleOpenAddItemModal}
          weatherData={weatherData}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                clothingItems={clothingItems}
                weatherData={weatherData}
                onClose={handleCloseModal}
                onCardDelete={handleCardDelete}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                AddItemClick={handleOpenAddItemModal}
                onClose={handleCloseModal}
                onCardDelete={handleCardDelete}
              />
            }
          />
        </Routes>
        <ModalWithForm
          isOpen={activeModal === "add-item"}
          onClose={handleCloseModal}
          onAddItem={handleAddItem}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
