// ClothesSection.jsx
import "../blocks/ClothesSection.css";
import ItemCard from "../components/ItemCard.jsx";
import { useState } from "react";

function ClothesSection({
  clothingItems,
  AddItemClick,
  onCardDelete,
  onClose,
  onCardClick, // Add onCardClick as a prop
}) {
  return (
    <div>
      <div className="clothes-section">
        <p className="clothes-text">Your items</p>
        <button className="clothes-btn" onClick={AddItemClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            data={item}
            onCardClick={onCardClick} // Pass the prop down
            onCanDelete={onCardDelete}
            onClose={onClose}
          />
        ))}
      </ul>
    </div>
  );
}
export default ClothesSection;
