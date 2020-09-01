let popup = document.querySelector(".popup");
let popupOpen = document.querySelector(".profile__rectangle"); // кнопка с карандашом
let popupClose = document.querySelector(".popup__icon-click"); // крестик закрытия формы
let inputName = document.querySelector(".popup__input_name"); // инпут имя
let inputAboutme = document.querySelector(".popup__input_aboutme"); // инпут после имени
let formElement = document.querySelector(".popup__container"); // форма
let popupButton = document.querySelector(".popup__button"); // кнопка сохранить
let title = document.querySelector(".profile__title"); // заколовок
let subtitle = document.querySelector(".profile__subtitle"); // параграф

let popupToggle = function () {
  popup.classList.toggle("popup_opened");
}; // создала функцию для добавления/удаления класса

popupClose.addEventListener("click", popupToggle); // вызов функции при клике на крестик для удаления класса

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Вставляем новые значения с помощью textContent
  title.textContent = inputName.value;
  subtitle.textContent = inputAboutme.value;
  popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

function ClickPopap() {
  inputName.value = title.innerHTML;
  inputAboutme.value = subtitle.innerHTML;
  popupToggle();
} // функция сохранения данных со странички в инпуты формы при каждом открытии попапа

popupOpen.addEventListener("click", ClickPopap); // вызов функции при клике по карандашу для добавления класса
