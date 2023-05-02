import {useState} from "react";
import authApi from "../utils/AuthApi";

function Login({navigate, onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUserAuthorization(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <section className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleUserAuthorization}>
        <input className="auth__input" onChange={handleEmailChange} name="email" type="email" placeholder="Email" required></input>
        <span className="input-error email-input-error" />
        <input className="auth__input" onChange={handlePasswordChange} name="password" type="password" placeholder="Пароль" required></input>
        <span className="input-error password-input-error" />
        <button type="submit" className="auth__button">
          Войти
        </button>
      </form>
    </section>
  )
}
export default Login;