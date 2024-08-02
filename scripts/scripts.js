// Accordion

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

accordions?.forEach((accordion) => {
    const intro = accordion.querySelector(".Accordion_title");

    intro.onclick = () => {
        if (intro.classList.contains('Accordion_active')) {
            closeAccordion(accordion);
        } else {
            openAccordion(accordion);
        }
        accordions.forEach((a) => {
            if(a !== accordion) {
                closeAccordion(a);
            }
        })
    };
});

// Account sidebar

const sidebar = document.querySelector('.Account_sidebar');
const showMoreBtn = document.querySelector('.InfoBlock_more');

showMoreBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('_full');
})

// Burger

const burgerIcon = document.querySelector('.Header_contextButtonMin');
const burger = document.querySelector('.Mobile_root');
const header = document.querySelector('.Header_headerRoot');

burgerIcon?.addEventListener('click', () => {
    burger.classList.toggle('Mobile_opened');
    if(burger.classList.contains('Mobile_opened')) {
        document.body.style.overflow = 'hidden';
        header.style.backgroundColor = 'var(--primary)';
    }
    if(!burger.classList.contains('Mobile_opened')) {
        document.body.style.overflow = 'auto';
        header.style.backgroundColor = 'var(--white)';
    }
})

// Cart need controls

const needs = document.querySelectorAll('.CartNeeds_need');

needs?.forEach((need) => {
    const plusBtn = need.querySelector('.Counter_plus');
    const minusBtn = need.querySelector('.Counter_minus');
    const input = need.querySelector('.Counter_input');
    const trash = need.querySelector('.CartNeeds_trash');

    plusBtn.addEventListener('click', () => {
        input.value = +input.value + 1;
        if(input.value > 1) {
            minusBtn.disabled = false;
        }
    })

    minusBtn.addEventListener('click', () => {
        if(input.value > 1) {
            input.value = +input.value - 1;
        }

        if(input.value == 1) {
            minusBtn.disabled = true;
        }
    })

    trash.addEventListener('click', () => {
        if(!need.nextElementSibling.classList.contains('CartNeeds_need') && !need.previousElementSibling.classList.contains('CartNeeds_need')) {
            need.parentElement.remove();
        }
        need.remove();
    })
})

// checkbox

const checkboxes = document.querySelectorAll('.checkbox input');

checkboxes?.forEach((input) => {
    input.addEventListener('click', () => {
        input.parentNode.classList.toggle('_active')
    })
})

// Dialog button

const dialogBtn = document.querySelectorAll('.Dialog_dialogButton');

dialogBtn?.forEach((btn) => {
    const dialogRoot = btn.parentElement;
    btn.addEventListener('click', () => {
        dialogRoot.classList.toggle('Dialog_closed');
        const svg = btn.firstElementChild;
        if(dialogRoot.classList.contains('Dialog_closed')) {
            svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 40 40" class="Generic_clrIcon"><path fill="var(--primary)" class="Generic_iconPath" d="M31.667 18.333h-10v-10a1.667 1.667 0 00-3.334 0v10h-10a1.666 1.666 0 100 3.334h10v10a1.667 1.667 0 003.334 0v-10h10a1.666 1.666 0 100-3.334z"></path></svg>'        
        } else {
            svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 40 40" class="Generic_clrIcon"><path fill="var(--primary)" class="Generic_iconPath" d="M31.667 21.667H8.333a1.666 1.666 0 110-3.334h23.334a1.666 1.666 0 110 3.334z"></path></svg>'
        }
    })
})

// Donate tabs

const donateBtns = document.querySelectorAll('.CardTabs_tab');
const donateForms = document.querySelectorAll('.Donate_form');

donateBtns?.forEach((btn) => {
    btn.addEventListener('click', () => {
        donateBtns.forEach((b) => {
            if(b !== btn) {
                b.classList.remove('CardTabs_selected');
            }
        })
        btn.classList.add('CardTabs_selected');
        donateForms.forEach((form) => {
            if(form.dataset.paymentType == btn.dataset.paymentType) {
                form.classList.add('_active');
            } else {
                form.classList.remove('_active');
            }
        })
    })
})

// Dropdown

const dropdownBtns = document.querySelectorAll('.dropdown-button');

