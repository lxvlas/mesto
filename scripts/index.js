const cardsContainer = document.querySelector('.elements');
const template = document.querySelector('.template').content;
const popupImage = document.querySelector('.popup__image-item');
const popupImageTitle = document.querySelector('.popup__image-title');

const profileEditWindow = document.querySelector('.popup_profile');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('.popup__close_type_profile');
const profileFormElement = document.querySelector('.popup__content_edit_profile');
const profileNameInput = profileFormElement.querySelector('.popup__text_type_name'); 
const profileJobInput = profileFormElement.querySelector('.popup__text_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const placeEditWindow = document.querySelector('.popup_place');
const placeEditBtn = document.querySelector('.profile__add-button');
const placeCloseBtn = document.querySelector('.popup__close_type_place');
const placeFormElement = document.querySelector('.popup__content_edit_place');
const placeNameInput = placeFormElement.querySelector('.popup__text_type_place'); 
const placeUrlInput = placeFormElement.querySelector('.popup__text_type_url');

const imageWindow = document.querySelector('.popup_image');
const imageCloseBtn = document.querySelector('.popup__close_type_image');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addCardsFirst() {
  const html = initialCards.map(getCards);
  cardsContainer.append(...html);
}

addCardsFirst();

function getCards(pic) {  
  const cardsItem = template.querySelector('.elements__element').cloneNode(true);
  const deleteBtn = cardsItem.querySelector('.elements__delete-button');
  const likeBtn = cardsItem.querySelector("#like");
  const img = cardsItem.querySelector('.elements__image');
  const title = cardsItem.querySelector('.elements__title');
  img.src = pic.link;
  img.alt = pic.name;
  title.textContent = pic.name;
  deleteBtn.addEventListener("click", deleteCard);
  likeBtn.addEventListener("click", addLike);
  img.addEventListener("click", () => handleInsertCard(pic));
  return cardsItem;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// function togglePopup(popup) {
//   popup.classList.toggle('popup_opened');
// }

function handleInsertCard(el) {
  popupImage.src = el.link;
  popupImageTitle.textContent = el.name;
  popupImage.alt = el.name;
  openPopup(imageWindow);
}

function deleteCard(evt) {
  const item = evt.target.closest(".elements__element");
  item.remove();
}

function addLike(evt) {
  const likeItem = evt.target.closest("#like");
  likeItem.classList.toggle('elements__like-button_active');
 }

function enterProfileInitialValues() {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
}

function handleEditProfile() {
  enterProfileInitialValues();
  openPopup(profileEditWindow);
}

function profileFormSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profileEditWindow);
}

function resetPlaceInput() {
  document.querySelector('.popup__form_type_place').reset();
}

function handleAddCard(evt) {
  evt.preventDefault();
  const cardName = placeNameInput.value;
  const cardUrl = placeUrlInput.value;
  const element = getCards({ name: cardName, link: cardUrl });
  cardsContainer.prepend(element);
  closePopup(placeEditWindow);
  resetPlaceInput();
}

profileEditBtn.addEventListener('click', handleEditProfile);
profileFormElement.addEventListener('submit', profileFormSubmitHandler);
profileCloseBtn.addEventListener('click', () => closePopup(profileEditWindow));

placeEditBtn.addEventListener('click', () => openPopup(placeEditWindow));
placeFormElement.addEventListener('submit', handleAddCard);
placeCloseBtn.addEventListener('click', () => closePopup(placeEditWindow));

imageCloseBtn.addEventListener('click', () => closePopup(imageWindow));