/**
 * Открытие меню с фильтрами на странице с кейсами
 */
(() => {
    const activeClassName = 'case-search__menu-active';

    const button = document.querySelector('#js-case-search__button');
    const menu = document.querySelector('#js-case-search__menu');

    const toggleMenu = (menu) => {
        menu.classList.toggle(activeClassName);
    };

    if (!button || !menu) {
        return;
    }

    button.addEventListener('click', toggleMenu.bind(null, menu));
})();

/**
 * Назначение активной кнопки при открытии страницы
 */
(() => {
    const activeClassName = 'case-search__menu__item--active';
    const defaultActiveFilter = 'all';

    const urlParams = new URLSearchParams(window.location.search);
    const activeFilter = urlParams.get('filter');

    const menu = document.querySelector('#js-case-search__menu');

    if (!menu) {
        return;
    }

    const button = menu.querySelector(
        `[name="filter"][value="${activeFilter || defaultActiveFilter}"]`
    );

    if (!button) {
        return;
    }

    button.classList.add(activeClassName);

    document.querySelector('#js-case-search__button__text').innerHTML = button.innerHTML;
})();

/**
 * Обработка нажатия на кнопку "Еще"
 */
(() => {
    const button = document.querySelector('#js-cases-more-button');

    if (!button) {
        return;
    }

    const handler = button => {
        // TODO: Написать логику обработки
    };

    button.addEventListener('click', handler.bind(null, button));
})();
