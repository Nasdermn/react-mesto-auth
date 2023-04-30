function ImagePopup({card, onClose}) {
  //закрытие по оверлею
  function handleClickClose(e) {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  }
  return (
    <div className={`popup popup_type_image ${card.link ? "popup_opened" : ""}`} onClick={handleClickClose}>
      <div className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.name} />
        <button className="popup__cross" type="button" onClick={onClose}/>
        <figcaption className="popup__figcaption">{card.name}</figcaption>
      </div>
    </div>
  )
}

export default ImagePopup;