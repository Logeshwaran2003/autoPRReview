function arrangeCircles(sheetWidth, sheetHeight, circleDiameter) {
    const cricPerrow = sheetWidth / circleDiameter
    const circlesPerRow = Math.floor(cricPerrow);
    const circlesPerColumn = Math.floor(sheetHeight / circleDiameter);
    const totalCircles = circlesPerRow * circlesPerColumn;

    console.log(`Circles per row: ${circlesPerRow}`);
    console.log(`Circles per column: ${circlesPerColumn}`);
    console.log(`Total circles: ${totalCircles}`);
    
    let positions = [];
    for (let row = 0; row < circlesPerColumn; row++) {
        for (let col = 0; col < circlesPerRow; col++) {
            positions.push({
                x: col * circleDiameter + circleDiameter / 2,
                y: row * circleDiameter + circleDiameter / 2
            });
        }
    }
    return positions;
}

// Example usage
const sheetWidth = 500;  // Sheet width in pixels
const sheetHeight = 300; // Sheet height in pixels
const circleDiameter = 50; // Circle diameter in pixels
const result = arrangeCircles(sheetWidth, sheetHeight, circleDiameter);
console.log("Circle Positions:", result);
