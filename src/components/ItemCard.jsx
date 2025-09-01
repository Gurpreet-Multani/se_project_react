// ItemCard.jsx
import { useState } from "react";
import ItemModal from "./ItemModal";
import "../blocks/ItemCard.css";

function ItemCard({ data }) {
  const [activateModal, SetActivatedModal] = useState("");

  function AddClassModal() {
    SetActivatedModal("Add-Class");
  }

  function RemoveClassModal() {
    SetActivatedModal("");
  }

  return (
    <div className="card" onClick={AddClassModal}>
      <h2 className="card__title">{data.name}</h2>
      <img src={data.link} alt={data.name} className="card__image" />
      <ItemModal
        AddTheClass={activateModal === "Add-Class"}
        RemoveTheClass={RemoveClassModal}
        data={data}
      />
    </div>
  );
}

export default ItemCard;
