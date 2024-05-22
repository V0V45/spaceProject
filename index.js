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
        resetAnimations(); // сбрасываем таймеры анимаций
        requestAnimationFrame(resizeToBig); // запускаем анимацию увеличения шрифта у нажатого спойлера
        requestAnimationFrame(resizeToSmall); // запускаем анимацию уменьшения шрифта у ранее активного спойлера
        for (let index = 0; index < spoilerArray.length; index++) { // перебираем все элементы массива, т.е. все спойлеры
            if (index === currentActiveSpoilerID) { // если при переборке наткнулись на нажатый нами закрытый спойлер
                spoilerArray[index].setAttribute('open', ''); // открываем его
                imagesArray[index].style.display = 'block'; // показываем картинку, соответствующую нажатому спойлеру
            } else { // // если при переборке наткнулись на ненажатый нами спойлер
                spoilerArray[index].removeAttribute('open'); // закрываем его, чтобы исключить возможность открытия сразу нескольких спойлеров
                imagesArray[index].style.display = 'none'; // убираем неподходящую под спойлер картинку
            }
        }
    }
}

// Сброс всех анимаций
// возвращаем переменные времени запуска анимаций в их исходные значения
function resetAnimations() {
    resizeToBigStarted = null;
    resizeToSmallStarted = null;
}

// Анимация увеличения шрифта нового активного спойлера
let resizeToBigStarted = null;
function resizeToBig(timestamp) {
    // если значение переменной resizeToBigStarted равно null, то есть анимация только что запустилась, то записываем
    // в нее значение текущего timestamp
    // timestamp - это встроенная переменная, означающая время в миллисекундах с момента запуска страницы
    if (!resizeToBigStarted) {
        resizeToBigStarted = timestamp;
    }
    // прогресс - переменная, изменяющаяся во времени
    // прогресс равен разнице между временем с момента запуска страницы и временем с момента запуска анимации,
    // деленная на общее время анимации. Диапазон ее значений: от 0 до 1.
    // 0 означает что разницы между прошедшем временем и моментом запуска анимации нет (анимация только началась),
    // 1 означает что разница между прошедшем временем и моментом запуска анимации составила предельное значение,
    // которое задается в знаменателе в миллисекундах.
    let progress = (timestamp - resizeToBigStarted) / 300;
    // конечное значение размера текста
    // 30 - начинается с 30 пикселей (маленький неактивный заголовок спойлера)
    // 14 - конечное значение есть 30 + 14 = 44 пикселя (большой активный заголовок спойлера)
    // так как прогресс меняется плавно от 0 до 1, то размер шрифта будет плавно меняться от 30 до 44 пикселей
    let endValue = 30 + (progress * 14);
    // обращаемся к элементу span активного спойлера (details -> summary -> span) и прописываем изменение размера его шрифта
    // через переменную endValue, преобразованную в строку и с добавлением постфикса px
    spoilerArray[currentActiveSpoilerID].firstElementChild.firstElementChild.style.fontSize = endValue.toString() + 'px';
    // если прогресс меньше 1, то есть анимация не дошла до конца
    if (progress < 1) {
        requestAnimationFrame(resizeToBig); // запускаем следующий кадр анимации
    } else { // если же прогресс достиг 1, то есть анимация завершилась
        // ставим конечное значение ровно в 44 пикселя во избежание "прыжков" при переключении спойлеров
        spoilerArray[currentActiveSpoilerID].firstElementChild.firstElementChild.style.fontSize = '44px';
    }
}

// Анимация уменьшения шрифта ранее активного спойлера
// принцип работы аналогичен вышеописанному,
let resizeToSmallStarted = null;
function resizeToSmall(timestamp) {
    if (!resizeToSmallStarted) {
        resizeToSmallStarted = timestamp;
    }
    let progress = (timestamp - resizeToSmallStarted) / 300;
    // за исключением того, что прогресс управляет вычитанием от 44 до 30 пикселей
    let endValue = 44 - (progress * 14);
    // и того, что обращение идет к span-элементу ранее активного спойлера
    spoilerArray[previousActiveSpoilerID].firstElementChild.firstElementChild.style.fontSize = endValue.toString() + 'px';
    if (progress < 1) {
        requestAnimationFrame(resizeToSmall);
    } else {
        spoilerArray[previousActiveSpoilerID].firstElementChild.firstElementChild.style.fontSize = '30px';
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