const container = document.querySelector('.container');
const gridDimen = container.clientHeight / 16;

for (let index = 1; index <= 16; index++) {
    const column = `column-${index}`;
    const div = document.createElement('div');
    div.classList.add(column);
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.width = `${gridDimen}px`;
    container.appendChild(div);
    for (let rowIndex = 1; rowIndex <= 16; rowIndex++) {
        const row = `row-${rowIndex}`;
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(row);
        rowDiv.style.boxSizing = 'border-box';
        rowDiv.style.height = `${gridDimen}px`;
        rowDiv.style.border = 'black solid 0.5px';
        div.appendChild(rowDiv);
    }
}
