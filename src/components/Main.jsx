import { useContext, useState } from "react";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "../components/ItemCard.jsx";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";
import "../index.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import ItemModal from "../components/ItemModal.jsx";

function Main({ clothingItems, weatherData, onClose, onCardDelete }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const getWeatherType = (temperature, unit) => {
    if (unit === "F") {
      if (temperature >= 86) {
        return "hot";
      } else if (temperature <= 65) {
        return "cold";
      } else {
        return "warm";
      }
    } else if (unit === "C") {
      if (temperature >= 30) {
        return "hot";
      } else if (temperature <= 18) {
        return "cold";
      } else {
        return "warm";
      }
    }
  };

  const currentTemp = weatherData.temp?.[currentTemperatureUnit];
  const weatherType = getWeatherType(currentTemp, currentTemperatureUnit);
  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherType
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {currentTemp}°{currentTemperatureUnit} / You may want to wear:
      </p>
      <ul className="main__card-list">
        {filteredItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleCardClick}
              onCanDelete={onCardDelete}
              onClose={handleCloseModal}
            />
          );
        })}
      </ul>
      {selectedCard && (
        <ItemModal
          AddTheClass={selectedCard !== null}
          RemoveTheClass={handleCloseModal}
          data={selectedCard}
          onCardDelete={onCardDelete}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}

export default Main;
