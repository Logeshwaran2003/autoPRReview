function arrangeCircles(sheetWidth, sheetHeight, circleDiameter) {
    let positions = [];
    let row = 0;
    let col = 0;
    let totalCircles = 0;
    
    while (row * circleDiameter < sheetHeight) {
        col = 0;
        while (col * circleDiameter < sheetWidth) {
            let x = col * circleDiameter + circleDiameter / 2;/
            let y = row * circleDiameter + circleDiameter / 2;//
            
            positions.push({ x: x, y: y });
            totalCircles++;
            col++;
        }
        row++;
    }
    
    console.log(`Circles per row: ${col}`);
    console.log(`Circles per column: ${row}`);
    console.log(`Total circles: ${totalCircles}`);
    
    return positions;
}

// Example usage
const sheetWidth = 500;  // Sheet width in pixels
const sheetHeight = 300; // Sheet height in pixels
const circleDiameter = 50; // Circle diameter in pixels
const result = arrangeCircles(sheetWidth, sheetHeight, circleDiameter);
console.log("Circle Positions:", result);
