import logo from "../images/logo.svg";
import { Link, useLocation } from 'react-router-dom';

function Header({headerEmail}) {
  const path=useLocation();
  return (
    <header className="header">
      <img
        src={logo}
        alt="Проект Место"
        className="header__logo"
      />

      {path.pathname == '/' &&
        <div className='header__container'>
          <p className='header__email'>{headerEmail}</p>
          <Link to='/signin' className='header__link header__link_gray'>Выйти</Link>
        </div>
      }

      {path.pathname == '/signin' &&
        <div className='header__container'>
          <Link to='/signup' className='header__link'>Регистрация</Link>
        </div>
      }

      {path.pathname == '/signup' &&
        <div className='header__container'>
          <Link to='/signin' className='header__link'>Войти</Link>
        </div>
      }
    </header>
  );
}

export default Header;
