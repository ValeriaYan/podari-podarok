const sidebar = document.querySelector('.Account_sidebar');
const showMoreBtn = document.querySelector('.InfoBlock_more');

showMoreBtn.addEventListener('click', () => {
    sidebar.classList.toggle('_full');
})