function PopupWithForm({title, name, children, buttonText, isOpen, onClose, onSubmit}) {
  //закрытие по оверлею
  function handleClickClose(e) {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  }

  return (
  <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`} onClick={handleClickClose}>
    <div className="popup__container">
      <button className="popup__cross" type="button" onClick={onClose}/>
      <p className="popup__title">{title}</p>
      <form className="popup__form" name={`${name}`} noValidate="" onSubmit={onSubmit}>
        {children}
        <button type="submit" className="popup__button">
          {buttonText || 'Сохранить'}
        </button>
      </form>
    </div>
  </div>
  )
}

export default PopupWithForm;