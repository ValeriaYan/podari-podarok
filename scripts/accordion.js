const accordions = document.querySelectorAll(".Accordion_wrapper");

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".Accordion_panel");
    const intro = accordion.querySelector(".Accordion_title");
    const icon = accordion.querySelector(".Accordion_icon");
    content.classList.add("Accordion_panel-open");
    content.classList.remove("Accordion_panel-close");
    intro.classList.add('Accordion_active');
    intro.classList.remove('Accordion_inactive');
    icon.classList.remove('Accordion_plus');
    icon.classList.add('Accordion_minus');
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".Accordion_panel");
    const intro = accordion.querySelector(".Accordion_title");
    const icon = accordion.querySelector(".Accordion_icon");
    content.classList.add("Accordion_panel-close");
    content.classList.remove("Accordion_panel-open");
    intro.classList.add('Accordion_inactive');
    intro.classList.remove('Accordion_active');
    icon.classList.remove('Accordion_minus');
    icon.classList.add('Accordion_plus');
};

accordions.forEach((accordion) => {
    const intro = accordion.querySelector(".Accordion_title");

    intro.onclick = () => {
        if (intro.classList.contains('Accordion_active')) {
            closeAccordion(accordion);
        } else {
            openAccordion(accordion);
        }
        accordions.forEach((a) => {
            console.log(a)
            if(a !== accordion) {
                closeAccordion(a);
            }
        })
    };
});