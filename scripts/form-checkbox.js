const checkboxGroups = document.querySelectorAll('[role="listbox"]');

function checkCheckbox(label) {
    label.parentNode.classList.toggle('sd-item--checked');
    label.parentNode.classList.toggle('sd-checkbox--checked');
    label.parentNode.classList.toggle('sd-item--allowhover');
    label.parentNode.classList.toggle('sd-checkbox--allowhover');
}

checkboxGroups.forEach((group) => {
    const labels = group.querySelectorAll('label');
    labels.forEach((label) => {
        label.addEventListener('click', (e) => {
            checkCheckbox(label)
        })
        label.firstElementChild.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    })
})
