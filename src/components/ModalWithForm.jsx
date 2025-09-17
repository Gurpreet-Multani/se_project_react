import "../blocks/Modal.css";
import Union from "../assets/Union.svg";
import { useForm } from "../blocks/hooks/useForm";

function ModalWithForm({ isOpen, onClose, onAddItem }) {
  const { values, handleChange, handleReset } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Pass the form data to the parent component
    onAddItem(values, handleReset);
  }

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <form className="modal__container" onSubmit={handleSubmit}>
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <img src={Union} alt="X" />
        </button>
        <p className="modal__title">New garment</p>
        <div className="modal__form">
          <p className="modal__form-title">Name</p>
          <input
            className="modal__form-name"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="modal__form2">
          <p className="modal__form-title2">Image</p>
          <input
            className="modal__form-image"
            type="url"
            placeholder="Image URL"
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="modal__form3">
          <p className="modal__weather-title">Select the weather type:</p>
          <div className="modal__radio-group">
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="hot"
                checked={values.weather === "hot"}
                onChange={handleChange}
              />
              Hot
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="Warm"
                checked={values.weather === "Warm"}
                onChange={handleChange}
              />
              Warm
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="Cold"
                checked={values.weather === "Cold"}
                onChange={handleChange}
              />
              Cold
            </label>
            <button type="submit" className="modal__submit-btn">
              Add garment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
