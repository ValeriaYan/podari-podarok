const selectContainers = document.querySelectorAll('.sv-dropdown_select-wrapper');
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


selectContainers.forEach((select) => {
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