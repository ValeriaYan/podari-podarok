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

selectContainers.forEach((select) => {
    const options = select.querySelectorAll('.react-select__option');
    const menuList = select.querySelector('.react-select__menu-list');
    const placeholder = select.querySelector('.react-select__placeholder');

    select.addEventListener('click', () => {
        menuList.classList.toggle('_active');
    })
    menuList.addEventListener('click', (e) => {
        const option = e.target;
        if(option.classList.contains('react-select__option')) {
            setActiveOption(options, option, placeholder);
        }
    })

    document.addEventListener('click', outsideEvtListener);
    
    function outsideEvtListener(e) {
        if (!e.target.closest('.react-select-container')) {
            menuList.classList.remove('_active')
        }
    }
})