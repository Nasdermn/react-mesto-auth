// import kotlinImage from '../images/kotlin.png';
// export const initialCards = [
//   {
//     name: 'Долина гейзеров. Камчатка',
//     link: 'https://www.eurolux-rostov.ru/wp-content/uploads/2020/07/84114.jpeg' 
//   },
//   {
//     name: 'Хибины',
//     link: 'https://sportishka.com/uploads/posts/2022-11/1667576128_34-sportishka-com-p-ozero-goltsovoe-khibini-krasivo-35.jpg'
//   },
//   {
//     name: 'Котлин',
//     link: kotlinImage
//   },
//   {
//     name: 'Мамаев Курган',
//     link: 'https://images.unsplash.com/photo-1588424157150-fb13a23a2101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

export const elements = document.querySelector('.elements');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar');
export const buttonDelete = document.querySelector('.popup__button_type_delete');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  inactiveButtonSelector: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'input-error_active',
};