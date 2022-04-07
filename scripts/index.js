const editProfile = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup');
const editCloseBtn = document.querySelector('.popup__close');

function toggleEditWindow() {
  editWindow.classList.toggle('popup_opened');
}

function closeEditWindow() {
  editWindow.classList.remove('popup_opened');
}

function onOverLayClick(event) {
  if (event.target === event.currentTarget) {
    toggleEditWindow()
  }
}

editProfile.addEventListener('click', toggleEditWindow);
editCloseBtn.addEventListener('click', toggleEditWindow);
editWindow.addEventListener('click', onOverLayClick);

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__text_name'); 
let jobInput = formElement.querySelector('.popup__text_job');

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let name = document.querySelector('.profile__title')
  let job = document.querySelector('.profile__subtitle')
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  toggleEditWindow()
 }

 formElement.addEventListener('submit', formSubmitHandler);
