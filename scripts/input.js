const inputs = document.querySelectorAll('.Input_inputBlock');

inputs.forEach((input) => {
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

