// Константы - элементы DOM
const viewPortfolioButton = document.getElementsByClassName('statistics__viewPortfolioButton')[0];
const aboutUsButton = document.getElementsByClassName('aboutUs__infoRight__button')[0];
const viewProjectSkinCareButton = document.getElementsByClassName('ourPortfolio__card1__viewButton')[0];
const viewProjecti24Button = document.getElementsByClassName('ourPortfolio__card2__viewButton')[0];
const viewProjectBSBCButton = document.getElementsByClassName('ourPortfolio__card3__viewButton')[0];
const viewProjectDeliveryBotButton = document.getElementsByClassName('ourPortfolio__card4__viewButton')[0];
const viewProjectMyBedroomGuideButton = document.getElementsByClassName('ourPortfolio__card5__viewButton')[0];
const portfolioCard1 = document.getElementsByClassName('ourPortfolio__card1')[0];
const portfolioCard2 = document.getElementsByClassName('ourPortfolio__card2')[0];
const portfolioCard3 = document.getElementsByClassName('ourPortfolio__card3')[0];
const portfolioCard4 = document.getElementsByClassName('ourPortfolio__card4')[0];
const portfolioCard5 = document.getElementsByClassName('ourPortfolio__card5')[0];
const allProjectsButton = document.getElementsByClassName('ourPortfolio__allProjectsButton')[0];
const discussButton = document.getElementsByClassName('whatWeOffer__discussButton')[0];
const spoilerArray = [
    document.getElementsByClassName('expertise__slider__spoiler1')[0],
    document.getElementsByClassName('expertise__slider__spoiler2')[0],
    document.getElementsByClassName('expertise__slider__spoiler3')[0],
    document.getElementsByClassName('expertise__slider__spoiler4')[0]
];
const imagesArray = [
    document.getElementsByClassName('expertise__slider__image1')[0],
    document.getElementsByClassName('expertise__slider__image2')[0],
    document.getElementsByClassName('expertise__slider__image3')[0],
    document.getElementsByClassName('expertise__slider__image4')[0],
];
const backCallForm = document.getElementsByClassName('backCall__inputForm')[0];
const popUpSection = document.getElementsByClassName('popUp')[0];
const popUpText = document.getElementsByClassName('popUp__text')[0];
const contactUsForm = document.getElementsByClassName('contactUs__form')[0];
const radioButtonsArray = [
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__telegram-radioButton')[0],
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__whatsApp-radioButton')[0],
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__email-radioButton')[0],
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__phone-radioButton')[0],
];
const nameInputField = document.getElementsByClassName('backCall__inputForm__nameInputField')[0];
const phoneOrEmailInputField = document.getElementsByClassName('backCall__inputForm__phoneOrEmailInputField')[0];
const firstNameInput = document.getElementsByClassName('contactUs__form__firstNameInput')[0];
const eMailInput = document.getElementsByClassName('contactUs__form__eMailInput')[0];
const scheduleCallButton = document.getElementsByClassName('backCall__inputForm__scheduleCall__button')[0];
const freeConsultationButton = document.getElementsByClassName('contactUs__form__submitButton')[0];


// Функции
// Переходы по ссылкам
function goToPortfolio() {
    window.location.href = '#portfolio';
}

function goToAboutUs() {
    window.location.href = 'about.html';
}

function goToSkinCareApp() {
    window.location.href = 'foryou.html';
}

function goToi24News() {
    window.location.href = 'i24newsapp.html';
}

function goToBSBC() {
    window.location.href = 'bein.html';
}

function goToDeliveryBot() {
    window.location.href = 'deliverybot.html';
}

function goToMyBedroomGuide() {
    window.location.href = 'mybedroom.html';
}

function goToContactUsAnchor() {
    window.location.href = '#contactUsForm';
}

// Изменения стрелок при наведении
function changeArrowToStraight(event) {
    event.target.lastElementChild.classList.add('rotate');
}

function changeArrowToUp(event) {
    event.target.lastElementChild.classList.remove('rotate');
}

// Изменение стрелок и размера шрифта при наведении
function changeArrowToStraightAndChangeFont(event) {
    event.target.style.fontSize = '18px';
    event.target.lastElementChild.classList.add('rotate');
}

