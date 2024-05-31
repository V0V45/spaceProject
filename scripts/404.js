// Функция возврата назад
function goBack() {
    history.back();
}

function rotateArrow(event) {
    event.target.lastElementChild.classList.add('rotate');
}

function getArrowBack(event) {
    event.target.lastElementChild.classList.remove('rotate');
}

// Анимация стрелки и ховера кнопки
const goBackButton = document.getElementsByClassName('goBackButton')[0];
goBackButton.addEventListener('mouseenter', rotateArrow);
goBackButton.addEventListener('mouseleave', getArrowBack);