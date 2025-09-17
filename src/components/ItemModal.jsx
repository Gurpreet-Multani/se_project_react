// ItemModal.jsx
import "../blocks/ItemModal.css";
import Union from "../assets/Union.svg";

function ItemModal({
  AddTheClass,
  data,
  onClose,
  onCardDelete,
  RemoveTheClass,
}) {
  const handleDeleteAndClose = () => {
    onCardDelete(data);
    RemoveTheClass();
  };

  return (
    <div className={`item-modal ${AddTheClass ? "item-modal_is-opened" : ""}`}>
      <div className="item-modal__container">
        <button className="item-modal__close-btn" onClick={RemoveTheClass}>
          <img src={Union} alt="Close button" />
        </button>
        <img
          className="item-modal__image"
          src={data.imageUrl}
          alt={data.name}
        />
        <div className="item-modal__header">
          <p className="item-modal__text">{data.name}</p>
          <button
            className="item-modal__delete-btn"
            type="button"
            onClick={handleDeleteAndClose}
          >
            Delete item
          </button>
        </div>
        <p className="item-modal__text2">Weather: {data.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