function changeArrowToUpAndChangeFont(event) {
    event.target.style.removeProperty('font-size');
    event.target.lastElementChild.classList.remove('rotate');
}

// Изменение стрелок и фона при наведении
function changeArrowToStraightAndChangeBackground(event) {
    event.target.style.backgroundColor = 'var(--green2)';
    event.target.lastElementChild.classList.add('rotate');
}

function changeArrowToUpAndChangeBackground(event) {
    event.target.style.removeProperty('background-color');
    event.target.lastElementChild.classList.remove('rotate');
}

// Изменение цвета и тегов карточек при наведении
function cardHoverColor(event) {
    event.target.classList.add("cardOnHover");
    for (const child of event.target.firstElementChild.children) {
        child.classList.add("tagOnHover");
    }
}

function cardNormalColor(event) {
    event.target.classList.remove("cardOnHover");
    for (const child of event.target.firstElementChild.children) {
        child.classList.remove("tagOnHover");
    }
}

// Работа активных спойлеров
let previousActiveSpoilerID = null; // индекс предыдущего активного спойлера (по умолчанию значение отсутствует)
let currentActiveSpoilerID = 0; // индекс текущего активного спойлера (по умолчанию - 0, то есть самый первый спойлер)
function changeActiveSpoilerIndex(event) { // функция задает логику открытия / закрытия спойлеров и запускает анимации
    event.preventDefault(); // убираем стандартное поведение открытия спойлера
    let toggledSpoilerIndex = parseInt(event.target.dataset.spoilerid) - 1; // у элемента, над которым произошел клик, забираем ID спойлера
    if (spoilerArray[toggledSpoilerIndex].hasAttribute('open')) {
        return; // если нажатый спойлер уже открыт - не даем ему закрыться
    } else { // если нажали на закрытый спойлер
        previousActiveSpoilerID = currentActiveSpoilerID; // индекс предыдущего активного спойлера есть текущий на данный момент
        currentActiveSpoilerID = toggledSpoilerIndex; // индекс текущего активного спойлера перезаписываем на нажатый
        changeFontSize(previousActiveSpoilerID, currentActiveSpoilerID); // запускаем смену шрифта
        changeActiveImage(previousActiveSpoilerID, currentActiveSpoilerID); // запускаем смену изображений
        for (let index = 0; index < spoilerArray.length; index++) { // перебираем все элементы массива, т.е. все спойлеры
            if (index === currentActiveSpoilerID) { // если при переборке наткнулись на нажатый нами закрытый спойлер
                spoilerArray[index].setAttribute('open', ''); // открываем его
            } else { // // если при переборке наткнулись на ненажатый нами спойлер
                spoilerArray[index].removeAttribute('open'); // закрываем его, чтобы исключить возможность открытия сразу нескольких спойлеров
            }
        }
    }
}

// Работа смены шрифта
// в функцию передаются индексы предыдущего активного спойлера и текущего
// так как ранее активный заголовок нужно уменьшить, а новый активный - увеличить
function changeFontSize(previousActiveSpoilerID, currentActiveSpoilerID) {
    spoilerArray[previousActiveSpoilerID].firstElementChild.firstElementChild.classList.remove('fontGoesBig');
    spoilerArray[currentActiveSpoilerID].firstElementChild.firstElementChild.classList.add('fontGoesBig');
}

// Работа смены изображений
// в функцию передаются индексы предыдущего активного спойлера и текущего
// так как новое изображение будет появляться поверх старого
function changeActiveImage(previousActiveSpoilerID, currentActiveSpoilerID) {
    // для начала делаем очистку: у всех изображений удаляем класс появления снизу, чтобы избежать несрабатывания анимации
    for (const image of imagesArray) {
        image.classList.remove('imageAppearFromDown');
    }
    // предыдущее изображение оставляем видимым и даем ему z-index 1, чтобы оно осталось внизу
    imagesArray[previousActiveSpoilerID].style.display = 'block';
    imagesArray[previousActiveSpoilerID].style.zIndex = '1';
    // текущее изображение также делаем видимым и даем ему z-index 2, чтобы оно легло поверх предыдущего
    imagesArray[currentActiveSpoilerID].style.display = 'block';
    imagesArray[currentActiveSpoilerID].style.zIndex = '2';
    // запускаем у текущего изображения анимацию появления снизу
    imagesArray[currentActiveSpoilerID].classList.add('imageAppearFromDown');
    // все остальные (неактивные) изображения скрываем и убираем у них z-index
    for (let index = 0; index < imagesArray.length; index++) {
        if ((index === previousActiveSpoilerID) || (index === currentActiveSpoilerID)) {
            continue;
        } else {
            imagesArray[index].style.display = 'none';
            imagesArray[index].style.zIndex = '0';
        }
    }
}

