import { useContext } from "react";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "../components/ItemCard.jsx";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";
import "../blocks/index.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Main({ clothingItems, weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  //Function to see what the weather type is for is it hot or is it cold or warm
  const getWeatherType = (temperature) => {
    if (temperature >= 86) return "hot";
    if (temperature <= 65) return "cold";
    return "warm";
  };

  //saying current temp is equivalent to api weather/real weather
  const currentTemp = weatherData.temp[currentTemperatureUnit];
  //changing the call back function in the weathertype to the currenttemp
  const weatherType = getWeatherType(currentTemp);
  //made variable that filter the clothing item based on the weather type
  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherType
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp?.[currentTemperatureUnit]} °
        {currentTemperatureUnit} / You may want to wear:
      </p>
      <ul className="main__card-list">
        {filteredItems.map((item) => {
          return <ItemCard key={item._id} data={item} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
