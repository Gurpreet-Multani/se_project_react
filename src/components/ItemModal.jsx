// ItemModal.jsx
import "../blocks/ItemModal.css";
import Union from "../assets/Union.svg";

function ItemModal({ AddTheClass, RemoveTheClass, data }) {
  return (
    <div className={`item-modal ${AddTheClass ? "item-modal_is-opened" : ""}`}>
      <div className="item-modal__container">
        <button
          className="item-modal__close-btn"
          onClick={(event) => {
            // This line stops the click event from reaching parent elements
            event.stopPropagation();
            // Now, we can safely call the function to close the modal
            RemoveTheClass();
          }}
        >
          <img src={Union} alt="Close button" />
        </button>
        <img src={data.link} alt={data.name} className="item-modal__image" />
        <p className="item-modal__text"> {data.name} </p>
        <p className="item-modal__text2"> Weather: {data.weather} </p>
      </div>
    </div>
  );
}

export default ItemModal;
