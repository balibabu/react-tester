export function updateGrid(setGrid, row, col, newValue) {
    setGrid((prev) => {
        const oldGrid = [...prev]
        oldGrid[row][col] = newValue;
        return oldGrid;
    })
}