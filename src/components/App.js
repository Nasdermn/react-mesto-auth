import {useEffect, useState} from 'react';
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRouteElement from './ProtectedRoute';

import api from '../utils/Api';
import '../index.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

function App() {
  const [loggedIn, setLoggedIn ] = useState(false);
  const [headerEmail, setHeaderEmail] = useState('example@gmail.com');
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isInfoTooltipSuccess, setIsInfoTooltipSuccess] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard;
  const navigate = useNavigate();

  useEffect(() => {
    function handleEscapeClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeClose);
      return () => {
        document.removeEventListener('keydown', handleEscapeClose);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
    .then((res) => {
      //Отрисовка профиля
      setCurrentUser(res[0]);

      //Отрисовка карточек
      setCards(res[1]);
    })
    .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card.id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card.id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card.id);
    setCards(cards.filter(element => element._id != card.id));
  }

  function handleUpdateUser(userData) {
    api.patchProfile(userData.name, userData.about)
     .then(userData => {
      setCurrentUser(userData);
      closeAllPopups();
     })
     .catch(err => console.log(err));
  }

  function handleUpdateAvatar(userData) {
    api.patchAvatar(userData.avatar)
     .then(userData => {
      setCurrentUser(userData);
      closeAllPopups();
     })
     .catch(err => console.log(err));
  }

  function handleAddCard(cardData) {
    api.postCard(cardData.name, cardData.link)
      .then(card => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUserRegistration() {
    setIsInfoTooltipSuccess(true);
    setIsInfoTooltipOpen(true);
  }

  function handleUserAuthorization(email, password) {
    setHeaderEmail(email);
    setLoggedIn(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
    setIsInfoTooltipOpen(false)
  }

  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="body">
        <div className="page">
          <Header
            headerEmail={headerEmail}
          />
          <Routes>
          <Route path='/'
                element={<ProtectedRouteElement
                  element={Main}
                  loggedIn={loggedIn}
                  onEditProfile={setIsEditProfilePopupOpen}
                  onAddPlace={setIsAddPlacePopupOpen}
                  onEditAvatar={setIsEditAvatarPopupOpen}
                  onCardClick = {setSelectedCard}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  cards = {cards}
              />}
            />

            <Route path = '/signup'
              element = {<Register
                navigate = {navigate}
                onRegister={handleUserRegistration}
              />}
            />
           
           <Route path = '/signin'
              element = {<Login
                navigate = {navigate}
                setLoggedIn={setLoggedIn}
                onLogin={handleUserAuthorization}
              />}
            />

            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
          <Footer/>

          <EditProfilePopup
            isOpen = {isEditProfilePopupOpen}
            onClose = {closeAllPopups}
            onUpdateUser={handleUpdateUser}
          >
          </EditProfilePopup>

          <EditAvatarPopup
            isOpen = {isEditAvatarPopupOpen}
            onClose = {closeAllPopups}
            onUpdateAvatar = {handleUpdateAvatar}
          >
          </EditAvatarPopup>

          <AddPlacePopup
            isOpen = {isAddPlacePopupOpen}
            onClose = {closeAllPopups}
            onAddCard={handleAddCard}
          >
          </AddPlacePopup>

          <ImagePopup
            card = {selectedCard}
            onClose={closeAllPopups}
          >
          </ImagePopup>

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            status = {isInfoTooltipSuccess}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;