// Работа отправки формы обратного звонка
function submitBackCallForm(event) {
    event.preventDefault(); // отменяем действие при отправке формы по умолчанию
    // проверяем, пройдена ли валидация
    // это нужно на случай, если пользователь нажал кнопку сразу,
    // не заполнив ни одного поля:
    if (scheduleCallButton.classList.contains('disabledButton')) { // если кнопка содержит класс "заблокирован"
        // смотрим, какое поле заполнено неверно
        if (nameInputField.dataset.valid == 'false') { // если неверно заполнено поле имени
            // элемент <p>, идущий за полем, наполняем текстом
            nameInputField.nextElementSibling.textContent = 'The name entered is empty';
            // добавляем красное обрамление
            nameInputField.style.border = '1px solid #DD1414';
        }
        if (phoneOrEmailInputField.dataset.valid == 'false') { // если неверно заполнено поле телефона или почты
            // добавляем красное обрамление
            phoneOrEmailInputField.style.border = '1px solid #DD1414';
            // смотрим, какое значение радиокнопки сейчас активно
            let currentRadioButtonValue = document.querySelector('input[name="backCall"]:checked').value;
            // если значение telegram, whatsapp или phone
            // то мы понимаем, что речь идет о телефоне
            if (currentRadioButtonValue == 'telegram' || currentRadioButtonValue == 'whatsapp' || currentRadioButtonValue == 'phone') {
                // элемент <p>, идущий за полем, наполняем текстом про неверный телефон
                phoneOrEmailInputField.nextElementSibling.textContent = 'The phone entered is invalid';
            // если значение email, то мы понимаем, что речь идет о почте
            } else if (currentRadioButtonValue == 'email') {
                // элемент <p>, идущий за полем, наполняем текстом про неверную почту
                phoneOrEmailInputField.nextElementSibling.textContent = 'The e-mail address entered is invalid';
            }
        }
    } else { // если же валидация пройдена
        let formData = new FormData(backCallForm); // создаем объект класса FormData, который черпает информацию из полей формы
        let formDataToBePosted = Object.fromEntries(formData); // преобразуем вышеописанный объект в объект "ключ-значение"
        // тем самым вышеописанная переменная хранит в себе все заполненные поля в форме
        // форма отправляется на /backcall и передает JSON-объект с тремя ключами:
        // { "nameInputField": "...", "phoneOrEmailInputField": "...", "backCall": "..." }
        // Код для связи с backend:
        // sendFormToServer(formDataToBePosted, '/backcall'); // передаем поля формы на сервер
        // Код для front-end отладки:
        popUpSection.classList.add('showPopUp');
        popUpText.textContent = 'Thank you, your request has been sent, our specialists will contact you within 24 hours.';
    }
}

// Работа отправки формы обратной связи
function submitContactUsForm(event) {
    event.preventDefault(); // отменяем действие при отправке формы по умолчанию
    // проверяем, пройдена ли валидация
    // это нужно на случай, если пользователь нажал кнопку сразу,
    // не заполнив ни одного поля
    if (freeConsultationButton.classList.contains('disabledButton')) { // если кнопка содержит класс "заблокирован"
        // смотрим, какое поле заполнено неверно
        if (firstNameInput.dataset.valid == 'false') { // если неверно заполнено поле имени
            // элемент <p>, идущий за полем, наполняем текстом
            firstNameInput.nextElementSibling.textContent = 'The name entered is empty';
            // добавляем красное обрамление
            firstNameInput.style.border = '1px solid #DD1414';
        }
        if (eMailInput.dataset.valid == 'false') { // если неверно заполнено поле почты
            // элемент <p>, идущий за полем, наполняем текстом
            eMailInput.nextElementSibling.textContent = 'The e-mail address entered is invalid';
            // добавляем красное обрамление
            eMailInput.style.border = '1px solid #DD1414';
        }
    } else { // если же валидация пройдена
        let formData = new FormData(contactUsForm); // создаем объект класса FormData, который черпает информацию из полей формы
        let formDataToBePosted = Object.fromEntries(formData); // преобразуем вышеописанный объект в объект "ключ-значение"
        // тем самым вышеописанная переменная хранит в себе все заполненные поля в форме
        // форма отправляется на /contact и передает JSON-объект с тремя ключами:
        // { "firstName": "...", "companyName": "...", "eMail": "...", "phone": "...", "message": "..." }
        // Код для связи с backend:
        // sendFormToServer(formDataToBePosted, '/contact'); // передаем поля формы на сервер
        // Код для front-end отладки:
        popUpSection.classList.add('showPopUp');
        popUpText.textContent = 'Thank you, your request has been sent, our specialists will contact you within 24 hours.';
    }
}

