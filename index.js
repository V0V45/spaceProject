// Переменные и константы
const viewPortfolioButton = document.getElementsByClassName('statistics__viewPortfolioButton')[0];
const viewPortofolioArrow = document.getElementsByClassName('statistics__viewPortfolioButton__ArrowIcon')[0];
const aboutUsButton = document.getElementsByClassName('aboutUs__infoRight__button')[0];
const aboutUsArrow = document.getElementsByClassName('aboutUs__infoRight__button__ArrowIcon')[0];
const viewProjectButton = document.getElementsByClassName('ourPortfolio__card1__viewButton')[0];
const viewProjectArrow = document.getElementsByClassName('ourPortfolio__card1__viewButton__ArrowIcon')[0];

// Функции
function goToPortfolio() {
    window.location.href = 'portfolio.html';
}

function changePortfolioArrowOnHoverToStraight() {
    viewPortofolioArrow.src = './src/icons/arrow_right.svg';
}

function changePortfolioArrowOnHoverToUp() {
    viewPortofolioArrow.src = './src/icons/arrow_up.svg';
}

function goToAboutUs() {
    window.location.href = 'about.html';
}

function changeAboutUsArrowOnHoverToStraight() {
    aboutUsArrow.src = './src/icons/arrow_right.svg';
}

function changeAboutUsArrowOnHoverToUp() {
    aboutUsArrow.src = './src/icons/arrow_up.svg';
}

function goToSkinCareApp() {
    window.location.href = 'foryouskincareapp.html';
}

function changeViewProjectArrowOnHoverToStraight() {
    viewProjectArrow.src = './src/icons/arrow_right.svg';
}

function changeViewProjectArrowOnHoverToUp() {
    viewProjectArrow.src = './src/icons/arrow_up.svg';
}

// Блок выполнения
viewPortfolioButton.addEventListener('mouseenter', changePortfolioArrowOnHoverToStraight);
viewPortfolioButton.addEventListener('mouseleave', changePortfolioArrowOnHoverToUp);
aboutUsButton.addEventListener('mouseenter', changeAboutUsArrowOnHoverToStraight);
aboutUsButton.addEventListener('mouseleave', changeAboutUsArrowOnHoverToUp);
viewProjectButton.addEventListener('mouseenter', changeViewProjectArrowOnHoverToStraight);
viewProjectButton.addEventListener('mouseleave', changeViewProjectArrowOnHoverToUp);