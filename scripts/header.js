(() => {
    const activeNavClassName = 'header__sub-nav--active';

    // Кнопка "Услуги"
    const servicesButton = document.querySelector('#js-header-services-button');

    // Список услуг
    const servicesNav = document.querySelector('#js-header-services-list');

    servicesButton.addEventListener('click', () => {
        servicesNav.classList.toggle(activeNavClassName);
    });
})();
