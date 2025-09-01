import { apikey, coordinates } from "./constants";

export function getWeatherData() {
  return (
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apikey}`
    )
      .then((res) => {
        return res.ok
          ? res.json()
          : Promise.reject(`Error from weather API : ${res.status}`);
      })
      //here data represents the res.json that is a json format
      .then((data) => {
        return WeatherData(data);
      })
  );
}

//function here to turn our json into something we can reference
function WeatherData(data) {
  const parsedData = {};

  parsedData.city = data.name;
  parsedData.temp = {};
  parsedData.temp.F = Math.round(data.main.temp);
  parsedData.temp.C = Math.round(((data.main.temp - 32) * 5) / 9);

  return parsedData;
}
