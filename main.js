//create screen fill function to replace background with selected color
const color = document.getElementById('colors');
const screenColor = document.getElementById('screen');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

const savedColor = localStorage.getItem('selectedColor');
if (savedColor) {
    screenColor.style.backgroundColor = savedColor;
}

btnLeft.addEventListener('click', () => {
    const selectedColor = color.value;
    screenColor.style.backgroundColor = selectedColor;

    localStorage.setItem('selectedColor', selectedColor);
});

let isDrawing = false;

screenColor.addEventListener('mousedown', () => {
    isDrawing = true;
});

screenColor.addEventListener('mouseup', () => {
    isDrawing = false;
});

screenColor.addEventListener('mousemove', drawPixel);

function drawPixel(event) {
    if (isDrawing) {
        const selectedColor = color.value;
        const dot = document.createElement('div');
        dot.className = 'pixels';
        dot.style.backgroundColor = selectedColor;

        const rect = screenColor.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        dot.style.left = offsetX + 'px';
        dot.style.top = offsetY + 'px';

        screenColor.appendChild(dot);
    }
}

btnRight.addEventListener('click', () => {
    const newColor = 'antiquewhite';
    screenColor.style.backgroundColor = newColor;
    localStorage.setItem('selectedColor', newColor);
});
