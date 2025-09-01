import { useContext } from "react";
import WeatherBar from "../assets/WeatherBar.svg";
import "../blocks/weather.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <img src={WeatherBar} alt="" className="weather-card__image" />
      <p className="weather-card__temp">
        {weatherData.temp?.[currentTemperatureUnit]}&deg;{" "}
        {currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
