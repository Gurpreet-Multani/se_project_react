import React, { useContext, useEffect } from "react";
import "../blocks/RegisterLog.css";
import Union from "../assets/Union.svg";
import { useForm } from "../blocks/hooks/useForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ChangeProfile({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, handleReset } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (currentUser) {
      handleReset({ name: currentUser.name, avatar: currentUser.avatar });
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
    handleReset();
  };

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <form className="modal__container" onSubmit={handleSubmit}>
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <img src={Union} alt="X" />
        </button>
        <p className="modal__title">Change profile data</p>
        <div className="modal__form">
          <p className="modal__form-title">Name *</p>
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
          <p className="modal__form-title2">Avatar *</p>
          <input
            className="modal__form-image"
            type="url"
            placeholder="url"
            name="avatar"
            value={values.avatar}
            onChange={handleChange}
          />
        </div>
        <div className="modal__form3">
          <div className="modal__radio-group1">
            <button type="submit" className="modal__submit-btn1">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangeProfile;
