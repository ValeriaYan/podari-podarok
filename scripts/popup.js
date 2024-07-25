const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    const link = popup.previousElementSibling;
    link.addEventListener('click', () => {
        popup.classList.add('_active');
    });
    const closeBtn = popup.querySelector('.react-responsive-modal-closeButton');
    const overlay = popup.querySelector('.PopUp_container');
    console.log(overlay)
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('_active');
    })
    overlay.addEventListener('click', (e) => {
        if(!e.target.closest('.PopUp_modal')) {
            popup.classList.remove('_active');
        }
    })

})