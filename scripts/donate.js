const donateBtns = document.querySelectorAll('.CardTabs_tab');
const donateForms = document.querySelectorAll('.Donate_form');

donateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        donateBtns.forEach((b) => {
            if(b !== btn) {
                b.classList.remove('CardTabs_selected');
            }
        })
        btn.classList.add('CardTabs_selected');
        donateForms.forEach((form) => {
            console.log(form.dataset.paymentType)
            if(form.dataset.paymentType == btn.dataset.paymentType) {
                form.classList.add('_active');
            } else {
                form.classList.remove('_active');
            }
        })
    })
})