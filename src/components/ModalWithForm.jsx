import "../blocks/Modal.css";
import Union from "../assets/Union.svg";

function ModalWithForm({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close-btn" onClick={onClose}>
          <img src={Union} alt="X" />
        </button>
        <p className="modal__title">New garment</p>
        <div className="modal__form">
          <p className="modal__form-title">Name</p>
          <input className="modal__form-name" type="text" placeholder="Name" />
        </div>
        <div className="modal__form2">
          <p className="modal__form-title2">Image</p>
          <input
            className="modal__form-image"
            type="url"
            placeholder="Image URL"
          />
        </div>
        <div className="modal__form3">
          <p className="modal__weather-title">Select the weather type:</p>
          <div className="modal__radio-group">
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather-type"
                value="hot"
                defaultChecked
              />
              Hot
            </label>
            <label className="modal__radio-label">
              <input type="radio" name="weather-type" value="warm" />
              Warm
            </label>
            <label className="modal__radio-label">
              <input type="radio" name="weather-type" value="cold" />
              Cold
            </label>
            <button
              type="submit"
              className="modal__submit-btn"
              onClick={onClose}
            >
              Add garment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
