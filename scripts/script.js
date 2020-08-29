let popup = document.querySelector(".popup"); // нашла сам попап
let popupOpen = document.querySelector(".profile__rectangle"); // нашла кнопку открытие попапа
let popupClose = document.querySelector(".popup__icon"); // нашла крестик (в форме) для закрытия попапа

console.log({ popup, popupOpen, popupClose }); // проверила правьность подключения файла JS

let popupToggle = function () {
  popup.classList.toggle("popup_opened");
}; // создала функцию для добавления/удаления класса

popupOpen.addEventListener("click", popupToggle); // вызов функции при клике по карандашу для добавления класса
popupClose.addEventListener("click", popupToggle); // вызов функции при клике на крестик для удаления класса

// Находим форму в DOM
let formElement = document.querySelector(".popup__container");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим все поля формы в DOM
  let inputs = document.querySelectorAll("input");

  // Получаем значение полей из свойства value
  console.log(inputs[0].value);
  console.log(inputs[1].value);

  // Выбераем элементы, куда должны быть вставлены значения полей
  let title = document.querySelector("h1");
  let subtitle = document.querySelector("p");

  // Вставляем новые значения с помощью textContent
  title.textContent = inputs[0].value;
  subtitle.textContent = inputs[1].value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

let popupButton = document.querySelector(".popup__button"); // нашла кнопку "Сохранить" в форме

popupButton.addEventListener("click", popupToggle); // вызов функции при клике по "Сохранить" для удаления класса в попап
