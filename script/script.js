
const containers = document.getElementsByClassName("container");
let container = containers[0];
const colorPicker = document.getElementById("colorpicker");
let colour = '#000000';
const btn = document.getElementById("reset");


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

createTable(16,16);
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


// THIS DOESNT WORK - FIX IT
function removeTable(){
    container.innerHTML = '';
    createTable(16,16);
}

function resetTable(){
    btn.addEventListener('click', removeTable);
}
resetTable();
