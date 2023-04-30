import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(card) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.ownerId === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like ${isLiked && 'card__like_active'}` 
  );

  function handleClick() {
      card.onCardClick(card);
  }

  function handleLike() {
    card.onCardLike(card);
  }

  function handleDelete() {
    card.onCardDelete(card);
  }

  return (
    <div className="card">
      {isOwn && <button className="card__remove" type="button" onClick={handleDelete}/>}
      <img className="card__picture" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="card__under-picture">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLike}/>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;