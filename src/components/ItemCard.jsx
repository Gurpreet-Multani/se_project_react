// ItemCard.jsx
import { useState } from "react";
import ItemModal from "./ItemModal";
import "../blocks/ItemCard.css";

function ItemCard({ data, onCardClick, onCanDelete, onClose }) {
  const [activateModal, SetActivatedModal] = useState(""); // <-- Unnecessary state here

  function AddClassModal() {
    SetActivatedModal("Add-Class");
  }

  function RemoveClassModal() {
    SetActivatedModal("");
  }

  return (
    <div className="card" onClick={() => onCardClick(data)}>
      <h2 className="card__title">{data.name}</h2>
      <img src={data.imageUrl} alt={data.name} className="card__image" />
      <ItemModal
        AddTheClass={activateModal === "Add-Class"} // <-- Renders a new modal for each card
        RemoveTheClass={RemoveClassModal}
        data={data}
        onClose={onClose}
        onCanDelete={onCanDelete}
      />
    </div>
  );
}

export default ItemCard;
