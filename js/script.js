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

// STEPS

const stepsIndicators = document.querySelectorAll('.stepIndicator');
const stepsContents = document.querySelectorAll('.stepContent');
const stepsHeading = document.querySelector('.steps .headingWrapper');
const prevStepButton = document.querySelector('#prevStepButton');
const nextStepButton = document.querySelector('#nextStepButton');
const submitButton = document.querySelector('#submitButton');

let activeStep = 1;


const setActiveIndicator = (indicatorNumber) => {
    activeStep = indicatorNumber;
    stepsIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    document.getElementById(`stepIndicator-${indicatorNumber}`).classList.add('active');

    stepsContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`stepContent-${indicatorNumber}`).classList.add('active');

    switch (indicatorNumber) {
        case 1:
            stepsHeading.classList.add('visible');
            prevStepButton.classList.add('hidden');
            nextStepButton.classList.remove('hidden');
            submitButton.classList.add('hidden');
            break;
        case 2:
        case 3:
            stepsHeading.classList.remove('visible');
            prevStepButton.classList.remove('hidden');
            nextStepButton.classList.remove('hidden');
            submitButton.classList.add('hidden');
            break;
        case 4:
            stepsHeading.classList.remove('visible');
            prevStepButton.classList.remove('hidden');
            nextStepButton.classList.add('hidden');
            submitButton.classList.remove('hidden');
            break;
        case 5:
            stepsHeading.classList.remove('visible');
            prevStepButton.classList.add('hidden');
            nextStepButton.classList.add('hidden');
            submitButton.classList.add('hidden');
            break;
        default:
            break;

    }
};

stepsIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => setActiveIndicator(i + 1));
});

nextStepButton && nextStepButton.addEventListener('click', () => {
    setActiveIndicator(activeStep + 1);
})
prevStepButton && prevStepButton.addEventListener('click', () => {
    setActiveIndicator(activeStep - 1);
})


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
if (price) {
    price.innerText = `${prices[5]}zł`;
}

function handleInputChange(e) {
    const min = e.target.min
    const max = e.target.max
    const val = e.target.value

    rangeOutput.style.left = (val - min) * 100 / (max - min) + '%'
    e.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    price.innerText = `${prices[e.target.value]}zł`;

}

rangeInput && rangeInput.addEventListener('input', handleInputChange);

// SWITCH

const switchElement = document.querySelector('.switch .sliderRound');
const switchLabels = document.querySelectorAll('.switchLabel');
const uploadFileContainer = document.querySelector('.uploadFileContainer');
const urlAddressContainer = document.querySelector('.urlAddressContainer');

let switchState = true;

const setSwitchActive = (state) => {
    switchLabels.forEach(label => {
        label.classList.remove('active');
    })
    if (state) {
        switchLabels[0].classList.add('active');
        uploadFileContainer.classList.add('active');
        urlAddressContainer.classList.remove('active');
    } else {
        switchLabels[1].classList.add('active');
        urlAddressContainer.classList.add('active');
        uploadFileContainer.classList.remove('active');
    }
}

if (switchElement && switchLabels && uploadFileContainer && urlAddressContainer) {
    setSwitchActive(switchState);

    switchElement.addEventListener('click', (e) => {
        e.stopPropagation();
        setSwitchActive(!switchState);
        switchState = !switchState;
    })
}

// UPLOAD FILE

const fileInput = document.getElementById('fileInput');
const fileNameInput = document.getElementById('fileName');

fileInput && fileInput.addEventListener('change', function () {
    fileNameInput.value = this.files[0].name;
})

// INFO STEPS

const infoSteps = document.querySelectorAll('.infoStep');

infoSteps && infoSteps.forEach(step => {
    step.addEventListener('click', () => {
        const active = step.classList.contains('active');

        infoSteps.forEach(s => {
            s.classList.remove('active');
        })

        if (active) {
            step.classList.remove('active');
        } else {
            step.classList.add('active');
        }
    })
});
