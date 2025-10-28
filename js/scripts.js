document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const navbar = document.querySelector('.site-header .navbar');
    const innerNav = document.querySelector('.inner-navigation');
    const footer = document.querySelector('.site-footer');
    const main = document.querySelector('main');

    if (!header || !navbar || !footer) {
        return;
    }

    const SCROLLED_CLASS = 'navbar--scrolled';
    const HIDDEN_CLASS = 'site-header--hidden';
    const ACTIVE_CLASS = 'active';
    const MIN_MAIN_HEIGHT = 700; // Altura mínima en px

    const updateNavbarAppearance = () => {
        if (window.scrollY >= 100) {
            navbar.classList.add(SCROLLED_CLASS);
        } else {
            navbar.classList.remove(SCROLLED_CLASS);
        }
    };

    // Detectar cuando inner-navigation se vuelve sticky
    const updateInnerNavAppearance = () => {
        if (!innerNav) return;

        const navRect = innerNav.getBoundingClientRect();
        
        // Si el top del elemento es igual o menor que su top style (90px = 5.625rem), está sticky
        if (navRect.top <= 90) {
            innerNav.classList.add(ACTIVE_CLASS);
        } else {
            innerNav.classList.remove(ACTIVE_CLASS);
        }
    };

    // Verificar si el main es lo suficientemente alto
    const shouldHideHeader = () => {
        if (!main) return true; // Si no hay main, permitir que se esconda
        return main.offsetHeight > MIN_MAIN_HEIGHT;
    };

    window.addEventListener('scroll', updateNavbarAppearance, { passive: true });
    window.addEventListener('scroll', updateInnerNavAppearance, { passive: true });
    updateNavbarAppearance();
    updateInnerNavAppearance();

    const footerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.target !== footer) {
                    return;
                }

                // Solo esconder header si el main es lo suficientemente alto
                const canHideHeader = shouldHideHeader();

                if (entry.isIntersecting) {
                    if (canHideHeader) {
                        header.classList.add(HIDDEN_CLASS);
                    }
                    if (innerNav) {
                        innerNav.classList.add(HIDDEN_CLASS);
                    }
                } else {
                    header.classList.remove(HIDDEN_CLASS);
                    if (innerNav) {
                        innerNav.classList.remove(HIDDEN_CLASS);
                    }
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


$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    hoverPause: true,
    margin: 10,
    nav: true,
    navText: [
        '<span class="owl-chevron owl-chevron--left"><i class="fa fa-chevron-left"></i></span>',
        '<span class="owl-chevron owl-chevron--right"><i class="fa fa-chevron-right"></i></span>'
    ],
    items: 1,
    dots: false,
    responsive: {
        0: {
            nav: false
        },
        768: {
            nav: true
        }

    }
});
