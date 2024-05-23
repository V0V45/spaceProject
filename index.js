// Константы - элементы DOM
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

// Обработчики событий
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
spoilerArray.forEach(element => {
    element.addEventListener('click', changeActiveSpoilerIndex);
});