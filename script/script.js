
const containers = document.getElementsByClassName("container");
let container = containers[0];

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