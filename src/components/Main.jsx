import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "../components/ItemCard.jsx";
import "../blocks/Main.css";
import "../blocks/ItemCard.css";

function Main({ clothingItems }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">Today is 75° F / You may want to wear:</p>
      <ul className="main__card-list">
        {clothingItems.map((item) => {
          return <ItemCard key={item._id} data={item} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
