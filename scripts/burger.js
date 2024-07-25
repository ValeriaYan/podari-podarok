const burgerIcon = document.querySelector('.Header_contextButtonMin');
const burger = document.querySelector('.Mobile_root');
const header = document.querySelector('.Header_headerRoot');

burgerIcon.addEventListener('click', () => {
    burger.classList.toggle('Mobile_opened');
    if(burger.classList.contains('Mobile_opened')) {
        document.body.style.overflow = 'hidden';
        header.style.backgroundColor = 'var(--primary)';
    }
    if(!burger.classList.contains('Mobile_opened')) {
        document.body.style.overflow = 'auto';
        header.style.backgroundColor = 'var(--white)';
    }
})