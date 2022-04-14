const editProfile = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup');
const editCloseBtn = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__text_type_name'); 
let jobInput = formElement.querySelector('.popup__text_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function toggleEditWindow() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editWindow.classList.toggle('popup_opened');
}

function closeEditWindow() {
  editWindow.classList.remove('popup_opened');
}

function onOverLayClick(event) {
  if (event.target === document.querySelector('.popup__content')) {  
    toggleEditWindow()
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleEditWindow();
 }

formElement.addEventListener('submit', formSubmitHandler);
editProfile.addEventListener('click', toggleEditWindow);
editCloseBtn.addEventListener('click', toggleEditWindow);
editWindow.addEventListener('click', onOverLayClick);