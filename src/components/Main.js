import React, { useContext } from "react";
import pencil from "../images/pencil.svg";
import plus from "../images/plus.png";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) {
  const userData = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <button
            className="profile__avatar"
            type="button"
            style={{ backgroundImage: `url(${userData.avatar})` }}
            onClick={() => {
              onEditAvatar(true);
            }}
          >
            <img
              src={pencil}
              alt="Изменить фото"
              className="profile__photochanger"
            />
            <div className="profile__overlay" />
          </button>
          <div className="profile__info">
            <div className="profile__name-edit">
              <h1 className="profile__name">{userData.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={() => {
                  onEditProfile(true);
                }}
              >
                <img
                  src={pencil}
                  alt="Кнопка «Изменить»"
                  className="profile__symbol profile__symbol_pencil"
                />
              </button>
            </div>
            <p className="profile__description">{userData.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => {
            onAddPlace(true);
          }}
        >
          <img
            src={plus}
            alt="Кнопка «Добавить»"
            className="profile__symbol profile__symbol_plus"
          />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            ownerId={card.owner._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
