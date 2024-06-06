/* АНИМАЦИИ */
// 1) Плавное появление цифр
// для каждого входного элемента если элемент пересекает viewport запускаем отсчет от 0 до конечного значения
const observerDigits = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // создаем объект класса CountUp (библиотека CountUp.js)
            const count = new CountUp(
                entry.target.id, // id HTML-элемента, который содержит число
                (entry.target.dataset.decimals == 1) ? 0.0 : 0, // начальное значение - если десятичная точка есть, то 0.0;
                // а если нет - то просто 0
                entry.target.dataset.num, // конечное значение - хранится в аттрибуте data-num
                entry.target.dataset.decimals || 0, // количество знаков после запятой - если есть аттрибут data-decimals, 
                // то его значение и вбиваем; а если аттрибута нет, то 0
                2, // длительность анимации - 2 секунды
                {
                    suffix: entry.target.dataset.suffix || '', // символ после числа - если аттрибут есть, то его и вписываем,
                    // а если нет - то оставляем пустым
                }
            );
            count.start(); // запускаем счетчик
            observerDigits.unobserve(entry.target); // убираем слежку за объектом
        }
    });
});
const downloadsNumber = document.getElementsByClassName('impact__digits__number-downloads')[0]; // элемент количества загрузок
const activeUsersNumber = document.getElementsByClassName('impact__digits__number-activeUsers')[0]; // элемент активных пользователей
observerDigits.observe(downloadsNumber); // наблюдаем за появлением элемента количества загрузок
observerDigits.observe(activeUsersNumber); // наблюдаем за появлением элемента активных пользователей

// 2) Плавное появление снизу
// для каждого входного элемента если элемент пересекает viewport добавляем ему класс show, и если не пересекает то удаляем
const observerFromDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromDown');
        }
    });
});
const hiddenFromDownElements = document.querySelectorAll('.hiddenFromDown'); // все элементы с классом hiddenFromDown в HTML записываем в массив
hiddenFromDownElements.forEach((element) => observerFromDown.observe(element)); // для каждого из них запускаем наблюдение

// 3) Плавное появление
// аналогично появлению снизу, только без transform translateY
const observerAppear = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observerAppear.observe(element));

/* КНОПКА FREE CONSULTATION */
// 1) Изменение стрелок и размера шрифта при наведении
const freeConsultationHeaderButton = document.getElementsByClassName('header__freeConsultationButton')[0];

function changeArrowToStraightAndChangeFont(event) {
    event.target.style.fontSize = '18px';
    event.target.lastElementChild.classList.add('rotate');
}

function changeArrowToUpAndChangeFont(event) {
    event.target.style.removeProperty('font-size');
    event.target.lastElementChild.classList.remove('rotate');
}

freeConsultationHeaderButton.addEventListener('mouseenter', changeArrowToStraightAndChangeFont);
freeConsultationHeaderButton.addEventListener('mouseleave', changeArrowToUpAndChangeFont);
// 2) Переход по ссылке при нажатии
function goToCallbackForm() {
    window.location.href = '#callbackForm'
}



/* ФОРМА ОБРАТНОГО ЗВОНКА */
// 1) Работа отправки формы обратного звонка
// Элементы DOM:
const backCallForm = document.getElementsByClassName('backCall__inputForm')[0];
const nameInputField = document.getElementsByClassName('backCall__inputForm__nameInputField')[0];
const phoneOrEmailInputField = document.getElementsByClassName('backCall__inputForm__phoneOrEmailInputField')[0];
const radioButtonsArray = [
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__telegram-radioButton')[0],
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__whatsApp-radioButton')[0],
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__email-radioButton')[0],
    document.getElementsByClassName('backCall__inputForm__communicationChoice__buttonsAndLabels__phone-radioButton')[0],
];
const scheduleCallButton = document.getElementsByClassName('backCall__inputForm__scheduleCall__button')[0];
const popUpSection = document.getElementsByClassName('popUp')[0];
const popUpText = document.getElementsByClassName('popUp__text')[0];

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
// 2) Отправка формы на сервер
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
// 3) Закрытие pop-up окна
function closePopUp() {
    popUpSection.classList.remove('showPopUp');
    popUpText.textContent = '';
}
// 4) Работа смены плейсхолдера в backcall-форме и включение нужной валидации
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
// 5) Сброс валидации
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
// 6) Сброс значений форм при обновлении или загрузке страницы
function resetFormsOnLoad() {
    backCallForm.reset(); // удаляем значения в форме обратного звонка
    scheduleCallButton.classList.add('disabledButton'); // кнопки в обоих формах по умолчанию делаем заблокированными
}
// 7) Валидация email
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
// 8) Валидация телефона
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
// 9) Валидация на наличие хотя бы одного символа
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
// 10) Активация или деактивации кнопки
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
    }
}
// 11) Начальные значения и запуск функций
backCallForm.addEventListener('submit', submitBackCallForm);
resetFormsOnLoad(); // при обновлении страницы сбрасываем значения всех форм
changePlaceholderAndLaunchValidation(); // предостережение от того, что радиокнопка может быть не нажата
radioButtonsArray.forEach(radioButton => {
    radioButton.addEventListener('click', changePlaceholderAndLaunchValidation);
});
nameInputField.addEventListener('input', atLeastOneSymbolValidation);

/* SPLIDE */
// Активация
let splide = new Splide('.splide', {
    type: 'loop',
    arrows: false,
    gap: 40,
    perPage: 3,
    focus: 0,
    autoplay: true,
    interval: 2500,
});
splide.mount();