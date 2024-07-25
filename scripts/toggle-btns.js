const toggleBtns = document.querySelectorAll('.Toggle_toggle');

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        for(let i = 0; i < toggleBtns.length; i++) {
            toggleBtns[i].classList.remove('Toggle_selected')
        }
        btn.classList.add('Toggle_selected');
    })
})
