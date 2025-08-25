import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import "../utils/clothingItems.js";
import { defaultClothingItems } from "../utils/clothingItems.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  //variable = meant to track which modal is currently open
  //function = just to change the status of the variable
  const [activeModal, setActiveModal] = useState("");
  //function to open modal
  function handleOpenAddItemModal() {
    setActiveModal("add-item");
  }
  //function to close modal
  function handleCloseModal() {
    setActiveModal("");
  }

  return (
    <div className="app">
      <Header AddItemClick={handleOpenAddItemModal} />{" "}
      <Main clothingItems={clothingItems} />
      <ModalWithForm
        isOpen={activeModal === "add-item"}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
  );
}

export default App;
