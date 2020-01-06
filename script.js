
// a function that will add a row to the grid

let amountOfRows = 1;
let amountOfColumns = 2;

let defaultColor = "#96e3c0";

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
        let cell = document.createElement("td");            // td element is created
        newRow.appendChild(cell);                           // and appended to newRow
    }
    
    mainGrid.appendChild(newRow);                           // append newRow to mainGrid
    amountOfRows++;                                         // and update the count
}

// once the function is done, need to add the event listener and handler

function addColumn() {
    
    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < amountOfRows; i++) {
        mainGrid.rows[i].appendChild(document.createElement("td")); 
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

function clearCells() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < amountOfRows; i++) {
        for (let j = 0; j < amountOfColumns; j++) {
            mainGrid.rows[i].cells[j].style.backgroundColor = "red";       // CHANGE TO DEFAULTCOLOR 
        }
    }
}

function fillAllCells() {

}

function fillEmptyCells() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < amountOfRows; i++) {
        for (let j = 0; j < amountOfColumns; j++) {

            mainGrid.rows[i].cells[j].style.backgroundColor = "red";       // CHANGE TO DEFAULTCOLOR 
        }
    }
}
