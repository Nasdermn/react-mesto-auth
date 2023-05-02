import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({headerEmail, onExit, isMenuOpen, onToggleMenu}) {
  const path=useLocation();
  return (
    <header className="header">
      {path.pathname == '/' &&
        <div className={`header__menu ${isMenuOpen ? 'header__menu_opened' : ''}`}>
          <p className='header__email'>{headerEmail}</p>
          <Link to='/signin' onClick={onExit} className='header__link header__link_gray'>Выйти</Link>
        </div>
      }
      
      <div className='header__container'>
        <img
          src={logo}
          alt="Проект Место"
          className="header__logo"
        />

        {path.pathname == '/' &&
          <>
            <div className='header__wrapper'>
              <p className='header__email'>{headerEmail}</p>
              <Link to='/signin' onClick={onExit} className='header__link header__link_gray'>Выйти</Link>
            </div>
            <button className={`${isMenuOpen ? 'header__close-button' : 'header__burger-button'}` } onClick={onToggleMenu}></button>
          </>
        }

        {path.pathname == '/signin' &&
          <div className='header__nav'>
            <Link to='/signup' className='header__link'>Регистрация</Link>
          </div>
        }

        {path.pathname == '/signup' &&
          <div className='header__nav'>
            <Link to='/signin' className='header__link'>Войти</Link>
          </div>
        }
      </div>
    </header>
  );
}

export default Header;
