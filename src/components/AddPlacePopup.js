import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddCard}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

useEffect(() => {
  setName('');
  setLink('');
}, [isOpen]);

  function handleChangeName({ target }) {
    setName(target.value);
  }

  function handleChangeLink({ target }) {
    setLink(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    onAddCard({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title = "Новое место"
      name = "add"
      buttonText="Создать"
      isOpen = {isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
          id = "place-input"
          type = "text"
          className = "popup__input popup__input_field_place"
          name = "name"
          placeholder = "Название"
          minLength = {2}
          maxLength = {30}
          required = ""
          value = {name}
          onChange = {handleChangeName}
        />
        <span className="input-error place-input-error" />
        <input
          id = "link-input"
          type = "url"
          className = "popup__input popup__input_field_link"
          name = "link"
          placeholder = "Ссылка на картинку"
          required = ""
          value = {link}
          onChange = {handleChangeLink}
        />
        <span className="input-error link-input-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;