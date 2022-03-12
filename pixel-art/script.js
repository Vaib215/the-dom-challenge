let grid = document.querySelector('#grid');
let cell = null;
let rows=null;
let isMouseClicked = false

function pixelArt(el,rows,columns){
    let griditem="";
    for(let i=0;i<rows;i++){
        griditem+=`<div class="grid-row">`;
        griditem=cols(griditem,columns);
        griditem+=`</div>`
    }
    el.innerHTML = griditem;
    rows = document.querySelectorAll('.grid-row');
    rows[9].innerHTML= colorCols(columns);
    let colors = rows[9].querySelectorAll(".cell");
    colors.forEach(function(item) {
        item.addEventListener('click', function (e) {
            selectedColor=(e.target.style.backgroundColor);
        });
    });
    cell = document.querySelectorAll('.grid-col');
    cell.forEach(function(item) {
        item.addEventListener('click', function (e) {
            e.target.style.backgroundColor= selectedColor;
            isMouseClicked=false
        });
        item.addEventListener('mousedown', mouseDownEvent);
        item.addEventListener('mousemove', mouseMoveEvent);
        item.addEventListener('mouseup', mouseUpEvent);
        item.addEventListener('touchstart', mouseDownEvent);
        item.addEventListener('touchend', mouseUpEvent);
    });
}

document.addEventListener('mouseover', (event)=> {
    if (event.target.classList.contains("grid")){
        isMouseClicked=false
    }
});

const mouseDownEvent = (e)=> {
    e.target.style.backgroundColor= selectedColor;
    isMouseClicked = true
}

const mouseMoveEvent = (e)=> {
    if (isMouseClicked) {
        e.target.style.backgroundColor= selectedColor;
    }
}

const mouseUpEvent = (e)=> {
    isMouseClicked = false
}

function colorCols(col) {
    let str="";
    for (let i = 0; i < col; i++) {
        let hue= Math.floor(Math.random() * 256); 
        str+=`<div class="grid-col10 cell" style="background-color:hsl(${hue}, 100%, 75%); cursor:pointer"></div>`
    }
    return str
}

function cols(griditem,columns){
    for (let i = 0; i < columns; i++) {
        griditem+=`<div class="grid-col cell"></div>`    
    }
    return griditem;
}



pixelArt(grid,10,10);