// Функция возврата назад
function goBack() {
    history.back();
}

// Анимация стрелки при наведении на кнопку
function rotateArrow(event) {
    event.target.lastElementChild.classList.add('rotate');
}

function getArrowBack(event) {
    event.target.lastElementChild.classList.remove('rotate');
}
const goBackButton = document.getElementsByClassName('goBackButton')[0];
goBackButton.addEventListener('mouseenter', rotateArrow);
goBackButton.addEventListener('mouseleave', getArrowBack);

// Анимация появления снизу
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromDown');
        }
    });
});
const hiddenFromDownElements = document.querySelectorAll('.hiddenFromDown');
hiddenFromDownElements.forEach((element) => observer.observe(element));