// Отправка формы на сервер
async function sendFormToServer(formDataToBePosted, formURL) {
    // выводим в консоль то, что отправляем на сервер
    console.log(JSON.stringify(formDataToBePosted));
    // обращаемся к backcall через POST и передаем туда JSON из заполненных в форме данных
    let response = await fetch(formURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToBePosted),
    });
    // ответ от сервера также приходит в формате json
    let result = await response.json();
    // нам приходит объект, который содержит ключ email: sent или email: notSent
    // если сообщение успешно обработано сервером, т.е. мы получили ключ sent
    if (result.email === 'sent') {
        // выдаем сообщение что все хорошо
        popUpText.textContent = 'Thank you, your request has been sent, our specialists will contact you within 24 hours.';
        // активируем popUp окно
        popUpSection.classList.add('showPopUp');
    } else { // в других случаях
        // выдаем сообщение что что-то пошло не так
        popUpText.textContent = 'Something went wrong. Please, try again later';
        // активируем popUp окно
        popUpSection.classList.add('showPopUp');
    }
}

// Логика кнопки закрытия pop-up окна
function closePopUp() {
    popUpSection.classList.remove('showPopUp');
    popUpText.textContent = '';
}

// Работа смены плейсхолдера в backcall-форме и включение нужной валидации
// запускается при загрузке страницы, а также при нажатии любой из радиокнопок
// физический смысл: при нажатии радиокнопок Telegram (по умолчанию), WhatsApp или Phone
// placeholder второго поля меняется на Phone и включается валидация на телефон
// при нажатии радиокнопки Email placeholder второго поля меняется на Email и включается валидация на email
function changePlaceholderAndLaunchValidation() {
    // обращаемся к нажатой радиокнопке и забираем ее значение (которое передается на сервер)
    let currentRadioButtonValue = document.querySelector('input[name="backCall"]:checked').value;
    // если значение нажатой радиокнопки есть telegram, whatsapp или phone
    if (currentRadioButtonValue == 'telegram' || currentRadioButtonValue == 'whatsapp' || currentRadioButtonValue == 'phone') {
        // меняем плейсхолдер на Phone
        phoneOrEmailInputField.placeholder = 'Phone';
        // возвращаем стили и значения на начальные (см. описание в функции)
        resetValidationData(phoneOrEmailInputField);
        // убираем, что при вводе пользователем чего-либо происходит валидация email
        phoneOrEmailInputField.removeEventListener('input', emailValidation);
        // включаем наблюдение за вводом пользователя и при вводе проводим валидацию телефона
        phoneOrEmailInputField.addEventListener('input', phoneValidation);
        // если же значение нажатой радиокнопки есть email
    } else if (currentRadioButtonValue == 'email') {
        // меняем плейсхолдер на Email
        phoneOrEmailInputField.placeholder = 'Email';
        // возвращаем стили и значения на начальные (см. описание в функции)
        resetValidationData(phoneOrEmailInputField);
        // убираем, что при вводе пользователем чего-либо происходит валидация телефона
        phoneOrEmailInputField.removeEventListener('input', phoneValidation);
        // включаем наблюдение за вводом пользователя и при вводе проводим валидацию email
        phoneOrEmailInputField.addEventListener('input', emailValidation);
        // если же значение нажатой радиокнопки есть ни email, ни telegram, ни whatsapp и не phone
        // (на случай чего)
    } else {
        // меняем плейсхолдер на Phone or Email
        phoneOrEmailInputField.placeholder = 'Phone or email';
        // возвращаем стили и значения на начальные (см. описание в функции)
        resetValidationData(phoneOrEmailInputField);
        // убираем все валидации
        phoneOrEmailInputField.removeEventListener('input', phoneValidation);
        phoneOrEmailInputField.removeEventListener('input', emailValidation);
        // бросаем ошибку
        throw new Error('Radiobutton value is not recognised');
    }
}

