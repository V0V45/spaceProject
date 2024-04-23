// Переменные и константы
const viewPortfolioButton = document.getElementsByClassName('statistics__viewPortfolioButton')[0];
const viewPortofolioArrow = document.getElementsByClassName('statistics__viewPortfolioButton__ArrowIcon')[0];

// Функции
function goToPortfolio() {
    window.location.href = 'about.html';
}

function changeArrowOnHoverToStraight() {
    viewPortofolioArrow.src = './src/icons/arrow_right.png';
}

function changeArrowOnHoverToUp() {
    viewPortofolioArrow.src = './src/icons/arrow_up.png';
}

// Блок выполнения
viewPortfolioButton.addEventListener('mouseenter', changeArrowOnHoverToStraight);
viewPortfolioButton.addEventListener('mouseleave', changeArrowOnHoverToUp);



