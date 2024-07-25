const radioGroups = document.querySelectorAll('[role="radiogroup"]');

function checkRadio(labels, label) {
    for(let i = 0; i < labels.length; i++) {
        if(labels[i] !== label) {
            labels[i].parentNode.classList.remove('sd-item--checked');
            labels[i].parentNode.classList.remove('sd-radio--checked');
            labels[i].parentNode.classList.add('sd-item--allowhover');
            labels[i].parentNode.classList.add('sd-radio--allowhover');
        }
    }
    label.parentNode.classList.add('sd-item--checked');
    label.parentNode.classList.add('sd-radio--checked');
    label.parentNode.classList.remove('sd-item--allowhover');
    label.parentNode.classList.remove('sd-radio--allowhover');
}

radioGroups.forEach((group) => {
    const labels = group.querySelectorAll('label');
    labels.forEach((label) => {
        label.addEventListener('click', () => {
            checkRadio(labels, label)
        })
    })
})