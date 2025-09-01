import { useState, useEffect } from "react";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import "../utils/clothingItems.js";
import { defaultClothingItems } from "../utils/clothingItems.js";
import { getWeatherData } from "../utils/weather.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import "../blocks/index.css";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //handleToggleSwithcChange Function
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
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
        <Main clothingItems={clothingItems} weatherData={weatherData} />
        <ModalWithForm
          isOpen={activeModal === "add-item"}
          onClose={handleCloseModal}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
