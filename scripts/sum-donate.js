const flower = document.querySelector('.Flower_sacrifice');
const flowerRadios = flower.querySelectorAll('label input');
const inputBlock = document.querySelector('.Input_inputSum');
const input = inputBlock.querySelector('.Input_inputSum input');

let checkedFlower = flower.querySelector('.Flower_checked');

flowerRadios.forEach((radio) => {
    radio.addEventListener('click', () => {
        const label = radio.parentElement;
        label.classList.add('Flower_checked');
        inputBlock.value = radio.value;
        input.value = inputBlock.value;
        checkedFlower.classList.remove('Flower_checked');
        checkedFlower = label;
    })
})