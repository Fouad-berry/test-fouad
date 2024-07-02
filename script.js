function generateTable() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const container = document.getElementById('table-container');
    container.innerHTML = '';

    const table = document.createElement('table');
    let values = Array.from({ length: height }, () => Array(width).fill(''));
    let counter = 0;

    for (let start = 0; start < width; start++) {
        let col = start;
        for (let row = 0; row < height; row++) {
            if (col < width && row < height) {
                values[row][col] = counter++;
                col++;
            } else {
                break;
            }
        }
    }

    for (let start = 1; start < height; start++) {
        let row = start;
        for (let col = 0; col < width; col++) {
            if (row < height && col < width) {
                values[row][col] = counter++;
                row++;
            } else {
                break;
            }
        }
    }

    for (let i = 0; i < height; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('td');
            cell.textContent = values[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}
