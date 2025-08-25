import "../assets/WeatherBar.svg";
import "../blocks/weather.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img
        src="src\assets\WeatherBar.svg"
        alt=""
        className="weather-card__image"
      />
      <p className="weather-card__temp">75°F</p>
    </section>
  );
}

export default WeatherCard;
