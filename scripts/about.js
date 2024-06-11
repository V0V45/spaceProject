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
    window.location.href = '/index.html#contactUsForm';
}

/* АКТИВАЦИЯ COUNT UP */
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
                3, // длительность анимации - 3 секунды
                {
                    suffix: entry.target.dataset.suffix || '', // символ после числа - если аттрибут есть, то его и вписываем,
                    // а если нет - то оставляем пустым
                }
            );
            count.start(); // запускаем счетчик
            observerDigits.unobserve(entry.target); // убираем слежку за объектом
        }
    })
});
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const number3 = document.getElementById('num3');
observerDigits.observe(number1);
observerDigits.observe(number2);
observerDigits.observe(number3);

/* АКТИВАЦИЯ HIDDEN FROM DOWN */
const observerFromDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromDown');
        }
    })
});
const hiddenFromDownElements = document.querySelectorAll('.hiddenFromDown'); // все элементы с классом hiddenFromDown в HTML записываем в массив
hiddenFromDownElements.forEach((element) => observerFromDown.observe(element)); // для каждого из них запускаем наблюдение