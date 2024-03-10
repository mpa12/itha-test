(() => {
    const desktopFooter = document.querySelector('#js-desktop-footer');
    const mobileFooter = document.querySelector('#js-mobile-footer');

    const footerTemplates = {
        desktop: desktopFooter,
        mobile: mobileFooter
    };

    const footer = document.querySelector('#js-footer');

    const setFooterTemplate = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        const version = width <= 375 ? 'mobile' : 'desktop';

        footer.innerHTML = footerTemplates[version].innerHTML;
    };

    window.addEventListener('resize', setFooterTemplate);
    setFooterTemplate()
})();
