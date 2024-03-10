(() => {
    const desktopFooter = document.querySelector('#js-desktop-footer');
    const mobileFooter = document.querySelector('#js-mobile-footer');

    const footerTemplates = {
        desktop: desktopFooter,
        mobile: mobileFooter
    };

    const footer = document.querySelector('#js-footer');

    const setFooterTemplate = () => {
        const { innerWidth } = window;

        const version = innerWidth <= 375 ? 'mobile' : 'desktop';

        footer.innerHTML = footerTemplates[version].innerHTML;
    };

    window.addEventListener('resize', setFooterTemplate);
    setFooterTemplate()
})();