dropdownBtns?.forEach((btn, index) => {
    btn.classList.add(`dropdown-button-${index}`)
    btn.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content')) {
            btn.classList.toggle('_active');
        }
    });
    
    document.addEventListener('click', outsideEvtListener);
    
    function outsideEvtListener(e) {
        if (!e.target.closest(`.dropdown-button-${index}`)) {
            btn.classList.remove('_active')
        }
    }
})


// Form checkbox

const checkboxGroups = document.querySelectorAll('[role="listbox"]');

function checkCheckbox(label) {
    label.parentNode.classList.toggle('sd-item--checked');
    label.parentNode.classList.toggle('sd-checkbox--checked');
    label.parentNode.classList.toggle('sd-item--allowhover');
    label.parentNode.classList.toggle('sd-checkbox--allowhover');
}

checkboxGroups?.forEach((group) => {
    const labels = group.querySelectorAll('label');
    labels.forEach((label) => {
        label.addEventListener('click', (e) => {
            checkCheckbox(label)
        })
        label.firstElementChild.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    })
})


// Form radio

const radioGroups = document.querySelectorAll('[role="radiogroup"]');

function checkRadio(labels, label) {
    for(let i = 0; i < labels.length; i++) {
        if(labels[i] !== label) {
            labels[i].parentNode.classList.remove('sd-item--checked');
            labels[i].parentNode.classList.remove('sd-radio--checked');
            labels[i].parentNode.classList.add('sd-item--allowhover');
            labels[i].parentNode.classList.add('sd-radio--allowhover');
        }
    }
    label.parentNode.classList.add('sd-item--checked');
    label.parentNode.classList.add('sd-radio--checked');
    label.parentNode.classList.remove('sd-item--allowhover');
    label.parentNode.classList.remove('sd-radio--allowhover');
}

radioGroups?.forEach((group) => {
    const labels = group.querySelectorAll('label');
    labels.forEach((label) => {
        label.addEventListener('click', () => {
            checkRadio(labels, label)
        })
    })
})

// Form select

const selectWrappers = document.querySelectorAll('.sv-dropdown_select-wrapper');
let selectedItem = null;

function setActiveOption(option, input) {
    option.classList.add('sv-list__item--selected');
    option.classList.add('sd-list__item--selected');
    option.ariaSelected = "true";
    
    input.value = option.firstElementChild.title;
    if(selectedItem !== null) {
        selectedItem.classList.remove('sv-list__item--selected');
        selectedItem.classList.remove('sd-list__item--selected');
        selectedItem.dataset.ariaSelected = "false";
    }
    
    selectedItem = option;
}


selectWrappers?.forEach((select) => {
    const options = select.querySelectorAll('.sv-list__item');
    const menuList = select.querySelector('.sv-dropdown-popup');
    const input = select.querySelector('.sd-dropdown__filter-string-input');

    select.addEventListener('click', () => {
        menuList.classList.toggle('_active');
    })

    options.forEach((option) => {
        option.addEventListener('click', () => {
            setActiveOption(option, input);
        })
    })

    document.addEventListener('click', outsideEvtListener);
    
    function outsideEvtListener(e) {
        if (!e.target.closest('.sv-dropdown_select-wrapper')) {
            menuList.classList.remove('_active')
        }
    }
})

// Header

const headerBlock = document.querySelector('.headroom');

let currentPosition = 0;

if(headerBlock !== null) {
    document.addEventListener('scroll', () => {
        if(currentPosition >= 110) {
            headerBlock.style.position = 'fixed'
            if(this.scrollY < currentPosition) {
                headerBlock.classList.remove('headroom--disabled-animation');
                headerBlock.style.transform = 'translate3d(0px, 0px, 0px)';
                
            } else {
                headerBlock.style.transform = 'translate3d(0px, -100%, 0px)';
            }
        } else if(currentPosition === 0){
            headerBlock.style.position = 'relative';
            headerBlock.classList.add('headroom--disabled-animation');
        }
        currentPosition = this.scrollY;
    })
}


// Input 

const inputs = document.querySelectorAll('.Input_inputBlock');

