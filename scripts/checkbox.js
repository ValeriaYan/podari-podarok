const checkboxes = document.querySelectorAll('.checkbox input');

checkboxes.forEach((input) => {
    input.addEventListener('click', () => {
        input.parentNode.classList.toggle('_active')
    })
})