// Сброс валидации
// при смене радиокнопки нужно удалить введенные в поле данные,
// а также убрать все, что могло появиться, если пользователь
// ввел некорректные данные, а потом переключил валидацию с Email на Phone или наоборот
function resetValidationData(inputElement) { // на вход функция получает элемент типа <input>
    inputElement.value = ''; // удаляем введенные в поле пользователем значения
    inputElement.nextElementSibling.textContent = ''; // убираем сообщение о том, что что-то введено неправильно
    // (это элемент <p>, который идет следующим после поля)
    inputElement.style.removeProperty('border'); // удаляем красную обводку
    inputElement.dataset.valid = 'false'; // устанавливаем значение о валидности поля в false
}

// Сброс значений форм при обновлении или загрузке страницы
function resetFormsOnLoad() {
    backCallForm.reset(); // удаляем значения в форме обратного звонка
    contactUsForm.reset(); // удаляем значения в форме обратной связи
    scheduleCallButton.classList.add('disabledButton'); // кнопки в обоих формах по умолчанию делаем заблокированными
    freeConsultationButton.classList.add('disabledButton');
}

// Валидация email
const emailRegExp = /[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}/; // регулярное выражение для почты
function emailValidation(event) {
    if (emailRegExp.test(event.target.value)) { // если значение в поле подходит под регулярное выражение
        event.target.nextElementSibling.textContent = ''; // у элемента, содержащего сообщение о том, что валидация не пройдена,
        // убираем текст, тем самым прячем элемент
        // (предполагается, что это элемент <p>, который идет следующим за полем ввода)
        event.target.style.removeProperty('border'); // удаляем красную обводку
        event.target.dataset.valid = 'true'; // у поля ставим аттрибут data-valid="true"
        activateOrDisableButton(event.target.parentElement); // проверяем, можно ли включить кнопку или нет
        // передаем в функцию значения элемента form
        // предполагается, что form есть "родитель" поля ввода
    } else { // если валидация не пройдена
        // у элемента, содержащего сообщение о том, что валидация не пройдена,
        // присваиваем текст, тем самым показываем элемент
        // (предполагается, что это элемент <p>, который идет следующим за полем ввода)
        event.target.nextElementSibling.textContent = 'The e-mail address entered is invalid';
        // добавляем красную обводку
        event.target.style.border = '1px solid #DD1414';
        // у поля ставим аттрибут data-valid="true"
        event.target.dataset.valid = 'false';
        // проверяем, надо ли выключать кнопку или она уже выключена
        activateOrDisableButton(event.target.parentElement); // передаем в функцию значения элемента form
        // предполагается, что form есть "родитель" поля ввода
    }
}

