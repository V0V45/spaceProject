/* АНИМАЦИИ */
// 1) Плавное появление цифр
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
                2, // длительность анимации - 2 секунды
                {
                    suffix: entry.target.dataset.suffix || '', // символ после числа - если аттрибут есть, то его и вписываем,
                    // а если нет - то оставляем пустым
                }
            );
            count.start(); // запускаем счетчик
            observerDigits.unobserve(entry.target); // убираем слежку за объектом
        }
    });
});
const downloadsNumber = document.getElementsByClassName('impact__digits__number-downloads')[0]; // элемент количества загрузок
const activeUsersNumber = document.getElementsByClassName('impact__digits__number-activeUsers')[0]; // элемент активных пользователей
observerDigits.observe(downloadsNumber); // наблюдаем за появлением элемента количества загрузок
observerDigits.observe(activeUsersNumber); // наблюдаем за появлением элемента активных пользователей

// 2) Плавное появление снизу
// для каждого входного элемента если элемент пересекает viewport добавляем ему класс show, и если не пересекает то удаляем
const observerFromDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showFromDown');
        }
    });
});
const hiddenFromDownElements = document.querySelectorAll('.hiddenFromDown'); // все элементы с классом hiddenFromDown в HTML записываем в массив
hiddenFromDownElements.forEach((element) => observerFromDown.observe(element)); // для каждого из них запускаем наблюдение