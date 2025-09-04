import { useContext } from "react";
import WeatherBar from "../assets/WeatherBar.svg";
import "../blocks/weather.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import daySunny from "../assets/day/Sunny.svg";
import dayCloudy from "../assets/day/Cloudy.svg";
import dayRainy from "../assets/day/Rain.svg";

import nightClear from "../assets/night/SunnyNight.svg";
import nightCloudy from "../assets/night/CloudyNight.svg";
import nightRainy from "../assets/night/RainNight.svg";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  //function for Dynamic WeatherCard Image
  //get time of the day basically is it day or night ?
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18 ? "day" : "night";
  };

  const getWeatherCondition = (weatherData) => {
    // Check if weather data exists and has the expected structure
    if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
      return "clear"; // default fallback
    }

    const condition = weatherData.weather[0].main.toLowerCase();

    // Map common weather conditions to your available images
    if (condition.includes("rain") || condition.includes("drizzle")) {
      return "rain";
    } else if (condition.includes("cloud")) {
      return "clouds";
    } else {
      return "clear"; // for clear, sunny, etc.
    }
  };

  //image selection logic here
  const getWeatherImage = (weatherData) => {
    const timeOfDay = getTimeOfDay();
    const condition = getWeatherCondition(weatherData);

    const imageMap = {
      day: {
        clear: daySunny,
        clouds: dayCloudy,
        rain: dayRainy,
      },
      night: {
        clear: nightClear,
        clouds: nightCloudy,
        rain: nightRainy,
      },
    };

    return imageMap[timeOfDay][condition] || daySunny; // fallback
  };

  return (
    <section className="weather-card">
      <img
        src={getWeatherImage(weatherData)}
        alt="Weather condition"
        className="weather-card__image"
      />
      <p className="weather-card__temp">
        {weatherData.temp?.[currentTemperatureUnit]}&deg;{" "}
        {currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
