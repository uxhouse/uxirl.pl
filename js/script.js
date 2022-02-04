// PROGRESS BAR

const progressBar = document.querySelector('.progressBar');

const setProgress = () => {
    const scrollingPercent = ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100;
    progressBar.style.right = `${100 - scrollingPercent}%`;
}

setProgress();

document.addEventListener('scroll', setProgress);

// PROFIT TILES

const profitTiles = document.querySelectorAll('.profitTile');

profitTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        tile.classList.toggle('profitTile-active');
    })
});

// SLIDER

const rangeInput = document.querySelector('.slider');
const rangeOutput = document.querySelector('.sliderOutput');
const price = document.querySelector('.price');

const prices = {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
    10: 1000,
}

price.innerText = `${prices[5]}zł`;

function handleInputChange(e) {
    const min = e.target.min
    const max = e.target.max
    const val = e.target.value

    rangeOutput.style.left = (val - min) * 100 / (max - min) + '%'
    e.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    price.innerText = `${prices[e.target.value]}zł`;

}

rangeInput.addEventListener('input', handleInputChange);
