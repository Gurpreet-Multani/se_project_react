// Profile.jsx
import SideBar from "./SideBar.jsx";
import ClothesSection from "./ClothesSection.jsx";
import WeatherCard from "./WeatherCard.jsx";
import "../blocks/Profile.css";
import { useState, useContext } from "react";
import ItemModal from "./ItemModal.jsx";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Profile({
  clothingItems,
  AddItemClick,
  onCardDelete,
  onClose,
  weatherData,
  onLogout,
  user,
  isSideBarOpen,
}) {
  const [selectedCard, setSelectedCard] = useState(null);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const currentTemp = weatherData.temp?.[currentTemperatureUnit];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="Profile-ROW">
      {isSideBarOpen && <SideBar user={user} onLogout={onLogout} />}
      <div>
        <div className="profile__weather-section">
          <WeatherCard weatherData={weatherData} />
          <p className="profile__weather-text">
            Today is {currentTemp}°{currentTemperatureUnit} / You may want to
            wear:
          </p>
        </div>
        {isSideBarOpen && (
          <ClothesSection
            clothingItems={clothingItems}
            AddItemClick={AddItemClick}
            onCardClick={handleCardClick}
            onCardDelete={onCardDelete}
            onClose={onClose}
          />
        )}
      </div>
      {selectedCard && (
        <ItemModal
          AddTheClass={selectedCard !== null}
          RemoveTheClass={handleCloseModal}
          data={selectedCard}
          onCardDelete={onCardDelete}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
export default Profile;
