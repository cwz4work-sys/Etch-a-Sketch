const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'Modify';
button.style.marginBottom = '10px';
button.style.padding = '12px 20px';

function setNewGrid() {
    const answer = prompt('How many squares per side for the grid?', '16');
    if (answer > 100) {
        alert('Maximum number of squares per side is 100!')
    } else if (Number.isFinite(+answer)) {
        removeGrid();
        drawGrid(+answer);
    } else {
        alert('Enter a valid number!')
    }
}
button.addEventListener('click', () => setNewGrid());

const container = document.querySelector('.container');
body.insertBefore(button, container);

function drawGrid(newDimen) { 
    const gridDimen = container.clientHeight / newDimen;
    for (let index = 1; index <= newDimen; index++) {
        const div = document.createElement('div');
        div.classList.add('column');
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.width = `${gridDimen}px`;
        container.appendChild(div);
        for (let rowIndex = 1; rowIndex <= newDimen; rowIndex++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.style.boxSizing = 'border-box';
            rowDiv.style.height = `${gridDimen}px`;
            rowDiv.style.border = 'black solid 0.5px';
            rowDiv.addEventListener('mouseenter', () => rowDiv.style.backgroundColor = `rgb(${randRgb()}, ${randRgb()}, ${randRgb()})`);
            div.appendChild(rowDiv);
        }
    }
}

function removeGrid() {
    const rows = document.querySelectorAll('.row');
    const columns = document.querySelectorAll('.column');
    remove(columns);
    remove(rows);
}

function remove(nodeList) {
    nodeList.forEach(elem => elem.remove());
}

function randRgb() {
    return Math.floor(Math.random() * 256);
}

drawGrid(16);