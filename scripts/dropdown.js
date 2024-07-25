const dropdownBtns = document.querySelectorAll('.dropdown-button');

dropdownBtns.forEach((btn, index) => {
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
