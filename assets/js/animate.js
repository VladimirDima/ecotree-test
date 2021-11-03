// Animating line svg stroke when it enters the viewport
(() => {
    let ec = window.ec || {};

    ec.animate = {
        init() {
            const elm = document.querySelectorAll('.line');
            if (elm) {
                requestAnimationFrame(() => {
                    this.addClassInView(elm);
                });
            }
        },

        addClassInView(elm) {
            elm.forEach((item) => {
                const scrollPos = window.pageYOffset;
                const elmTop = item.getBoundingClientRect().top;
                if (scrollPos - elmTop > 0) {
                    item.classList.add("line-draw");
                }

            });
            requestAnimationFrame(() => {
                this.addClassInView(elm);
            });
        }
    };

    ec.animate.init();
})();