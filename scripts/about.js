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