inputs?.forEach((input) => {
    input.addEventListener('click', () => {
        input.classList.add('Input_selected')
    })

    const field = input.querySelector('.Input_input');

    field.addEventListener('focusout', () => {
        if(field.value === '') {
            input.classList.remove('Input_selected')
        }
    })
})

// Need tabs

const needsBtnsContainer = document.querySelector('.Family_needsBtns');
const needsBtns = needsBtnsContainer?.querySelectorAll('.NeedCategory_root');

needsBtns?.forEach((btn) => {
    btn.addEventListener('click', () => {
        needsBtnsContainer.style.display = 'none';
        const needsList = document.querySelector(`[data-needs='${btn.dataset.needsBtn}']`);
        needsList.classList.add('_active');
        
        const backButton = needsList.querySelector('.Family_needBack');
        backButton.addEventListener('click', () => {
            needsList.classList.remove('_active');
            needsBtnsContainer.style.display = 'flex';
        })
    })
})

// Feedback popup

const buttons = document.querySelectorAll('.Feedback_btn');
const feedbackPopup = document.querySelector('.feedback-popup')

buttons?.forEach((btn) => {
    btn.addEventListener('click', () => {
        feedbackPopup.classList.add('_active');
    })
    const closeBtn = feedbackPopup.querySelector('.react-responsive-modal-closeButton');
    closeBtn.addEventListener('click', () => {
        feedbackPopup.classList.remove('_active');
    })
})

// Popup

const popups = document.querySelectorAll('.popup');

popups?.forEach((popup) => {
    const link = popup.previousElementSibling;
    link.addEventListener('click', () => {
        popup.classList.add('_active');
    });
    const closeBtn = popup.querySelector('.react-responsive-modal-closeButton');
    const overlay = popup.querySelector('.PopUp_container');
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('_active');
    })
    overlay.addEventListener('click', (e) => {
        if(!e.target.closest('.PopUp_modal')) {
            popup.classList.remove('_active');
        }
    })

})

// Select

const selectContainers = document.querySelectorAll('.react-select-container');

function setActiveOption(options, option, placeholder) {
    option.classList.add('react-select__option--is-selected');
    placeholder.textContent = option.textContent;
    options.forEach((o) => {
        if(o !== option) {
            o.classList.remove('react-select__option--is-selected');
        }
    })
}

selectContainers?.forEach((select) => {
    const options = select.querySelectorAll('.react-select__option');
    const menuList = select.querySelector('.react-select__menu-list');
    const placeholder = select.querySelector('.react-select__placeholder');

    select.addEventListener('click', () => {
        menuList?.classList.toggle('_active');
    })
    menuList?.addEventListener('click', (e) => {
        const option = e.target;
        if(option.classList.contains('react-select__option')) {
            setActiveOption(options, option, placeholder);
        }
    })

    document.addEventListener('click', outsideEvtListener);
    
    function outsideEvtListener(e) {
        if (!e.target.closest('.react-select-container')) {
            menuList?.classList.remove('_active')
        }
    }
})


// Slider


const sliders = document.querySelectorAll('.slider');
const multiSliders = document.querySelectorAll('.multi-slider');
const doubleSliders = document.querySelectorAll('.double-slider');
const paginationSliders = document.querySelectorAll('.pagination-slider');

sliders?.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.prev');
    const next = item.parentNode.querySelector('.next');
    item.classList.add(`slider-${key}`)
    prev?.classList.add(`prev-${key}`);
    next?.classList.add(`next-${key}`);
    $(`.slider-${key}`).slick({
        prevArrow: $(`.prev-${key}`),
        nextArrow: $(`.next-${key}`),
    })
})

paginationSliders?.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.prev');
    const next = item.parentNode.querySelector('.next');
    item.classList.add(`slider-${key}`)
    prev?.classList.add(`prev-${key}`);
    next?.classList.add(`next-${key}`);
    $(`.slider-${key}`).slick({
        prevArrow: $(`.prev-${key}`),
        nextArrow: $(`.next-${key}`),
        dots: true,
        dotsClass: 'Carousel_imgDots dots',
        customPaging : function(slider, i) {
            const img = $(slider.$slides[i]).find('.Carousel_imgCarousel').attr('src');
            return `<a><img src="${img}" class="Carousel_imgDot dot"></a>`;
        },
        responsive: [
            {
              breakpoint: 961,
              settings: {
                prevArrow: $(`.mini-prev`),
                nextArrow: $(`.mini-next`),
              }
            },
          ]
    });
})

