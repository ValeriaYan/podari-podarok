const needsBtnsContainer = document.querySelector('.Family_needsBtns');
const needsBtns = needsBtnsContainer.querySelectorAll('.NeedCategory_root');

needsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        needsBtnsContainer.style.display = 'none';
        const needsList = document.querySelector(`[data-needs='${btn.dataset.needsBtn}']`);
        needsList.classList.add('_active');
        
        const backButton = needsList.querySelector('.Family_needBack');
        backButton.addEventListener('click', () => {
            needsList.classList.remove('_active');
            needsBtnsContainer.style.display = 'flex';
        })
    })
})