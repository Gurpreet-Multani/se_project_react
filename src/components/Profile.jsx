// Profile.jsx
import SideBar from "./SideBar.jsx";
import ClothesSection from "./ClothesSection.jsx";
import "../blocks/Profile.css";
import { useState } from "react";
import ItemModal from "./ItemModal.jsx";

function Profile({ clothingItems, AddItemClick, onCardDelete, onClose }) {
  // Add onClose here
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="Profile-ROW">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        AddItemClick={AddItemClick}
        onCardClick={handleCardClick}
        onCardDelete={onCardDelete}
        onClose={onClose} // Pass the onClose prop down
      />
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
