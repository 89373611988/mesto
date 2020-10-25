const popup = document.querySelector(".popup"); // попап Редактировать профиль
const popupOpen = document.querySelector(".profile__rectangle"); // кнопка с карандашом
const popupClose = popup.querySelector(".popup__icon-click"); // крестик закрытия формы
const inputName = popup.querySelector(".popup__input_name"); // инпут имя
const inputAboutme = popup.querySelector(".popup__input_aboutme"); // инпут после имени
const title = document.querySelector(".profile__title"); // заколовок
const subtitle = document.querySelector(".profile__subtitle"); // параграф

const popupAddCard = document.querySelector(".profile__cross"); // кнопка  с крестиком
const popupPlusCard = document.querySelector(".plus"); // попап добавления карточки в разметку
const formElement = popup.querySelector(".popup__container"); // форма добавления новой карточки
const popupButton = popup.querySelector(".popup__button"); // кнопка Создать новую карточку
const popupCloseCard = document.querySelector(".popup__icon-click_plus"); // крестик закрытия формы добавления карточки


// ---------------------------------------------------------------------------------------------------------------------------- popup формы редактировние профиля

const popupToggle = (e) => {
  popup.classList.toggle("popup_opened"); // функция добавления/удаления класса в попапе формы
};
popupClose.addEventListener("click", popupToggle); // вызов функции при клике на крестик для удаления класса

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // Вставляем новые значения с помощью textContent
  title.textContent = inputName.value;
  subtitle.textContent = inputAboutme.value;
  popupToggle();
}

// Прикрепляем обработчик к форме:
formElement.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»

// функция сохранения данных со странички в инпуты формы при каждом открытии попапа
function ClickPopap() {
  inputName.value = title.innerHTML;
  inputAboutme.value = subtitle.innerHTML;
  popupToggle();
}
popupOpen.addEventListener("click", ClickPopap); // вызов функции при клике по карандашу для добавления класса

