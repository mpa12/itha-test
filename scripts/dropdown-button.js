/**
 * Код назначения функционала переворачивания шеврона кнопок, сделанных по шаблону:
 *
 * ```html
 * <span class="dropdown-button" data-itha="dropdown-button">
 *     Текст кнопки
 *     <svg class="dropdown-button__chevron" fill="currentColor" width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
 *         <path d="M7 8L0.937822 0.5L13.0622 0.500001L7 8Z" fill="current"/>
 *     </svg>
 * </span>
 * ```
 *
 * Обязательно нужно указывать атрибут `data-itha` с значением `dropdown-button`
 */
(() => {
    const activeClassName = 'dropdown-button-active';

    const toggleChevron = button => {
        button.classList.toggle(activeClassName);
    };

    const buttons = document.querySelectorAll('[data-itha="dropdown-button"]');

    buttons.forEach(button => {
        button.addEventListener('click', toggleChevron.bind(null, button));
    });
})();
