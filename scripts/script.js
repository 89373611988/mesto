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

// ---------------------------------------------------------------------------------------------- добавление template, удаление карточки, клик по сердцу

const initialCards = [
  {
    name: "Уфа",
    link: "./images/ufa.jpg",
  },
  {
    name: "Крым",
    link: "./images/crimea.jpg",
  },
  {
    name: "Домбай",
    link: "./images/Dombai.png",
  },
  {
    name: "Гора Эльбрус",
    link: "./images/e.png",
  },
  {
    name: "Москва",
    link: "./images/Moscow.jpg",
  },
  {
    name: "Карачаево-Черкесия",
    link: "./images/karachay.png",
  },
];

// const popupButton = popup.querySelector(".popup__button"); // кнопка Создать новую карточку
const inputNameCard = popup.querySelector(".popup__input_denomination"); // инпут Название (в форме сохранить карточку)
const inputLinkCard = popup.querySelector(".popup__input_link"); // инпут Ссылки (в форме сохранить карточку)
const elementsCard = document.querySelector("#elements").content; // получаем содержимое template тега
const CardSection = document.querySelector(".elements"); // секция с карточками куда добавляются клоны темплейт
const listElement = document.querySelector("element"); // выбрали элемент который нужно удалить
const deleteButton = document.querySelector(".element__urn"); // кнопка удаления

CardSection.addEventListener('click', function(e) {
    if (e.target.classList.contains('element__vector')){
      e.target.classList.toggle('element__vector_dark')
    }
});

// функция добавления template на страницу
function renderItem(card, index) {
  const userElement = elementsCard.cloneNode(true); // клонируем содержимое тега template
  userElement.querySelector(".element__image").src = card.link; // наполняем содержимым ссылку на картинку
  userElement.querySelector(".element__title").innerText = card.name; // наполняем содержимым название картинки
  userElement.querySelector(".element__image").alt = card.name; // наполняем содержимым alt
  userElement.querySelector(".element").setAttribute("id", index); // присваеваем id элементу, чтобы потом удалить его из массива
  CardSection.appendChild(userElement); // отображаем на странице

  // функиця добавления новой карточки
  function cardSubmit(evt) {
    evt.preventDefault();
    initialCards.unshift(renderItem); // добавляем методом unshift карточку в начало массива
    render();
  }
  popupButton.addEventListener("submit", cardSubmit);
}

function render() {
  CardSection.innerHTML = ""; // обнуляем, чтобы карточки не копировались
  initialCards.forEach(renderItem);
  setListeners();
}


function handleCardDelete(event) {
  const index = event.target.parentNode.getAttribute("id"); // находим элемент в массиве который нужно удалить по id
  initialCards.splice(index, 1); // из массива вырезаем один элемент с данным индексом
  render();
}

function setListeners() {
  document.querySelectorAll(".element__urn").forEach((btn) => {
   btn.addEventListener("click", handleCardDelete);
  });
}

render();
