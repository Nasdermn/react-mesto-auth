import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value='';
  })

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  } 

  return (
    <PopupWithForm
      title = "Обновить аватар"
      name = "avatar"
      isOpen = {isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-input"
        type="url"
        className="popup__input popup__input_field_avatar"
        name="avatar"
        placeholder="Ссылка на картинку"
        required=""
        ref = {avatarRef}
      />
      <span className="input-error avatar-input-error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;