// Валидация телефона
const phoneRegExp = /(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d/i; // регулярное выражение для телефона
function phoneValidation(event) {
    if (phoneRegExp.test(event.target.value)) { // работа функции аналогична валидации email
        event.target.nextElementSibling.textContent = '';
        event.target.style.removeProperty('border');
        event.target.dataset.valid = 'true';
        activateOrDisableButton(event.target.parentElement);
    } else {
        event.target.nextElementSibling.textContent = 'The phone entered is invalid';
        event.target.style.border = '1px solid #DD1414';
        event.target.dataset.valid = 'false';
        activateOrDisableButton(event.target.parentElement);
    }
}


// Валидация на наличие хотя бы одного символа
function atLeastOneSymbolValidation(event) {
    // если значение формы не пустое
    if (event.target.value) {
        event.target.nextElementSibling.textContent = ''; // работа функции аналогична валидации email
        event.target.style.removeProperty('border');
        event.target.dataset.valid = 'true';
        activateOrDisableButton(event.target.parentElement);
    } else {
        event.target.nextElementSibling.textContent = 'The name entered is empty';
        event.target.style.border = '1px solid #DD1414';
        event.target.dataset.valid = 'false';
        activateOrDisableButton(event.target.parentElement);
    }
}

// Активация или деактивации кнопки
// функция проверяет, все ли элементы формы прошли валидацию
// и при возможности активирует/деактивирует кнопку
function activateOrDisableButton(formElement) { // на вход принимает элемент типа <form>
    if (formElement.classList[0] == 'backCall__inputForm') { // если форма содержит класс backCall__inputForm
        // то мы понимаем, что речь идет о форме обратного звонка
        // проверяем, если оба поля прошли валидацию,
        // то есть в поле name и в поле phoneOrEmail теги data-valid="true",
        if (nameInputField.dataset.valid == 'true' && phoneOrEmailInputField.dataset.valid == 'true') {
            // то активируем кнопку (то есть удаляем класс disabledButton)
            scheduleCallButton.classList.remove('disabledButton');
            // в другом случае (т.е. хотя бы один из тегов data-valid не равен true)
        } else {
            // выключаем кнопку (то есть включаем класс disabledButton)
            scheduleCallButton.classList.add('disabledButton');
        }
    } else if (formElement.classList[0] == 'contactUs__form') { // если форма содержит класс contactUs__form
        // то мы понимаем, что речь идет о форме обратной связи
        // проверяем, если оба поля со звездочкой прошли валидацию,
        // то есть в поле firstName и в поле eMail теги data-valid="true",
        if (firstNameInput.dataset.valid == 'true' && eMailInput.dataset.valid == 'true') {
            // то активируем кнопку (то есть удаляем класс disabledButton)
            freeConsultationButton.classList.remove('disabledButton');
            // в другом случае (т.е. хотя бы один из тегов data-valid не равен true)
        } else {
            // выключаем кнопку (то есть включаем класс disabledButton)
            freeConsultationButton.classList.add('disabledButton');
        }
    }
}


// Обработчики событий и начальные значения
viewPortfolioButton.addEventListener('mouseenter', changeArrowToStraight);
viewPortfolioButton.addEventListener('mouseleave', changeArrowToUp);
aboutUsButton.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
aboutUsButton.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
viewProjectSkinCareButton.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
viewProjectSkinCareButton.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
viewProjecti24Button.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
viewProjecti24Button.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
viewProjectBSBCButton.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
viewProjectBSBCButton.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
viewProjectDeliveryBotButton.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
viewProjectDeliveryBotButton.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
viewProjectMyBedroomGuideButton.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
viewProjectMyBedroomGuideButton.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
portfolioCard1.addEventListener('mouseenter', cardHoverColor);
portfolioCard1.addEventListener('mouseleave', cardNormalColor);
portfolioCard2.addEventListener('mouseenter', cardHoverColor);
portfolioCard2.addEventListener('mouseleave', cardNormalColor);
portfolioCard3.addEventListener('mouseenter', cardHoverColor);
portfolioCard3.addEventListener('mouseleave', cardNormalColor);
portfolioCard4.addEventListener('mouseenter', cardHoverColor);
portfolioCard4.addEventListener('mouseleave', cardNormalColor);
portfolioCard5.addEventListener('mouseenter', cardHoverColor);
portfolioCard5.addEventListener('mouseleave', cardNormalColor);
allProjectsButton.addEventListener('mouseenter', changeArrowToStraightAndChangeBackground);
allProjectsButton.addEventListener('mouseleave', changeArrowToUpAndChangeBackground);
discussButton.addEventListener('mouseenter', changeArrowToStraightAndChangeBackground);
discussButton.addEventListener('mouseleave', changeArrowToUpAndChangeBackground);
spoilerArray.forEach(element => {
    element.addEventListener('click', changeActiveSpoilerIndex);
});
backCallForm.addEventListener('submit', submitBackCallForm);
contactUsForm.addEventListener('submit', submitContactUsForm);
resetFormsOnLoad(); // при обновлении страницы сбрасываем значения всех форм
changePlaceholderAndLaunchValidation(); // предостережение от того, что радиокнопка может быть не нажата
radioButtonsArray.forEach(radioButton => {
    radioButton.addEventListener('click', changePlaceholderAndLaunchValidation);
});
nameInputField.addEventListener('input', atLeastOneSymbolValidation);
firstNameInput.addEventListener('input', atLeastOneSymbolValidation);
eMailInput.addEventListener('input', emailValidation);