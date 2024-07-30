const headerBlock = document.querySelector('.headroom');

let currentPosition = 0;

document.addEventListener('scroll', () => {
    if(currentPosition >= 110) {
        headerBlock.style.position = 'fixed'
        if(this.scrollY < currentPosition) {
            console.log(this.scrollY, currentPosition)
            headerBlock.classList.remove('headroom--disabled-animation');
            headerBlock.style.transform = 'translate3d(0px, 0px, 0px)';
            
        } else {
            headerBlock.style.transform = 'translate3d(0px, -100%, 0px)';
        }
    } else if(currentPosition === 0){
        headerBlock.style.position = 'relative';
        headerBlock.classList.add('headroom--disabled-animation');
    }
    currentPosition = this.scrollY;
})