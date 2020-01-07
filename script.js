
// a function that will add a row to the grid

let amountOfRows = 2;
let amountOfColumns = 2;

let color1 = "#96e3c0";
let color2 = "#ffc0cb";
let color3 = "#7e3f12";
let color4 = "#cd3333";
let color5 = "#ee7621";
// let palette = [color1, color2, color3, color4, color5];
let palette = ["default", "algae", "pink", "copper", "red", "tango"]
let colorIndex = 0;
let currentColor = palette[colorIndex];

function addRow() {
    // grab the main table and append a row to it with the same number of columns
    // add an id to the table so we can identify it
    let mainGrid = document.getElementById("main-grid");    // a reference to the grid
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    // make the row to be appended to the table on the DOM
    let newRow = document.createElement("tr");              // element is created, but not linked to DOM
    
    // populate the row with squares/cells aka TD elements
    // loop through the grid's amountofColumns
    for (let i = 0; i < amountOfColumns; i++) {
        var cell = document.createElement("td");
        cell.setAttribute("class", "default");
        newRow.appendChild(cell);                           // and appended to newRow
    }
    
    mainGrid.appendChild(newRow);                           // append newRow to mainGrid
    amountOfRows++;                                         // and update the count
}

function addColumn() {
    
    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < amountOfRows; i++) {
        var cell = document.createElement("td");
        cell.setAttribute("class", "default");
        mainGrid.rows[i].appendChild(cell); 
    }
    amountOfColumns++;
}

function removeRow() {
    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    mainGrid.removeChild(mainGrid.lastChild);
    amountOfRows--;
}

function removeColumn() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < amountOfRows; i++) {
        mainGrid.rows[i].removeChild(mainGrid.rows[i].lastChild); 
    }
    amountOfColumns--;

}

function cycleColor() {
    colorIndex = (colorIndex + 1) % palette.length;
    currentColor = palette[colorIndex];
}

function clearCells() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    /*
    for (let i = 0; i < amountOfRows; i++) {
        for (let j = 0; j < amountOfColumns; j++) {
            mainGrid.rows[i].cells[j].style.backgroundColor = defaultColor;
        }
    }
    */
    
    var items = mainGrid.getElementsByTagName("td");
    for (let i = 0; i < items.length; i++) {
        items[i].className = "default";
    }
}

function fillAllCells() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    /*
    for (let i = 0; i < amountOfRows; i++) {
        for (let j = 0; j < amountOfColumns; j++) {
            mainGrid.rows[i].cells[j].style.backgroundColor = currentColor;
        }
    }
    */
    
    var items = mainGrid.getElementsByTagName("td");
    for (let i = 0; i < items.length; i++) {
        items[i].className = currentColor;
    }
}

function fillEmptyCells() {

    // document.getElementsByTagName("tbody")[0]
    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    /*
    for (let i = 0; i < amountOfRows; i++) {
        for (let j = 0; j < amountOfColumns; j++) {
            if (mainGrid.rows[i].cells[j].style.backgroundColor == defaultColor) {
                mainGrid.rows[i].cells[j].style.backgroundColor = currentColor;
            }
        }
    }
    */
    
    var items = mainGrid.querySelectorAll("td.default");
    for (let i = 0; i < items.length; i++) {
        items[i].className = currentColor;
    }
    
}

/*
window.addEventListener('click', function(event) {
    const target = event.target; // what you clicked on
    if(target.tagName !== 'DIV') {
        return; // not a <div>, stop the function
    }

    const color = target.style.color;
    target.style.color = color? '' : 'red';
});
*/


