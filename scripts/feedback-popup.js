const buttons = document.querySelectorAll('.Feedback_btn');
const popup = document.querySelector('.popup')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(true)
        popup.classList.add('_active');
    })
    const closeBtn = popup.querySelector('.react-responsive-modal-closeButton');
    const overlay = popup.querySelector('.PopUp_container');
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('_active');
    })
})