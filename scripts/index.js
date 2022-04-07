const editProfile = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup');
const editCloseBtn = document.querySelector('.popup__close');

function toggleEditWindow() {
  editWindow.classList.toggle('popup_is-active');
}

function closeEditWindow() {
  editWindow.classList.remove('popup_is-active');
}

function onOverLayClick(event) {
  if (event.target === event.currentTarget) {
    toggleEditWindow()
  }
}

editProfile.addEventListener('click', toggleEditWindow);
editCloseBtn.addEventListener('click', toggleEditWindow);
editWindow.addEventListener('click', onOverLayClick);