import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName({ target }) {
    setName(target.value);
  }

  function handleChangeDescription({ target }) {
    setDescription(target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        type="text"
        className="popup__input popup__input_field_name"
        name="username"
        placeholder="Имя"
        minLength={2}
        maxLength={40}
        required={true}
        onChange={handleChangeName}
        value={name || ""}
      />
      <span className="input-error name-input-error" />
      <input
        id="description-input"
        type="text"
        className="popup__input popup__input_field_description"
        name="description"
        placeholder="Описание"
        minLength={2}
        maxLength={200}
        required={true}
        onChange={handleChangeDescription}
        value={description || ""}
      />
      <span className="input-error description-input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
