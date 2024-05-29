// Скрипт анимаций при скроллинге
// 1) Появление снизу вверх
// для каждого входного элемента если элемент пересекает viewport добавляем ему класс show, и если не пересекает то удаляем
const observerFromDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromDown');
        // } else {
            // entry.target.classList.remove('showFromDown'); // при пересечении второй раз будет появляться еще раз - пока убрал
        }
    })
});
const hiddenFromDownElements = document.querySelectorAll('.hiddenFromDown'); // все элементы с классом hiddenFromDown в HTML записываем в массив
hiddenFromDownElements.forEach((element) => observerFromDown.observe(element)); // для каждого из них запускаем наблюдение

// 2) Плавное появление цифр
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
                5, // длительность анимации - 5 секунд
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
const rating = document.getElementsByClassName('aboutUs__digits__rating__span')[0]; // элемент рейтинга
const satisfiedUsers = document.getElementsByClassName('aboutUs__digits__satisfiedUsers__span')[0]; // элемент удовлетворенных пользователей
const experience = document.getElementsByClassName('aboutUs__digits__experience__span')[0]; // элемент опытных сотрудников
observerDigits.observe(rating); // наблюдаем за появлением элемента рейтинга на экране
observerDigits.observe(satisfiedUsers); // наблюдаем за появлением элемента удовлетворенных пользователей на экране
observerDigits.observe(experience); // наблюдаем за появлением элемента опытных сотрудников на экране

// 3) Появление слева
// для каждого входного элемента если элемент пересекает viewport добавляем ему класс show, и если не пересекает то удаляем
const observerFromLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromLeft');
        }
    })
});
const hiddenFromLeftElements = document.querySelectorAll('.hiddenFromLeft'); // все элементы с классом hiddenFromLeft в HTML записываем в массив
hiddenFromLeftElements.forEach((element) => observerFromLeft.observe(element)); // для каждого из них запускаем наблюдение

// 4) Появление справа
// для каждого входного элемента если элемент пересекает viewport добавляем ему класс show, и если не пересекает то удаляем
const observerFromRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromRight');
        }
    })
});
const hiddenFromRightElements = document.querySelectorAll('.hiddenFromRight'); // все элементы с классом hiddenFromRight в HTML записываем в массив
hiddenFromRightElements.forEach((element) => observerFromRight.observe(element)); // для каждого из них запускаем наблюдение

