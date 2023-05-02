import {useState} from "react";
import { Link } from "react-router-dom";
function Register({onRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUserRegistration(e) {
    e.preventDefault();
    onRegister(email, password);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleUserRegistration}>
        <input className="auth__input" onChange={handleEmailChange} name="email" type="email" placeholder="Email" required></input>
        <span className="input-error email-input-error" />
        <input className="auth__input" onChange={handlePasswordChange} name="password" type="password" placeholder="Пароль" required></input>
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