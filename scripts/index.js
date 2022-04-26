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

const cardsContainer = document.querySelector('.elements');

function addCardsFirst() {
  const html = initialCards.map(getCards);
  cardsContainer.append(...html);
}

function getCards(pic) {
  const template = document.querySelector('.template').content;
  const cardsItem = template.querySelector('.elements__element').cloneNode(true);
  const img = cardsItem.querySelector('.elements__image');
  img.src = pic.link;
  const title = cardsItem.querySelector('.elements__title');
  title.textContent = pic.name;
  return cardsItem;
}

// Первый попап - Профиль

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileEditWindow = document.querySelector('.popup__profile');
const profileCloseBtn = document.querySelector('.popup__close_type_profile');

let profileFormElement = document.querySelector('.popup__content_edit_profile');
let profileNameInput = profileFormElement.querySelector('.popup__text_type_name'); 
let profileJobInput = profileFormElement.querySelector('.popup__text_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function toggleProfileEditWindow() {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  profileEditWindow.classList.toggle('popup_opened');
}

function closeProfileEditWindow() {
  profileEditWindow.classList.remove('popup_opened');
}

function profileFormSubmitHandler(evt) {
  evt.preventDefault(); 
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  toggleProfileEditWindow();
}

profileFormElement.addEventListener('submit', profileFormSubmitHandler);
profileEditBtn.addEventListener('click', toggleProfileEditWindow);
profileCloseBtn.addEventListener('click', toggleProfileEditWindow);
profileEditWindow.addEventListener('click', profileOnOverLayClick);

function profileOnOverLayClick(event) {
  if (event.target === document.querySelector('.popup__content_edit_profile')) {  
    closeProfileEditWindow();
   }
}

 
// Второй попап - Места
const placeEditBtn = document.querySelector('.profile__add-button');
const placeEditWindow = document.querySelector('.popup__place');
const placeCloseBtn = document.querySelector('.popup__close_type_place');

const placeFormElement = document.querySelector('.popup__content_edit_place');
const placeNameInput = placeFormElement.querySelector('.popup__text_type_place'); 
const placeUrlInput = placeFormElement.querySelector('.popup__text_type_url');

function togglePlaceEditWindow() {
  placeEditWindow.classList.toggle('popup_opened');
}

function closePlaceEditWindow() {
  placeEditWindow.classList.remove('popup_opened');
}

function placeOnOverLayClick(event) {
  if (event.target === document.querySelector('.popup__content_edit_place')) {  
    closePlaceEditWindow();
  }
}

function handleAddCard(evt) {
  evt.preventDefault();
  const cardName = placeNameInput.value;
  const cardUrl = placeUrlInput.value;
  const element = getCards({ name: cardName, link: cardUrl });
  cardsContainer.prepend(element);
  closePlaceEditWindow()
  placeNameInput.value = placeNameInput.textContent;
  placeUrlInput.value = placeUrlInput.textContent;
}


placeFormElement.addEventListener('submit', handleAddCard);
placeEditBtn.addEventListener('click', togglePlaceEditWindow);
placeCloseBtn.addEventListener('click', togglePlaceEditWindow);
placeEditWindow.addEventListener('click', placeOnOverLayClick);

addCardsFirst();