document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const navbar = document.querySelector('.site-header .navbar');
    const footer = document.querySelector('.site-footer');

    if (!header || !navbar || !footer) {
        return;
    }

    const SCROLLED_CLASS = 'navbar--scrolled';
    const HIDDEN_CLASS = 'site-header--hidden';

    const updateNavbarAppearance = () => {
        if (window.scrollY >= 100) {
            navbar.classList.add(SCROLLED_CLASS);
        } else {
            navbar.classList.remove(SCROLLED_CLASS);
        }
    };

    window.addEventListener('scroll', updateNavbarAppearance, { passive: true });
    updateNavbarAppearance();

    const footerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.target !== footer) {
                    return;
                }

                if (entry.isIntersecting) {
                    header.classList.add(HIDDEN_CLASS);
                } else {
                    header.classList.remove(HIDDEN_CLASS);
                }
            });
        },
        {
            root: null,
            threshold: 0,
        }
    );

    footerObserver.observe(footer);
});
