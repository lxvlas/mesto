const cardsContainer = document.querySelector('.elements');
const template = document.querySelector('.template').content;
const popupImage = document.querySelector('.popup__image-item');
const popupImageTitle = document.querySelector('.popup__image-title');

const profileEditWindow = document.querySelector('.popup_profile');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileFormElement = document.querySelector('.popup__form_edit_profile');
const profileNameInput = profileFormElement.querySelector('.popup__text_type_name'); 
const profileJobInput = profileFormElement.querySelector('.popup__text_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const placeEditWindow = document.querySelector('.popup_place');
const placeEditBtn = document.querySelector('.profile__add-button');
const placeFormElement = document.querySelector('.popup__form_edit_place');
const placeNameInput = placeFormElement.querySelector('.popup__text_type_place'); 
const placeUrlInput = placeFormElement.querySelector('.popup__text_type_url');
const placeSubmitButton = document.querySelector('.popup__button_type_place');

const imageWindow = document.querySelector('.popup_image');

function addCardsFirst() {
  const html = initialCards.map(getCard);
  cardsContainer.append(...html);
}

addCardsFirst();

function getCard(pic) {  
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
  document.addEventListener('keydown', escOverlayClosePopup);
  document.addEventListener('click', escOverlayClosePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', escOverlayClosePopup);
  document.removeEventListener('keydown', escOverlayClosePopup);
}

const escOverlayClosePopup = (evt) => {
  if ((evt.key === 'Escape') || (evt.target.classList.contains('popup__content'))) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

const buttonClosePopup = () => {
  const closeBtns = Array.from(document.querySelectorAll('.popup__close-button'));
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', function () {
      closePopup(this.closest('.popup'))
    });
  });
};

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

function handleAddCard(evt) {
  evt.preventDefault();
  offButtonState(placeSubmitButton, object);
  const cardName = placeNameInput.value;
  const cardUrl = placeUrlInput.value;
  const element = getCard({ name: cardName, link: cardUrl });
  cardsContainer.prepend(element);
  closePopup(placeEditWindow);
  placeFormElement.reset();
}

profileEditBtn.addEventListener('click', handleEditProfile);
profileFormElement.addEventListener('submit', profileFormSubmitHandler);

placeEditBtn.addEventListener('click', () => openPopup(placeEditWindow));
placeFormElement.addEventListener('submit', handleAddCard);

buttonClosePopup();