
const containers = document.getElementsByClassName("container");
let container = containers[0];
const colorPicker = document.getElementById("colorpicker");
let colour = '#000000';
const btn = document.getElementById("reset");
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

function separateValsColor(event){ 
    const inputVal = event.target.value;
    colour = inputVal;
}

function choosingColor(){
    colorPicker.addEventListener('change', separateValsColor);
}

choosingColor();

function createTable(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 0; c < cols; c++){
        for(r = 0; r < rows; r++){
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
            drawStuff(cell);
            
        }
    }
}

//createTable(16,16);
const divs = container.querySelectorAll(".grid-item");

function changeBackgroundColour(e){
    if(e.buttons === 1){
        this.setAttribute('style', `background: ${colour};`); 
    }
}

function drawStuff(cell){
    cell.addEventListener("pointerover", changeBackgroundColour);
    cell.addEventListener("pointerdown", changeBackgroundColour);
}

//WHEN RESET BUTTON IS PRESSED, I'D like to RECREATE TABLE WITH CURRENT SLIDER VALUE - FIX THIS  
function removeTable(){
    container.innerHTML = '';

    createTable(16,16);
    //sliderValue();
}

function resetTable(){
    btn.addEventListener('click', removeTable);
}

function sliderValue(){
    //createTable(16,16);
    slider.oninput = function(e) {
        output.innerHTML = this.value;
        container.innerHTML = '';
        createTable(e.target.value, e.target.value);
    }
}

createTable(16,16);
resetTable();
sliderValue();

