// Переменные и константы
const viewPortfolioButton = document.getElementsByClassName('statistics__viewPortfolioButton')[0];
const viewPortofolioArrow = document.getElementsByClassName('statistics__viewPortfolioButton__ArrowIcon')[0];
const aboutUsButton = document.getElementsByClassName('aboutUs__infoRight__button')[0];
const aboutUsArrow = document.getElementsByClassName('aboutUs__infoRight__button__ArrowIcon')[0];
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

// Функции
// Переходы по ссылкам
function goToPortfolio() {
    window.location.href = 'portfolio.html';
}

function goToAboutUs() {
    window.location.href = 'about.html';
}

function goToSkinCareApp() {
    window.location.href = 'foryouskincareapp.html';
}

function goToi24News() {
    window.location.href = 'i24newsapp.html';
}

function goToBSBC() {
    window.location.href = 'beinsportbeinconnect.html';
}

function goToDeliveryBot() {
    window.location.href = 'deliverybot.html';
}

// Изменения стрелок при наведении
function changePortfolioArrowOnHoverToStraight() {
    viewPortofolioArrow.src = './src/icons/arrow_right.svg';
}

function changePortfolioArrowOnHoverToUp() {
    viewPortofolioArrow.src = './src/icons/arrow_up.svg';
}

function changeAboutUsArrowOnHoverToStraight() {
    aboutUsArrow.src = './src/icons/arrow_right.svg';
}

function changeAboutUsArrowOnHoverToUp() {
    aboutUsArrow.src = './src/icons/arrow_up.svg';
}

function changeViewProjectArrowOnHoverToStraight(event) {
    event.target.lastChild.src = './src/icons/arrow_right.svg';
}

function changeViewProjectArrowOnHoverToUp(event) {
    event.target.lastChild.src = './src/icons/arrow_up.svg';
}

function changeWhiteArrowToStraight(event) {
    event.target.lastChild.src = './src/icons/arrow_right_white.svg';
}

function changeWhiteArrowToUp(event) {
    event.target.lastChild.src = './src/icons/arrow_up_white.svg';
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

// Блок выполнения
viewPortfolioButton.addEventListener('mouseenter', changePortfolioArrowOnHoverToStraight);
viewPortfolioButton.addEventListener('mouseleave', changePortfolioArrowOnHoverToUp);
aboutUsButton.addEventListener('mouseenter', changeAboutUsArrowOnHoverToStraight);
aboutUsButton.addEventListener('mouseleave', changeAboutUsArrowOnHoverToUp);
viewProjectSkinCareButton.addEventListener('mouseenter', changeViewProjectArrowOnHoverToStraight);
viewProjectSkinCareButton.addEventListener('mouseleave', changeViewProjectArrowOnHoverToUp);
viewProjecti24Button.addEventListener('mouseenter', changeViewProjectArrowOnHoverToStraight);
viewProjecti24Button.addEventListener('mouseleave', changeViewProjectArrowOnHoverToUp);
viewProjectBSBCButton.addEventListener('mouseenter', changeViewProjectArrowOnHoverToStraight);
viewProjectBSBCButton.addEventListener('mouseleave', changeViewProjectArrowOnHoverToUp);
viewProjectDeliveryBotButton.addEventListener('mouseenter', changeViewProjectArrowOnHoverToStraight);
viewProjectDeliveryBotButton.addEventListener('mouseleave', changeViewProjectArrowOnHoverToUp);
viewProjectMyBedroomGuideButton.addEventListener('mouseenter', changeViewProjectArrowOnHoverToStraight);
viewProjectMyBedroomGuideButton.addEventListener('mouseleave', changeViewProjectArrowOnHoverToUp);
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
allProjectsButton.addEventListener('mouseenter', changeWhiteArrowToStraight);
allProjectsButton.addEventListener('mouseleave', changeWhiteArrowToUp);
discussButton.addEventListener('mouseenter', changeWhiteArrowToStraight);
discussButton.addEventListener('mouseleave', changeWhiteArrowToUp);