//create screen fill function to replace background with selected color
const color = document.getElementById('colors');
const screenColor = document.getElementById('screen');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');


const savedColor = localStorage.getItem('selectedColor');
if (savedColor){
    screenColor.style.backgroundColor = savedColor;
}

btnLeft.addEventListener('click', () =>{
    const selectedColor = color.value;
    screenColor.style.backgroundColor = selectedColor;

    localStorage.setItem('selectedColor', selectedColor);
});

btnRight.addEventListener('click', () =>{
    screenColor.style.backgroundColor = 'antiquewhite';

    localStorage.removeItem('selectedColor');
})

//create on mousedown function to place color
