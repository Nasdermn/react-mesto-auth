import { Link } from "react-router-dom";
import authApi from "../utils/AuthApi";
function Register({navigate, setUserEmail, onRegister}) {
  function handleUserRegistration(e) {
    e.preventDefault();
    onRegister();
    navigate('/signin');
  }

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleUserRegistration}>
        <input className="auth__input" name="email" type="email" placeholder="Email" required></input>
        <span className="input-error email-input-error" />
        <input className="auth__input" name="password" type="password" placeholder="Пароль" required></input>
        <span className="input-error password-input-error" />
        <button type="submit" className="auth__button">
          Зарегистрироваться
        </button>
      </form>
      <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
    </section>
  )
}
export default Register;