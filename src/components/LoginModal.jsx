import "../blocks/RegisterLog.css";
import Union from "../assets/Union.svg";
import { useForm } from "../blocks/hooks/useForm";

function LoginModal({ isOpen, onClose, onLogin, onRegisterModal }) {
  const { values, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    handleReset();
  };

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <form className="modal__container" onSubmit={handleSubmit}>
        <button className="modal__close-btn" type="button" onClick={onClose}>
          <img src={Union} alt="X" />
        </button>
        <p className="modal__title">Log in</p>
        <div className="modal__form">
          <p className="modal__form-title">Email</p>
          <input
            className="modal__form-name"
            type="email"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="modal__form2">
          <p className="modal__form-title2">Password</p>
          <input
            className="modal__form-image"
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="modal__form3">
          <div className="modal__radio-group1">
            <button type="submit" className="modal__submit-btn1">
              Log in
            </button>
            <button
              type="button"
              className="modal__submit-btn2"
              onClick={onRegisterModal}
            >
              or Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
