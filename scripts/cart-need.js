const needs = document.querySelectorAll('.CartNeeds_need');

needs.forEach((need) => {
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