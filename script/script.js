
const containers = document.getElementsByClassName("container");
let container = containers[0];
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


function createTable(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 0; c < cols; c++){
        for(r = 0; r < rows; r++){
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        }
    }
}
createTable(16,16);
const divs = container.querySelectorAll(".grid-item");



function drawStuff(){

    divs.forEach(div => div.addEventListener('mouseover', (e) => {
        if(mouseDown){
            div.setAttribute('style', 'background: black;'); 
            console.log(e);
        }
    }));
}



//console.log(container);
drawStuff();