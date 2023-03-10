
const containers = document.getElementsByClassName("container");
let container = containers[0];
const colorPicker = document.getElementById("colorpicker");
let colour = '#000000';
const btn = document.getElementById("reset");
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");


const CONTAINER_WIDTH = container.style.width = "1000px";
const CONTAINER_HEIGHT = container.style.height = "1000px";
function separateValsColor(event){ 
    const inputVal = event.target.value;
    colour = inputVal;
}

function choosingColor(){
    colorPicker.addEventListener('change', separateValsColor);
}

//choosingColor();
//need to dynamically resize each cell when the rows and cols change - the drawing square has to change as well
function createTable(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < rows * cols; i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        
        const valueWidHei = 1000/rows-1;
        const finalCellWidth = cell.style.width = valueWidHei + "px";
        const finalCellHeight = cell.style.height = valueWidHei + "px";
        container.style.setProperty('--grid-width', finalCellWidth);
        container.style.setProperty('--grid-height', finalCellHeight);
        drawStuff(cell);
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


function removeTable(){
    container.innerHTML = '';
    createTable(slider.value,slider.value);
    sliderValue();
}

function resetTable(){
    btn.addEventListener('click', removeTable);
}

function sliderValue(){
    //createTable(16,16);
    slider.oninput = function() {
        output.innerHTML = this.value;
        container.innerHTML = '';
        createTable(this.value, this.value);  
    }
}

createTable(slider.value,slider.value);
choosingColor();
resetTable();
sliderValue();

