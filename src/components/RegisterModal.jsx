import "../blocks/RegisterLog.css";
import Union from "../assets/Union.svg";
import { useForm } from "../blocks/hooks/useForm";

function RegisterModal({ isOpen, onClose, onRegister, onLoginModal }) {
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values, handleReset);
  };

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <form className="modal__container" onSubmit={handleSubmit}>
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <img src={Union} alt="X" />
        </button>
        <p className="modal__title">Sign up</p>
        <div className="modal__form">
          <p className="modal__form-title">Email</p>
          <input
            className="modal__form-name"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__form2">
          <p className="modal__form-title2">Password</p>
          <input
            className="modal__form-image"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__form">
          <p className="modal__form-title">Name</p>
          <input
            className="modal__form-name"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__form2">
          <p className="modal__form-title2">Avatar URL</p>
          <input
            className="modal__form-image"
            type="url"
            placeholder="Avatar URL"
            name="avatar"
            value={values.avatar}
            onChange={handleChange}
          />
        </div>
        <div className="modal__form3">
          <div className="modal__radio-group1">
            <button type="submit" className="modal__submit-btn1">
              Next
            </button>
            <button
              type="button"
              className="modal__submit-btn2"
              onClick={onLoginModal}
            >
              or Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterModal;