multiSliders?.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.multi-prev');
    const next = item.parentNode.querySelector('.multi-next');
    item.classList.add(`multi-slider-${key}`)
    prev?.classList.add(`multi-prev-${key}`);
    next?.classList.add(`multi-next-${key}`);
    $(`.multi-slider-${key}`).slick({
        prevArrow: $(`.multi-prev-${key}`),
        nextArrow: $(`.multi-next-${key}`),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              }
          ]
    })
})

doubleSliders?.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.double-prev');
    const next = item.parentNode.querySelector('.double-next');
    item.classList.add(`double-slider-${key}`)
    prev?.classList.add(`double-prev-${key}`);
    next?.classList.add(`double-next-${key}`);
    $(`.double-slider-${key}`).slick({
        prevArrow: $(`.double-prev-${key}`),
        nextArrow: $(`.double-next-${key}`),
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    })
})


// Donate sum

const flower = document.querySelector('.Flower_sacrifice');
const flowerRadios = flower?.querySelectorAll('label input');
const inputBlock = document.querySelector('.Input_inputSum');
const input = inputBlock?.querySelector('.Input_inputSum input');

let checkedFlower = flower?.querySelector('.Flower_checked');

flowerRadios?.forEach((radio) => {
    radio.addEventListener('click', () => {
        const label = radio.parentElement;
        label.classList.add('Flower_checked');
        inputBlock.value = radio.value;
        input.value = inputBlock.value;
        checkedFlower.classList.remove('Flower_checked');
        checkedFlower = label;
    })
})

// Tabs

const tabsContainers = document.querySelectorAll('.Tabs_tabRoot');
const mobileMenus = document.querySelectorAll('.react-select-container-red');

function showContent(tabName) {
    const contents = document.querySelectorAll(`[data-tab="${tabName}"]`);
    contents.forEach((content) => {
        content.classList.add('_active');
        $(`.slider`).slick('setPosition')
        $(`.double-slider`).slick('setPosition')
        $(`.multi-slider`).slick('setPosition')
    })
}

function removeContent(currentTabName) {
    const currentContents = document.querySelectorAll(`[data-tab="${currentTabName}"]`);
    currentContents.forEach((currentContent) => {
        currentContent.classList.remove('_active');
    })
}

function setPlaceholder(container, tab) {
    const placeholder = container.querySelector('.Tabs_placeholder');
    if(placeholder) {
        placeholder.textContent = tab.textContent;
    }
}

function setActiveTab(tab) {
    tab.classList.add('Tabs_selected');
    const similarTabs = document.querySelectorAll(`[data-tab-btn="${tab.dataset.tabBtn}"]`);
    similarTabs.forEach((tab) => {
        tab.classList.add('Tabs_selected');
    })
}

function removeActiveTab(currentTab) {
    currentTab.classList.remove('Tabs_selected');
    const similarTabs = document.querySelectorAll(`[data-tab-btn="${currentTab.dataset.tabBtn}"]`);
    similarTabs.forEach((tab) => {
        tab.classList.remove('Tabs_selected');
    })
}

tabsContainers?.forEach((container) => {
    const tabs = container.querySelectorAll('.Tabs_tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            let currentTab = container.querySelector('.Tabs_selected');
            removeActiveTab(currentTab);
            setActiveTab(tab);
            setPlaceholder(container, tab);
            removeContent(currentTab.dataset.tabBtn)
            showContent(tab.dataset.tabBtn);
        })
    })
})

mobileMenus?.forEach((menu) => {
    const list = menu.querySelector('.react-select-red__menu');
    menu.addEventListener('click', () => {
        list.classList.toggle('_active');
    })
})

// Toggle buttons

const toggleBtns = document.querySelectorAll('.Toggle_toggle');

toggleBtns?.forEach((btn) => {
    btn.addEventListener('click', () => {
        for(let i = 0; i < toggleBtns.length; i++) {
            toggleBtns[i].classList.remove('Toggle_selected')
        }
        btn.classList.add('Toggle_selected');
    })
})

const players = Plyr.setup('.js-player');