let waterLevel = 0;
let plantImg = null;
let number = 0

function plantSeed() {

    waterLevel = 0;
    plantImg = document.createElement('img');
    plantImg.src = 'stage0.png'
    plantImg.style.width = '40px'
    plantImg.style.marginRight = '10px'
    plantImg.style.left = '30px'
    plantImg.style.top = '30px'
    document.getElementById('soil').appendChild(plantImg);
    if (plantImg.src !== `stage0.png`) {
        plantImg.src = 'stage0.png'
        waterLevel = 0;
        number = 0
    }
    plantImg.addEventListener('click', function() {
        waterLevel += 1;
        if (waterLevel > 6) {
            waterLevel = 6
        }
        updatePlantStage()
    })
    updatePlantStage()
}

function updatePlantStage(){ 
    if (number >= 5) {
        plantImg.src =`stage5.png`
    } else if (number === 4) {
        plantImg.src = `stage4.png`
    } else if (number === 3) {
        plantImg.src = `stage3.png`
    } else if (number === 2) {
        plantImg.src = `stage2.png`
    } else if (number === 1) {
        plantImg.src = `stage1.png`
    } 
}

setInterval(updatePlantStage(), 1000)

setInterval(function() {
    if (plantImg && waterLevel > 0) {
        waterLevel -= 1
        updatePlantStage()
    }
}, 50000);

setInterval(function() {
    if (waterLevel >= 3) {
        number += 1
    } else {
        plantImg.src = `stage6.png`
    }

}, 60000)

window.onload = function() {
    alert('Make sure to plant only one plant at a time')
}