

export function rotate(allgrid, setGrids, axis, clockwise) {

    if (axis[0] === 'row') {
        rowRotate(axis[1], clockwise, allgrid);
    } else {
        columnRotate(axis[1], clockwise, allgrid);
    }
    console.log('hi');
    setGrids([...allgrid]);
}


function rotateGrid(grid, clockwise = true) {
    const cube = grid.length;
    let rotated = Array.from({ length: cube }, () => Array(cube).fill(null));

    for (let i = 0; i < cube; i++) {
        for (let j = 0; j < cube; j++) {
            if (clockwise) {
                rotated[i][j] = grid[cube - j - 1][i];
            } else {
                rotated[i][j] = grid[j][cube - i - 1];
            }
        }
    }
    return rotated;
}

function copyColumn(grid1, grid2, col) {
    for (let i = 0; i < grid1.length; i++) {
        grid1[i][col] = grid2[i][col];
    }
}

function columnRotate(col, clockwise, allgrid) {
    const grids = [0, 3, 1, 2]; // front, bottom, back, top
    const remgrids = [4, 5]; // left and right sides of the cube
    if (clockwise) {
        const tmp = JSON.parse(JSON.stringify(allgrid[grids[grids.length - 1]]));
        copyColumn(allgrid[grids[grids.length - 1]], allgrid[grids[0]], col);
        copyColumn(allgrid[grids[0]], allgrid[grids[1]], col);
        copyColumn(allgrid[grids[1]], allgrid[grids[2]], col);
        copyColumn(allgrid[grids[2]], tmp, col);
    } else {
        const tmp = JSON.parse(JSON.stringify(allgrid[grids[0]]));
        copyColumn(allgrid[grids[0]], allgrid[grids[grids.length - 1]], col);
        copyColumn(allgrid[grids[grids.length - 1]], allgrid[grids[grids.length - 2]], col);
        copyColumn(allgrid[grids[grids.length - 2]], allgrid[grids[grids.length - 3]], col);
        copyColumn(allgrid[grids[grids.length - 3]], tmp, col);
    }

    if (col === 0) {
        const newGrid = rotateGrid(allgrid[4], !clockwise); // rotating left side of the cube
        allgrid[4] = newGrid;
    } else if (col === 2) {
        const newGrid = rotateGrid(allgrid[5], clockwise); // rotating right side of the cube
        allgrid[5] = newGrid;
    }
}

function rowRotate(row, clockwise, allgrid) {
    const grids = [0, 5, 1, 4]; // front, right, back, left
    const remgrids = [2, 3]; // top, bottom

    if (clockwise) {
        let tmp = [...allgrid[grids[0]][row]];
        for (let i = grids.length - 1; i >= 0; i--) {
            let current = [...allgrid[grids[i]][row]];
            allgrid[grids[i]][row] = tmp;
            tmp = current;
        }
    } else {
        let tmp = [...allgrid[grids[grids.length - 1]][row]];
        for (let i = 0; i < grids.length; i++) {
            let current = [...allgrid[grids[i]][row]];
            allgrid[grids[i]][row] = tmp;
            tmp = current;
        }
    }

    if (row === 0) {
        const newGrid = rotateGrid(allgrid[2], clockwise); // rotating top side of the cube
        allgrid[2] = newGrid;
    } else if (row === 2) {
        const newGrid = rotateGrid(allgrid[3], !clockwise); // rotating bottom side of the cube
        allgrid[3] = newGrid;
    }
}

function rotateCube(axis, clockwise, allgrid) {
    if (axis[0] === 'row') {
        rowRotate(axis[1], clockwise, allgrid);
    } else {
        columnRotate(allgrid, axis[1], clockwise);
    }
}