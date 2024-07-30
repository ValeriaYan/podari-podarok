const headerBlock = document.querySelector('.headroom');

let currentPosition = 0;

document.addEventListener('scroll', () => {
    if(this.scrollY > currentPosition) {
        headerBlock.style.transform = 'translate3d(0px, -100%, 0px)';
    } else {
        headerBlock.style.transform = 'translate3d(0px, 0px, 0px)';
    }
    currentPosition = this.scrollY;
    console.log(currentPosition)
})