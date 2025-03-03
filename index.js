function arrangeCircles(sheetWidth, sheetHeight, circleDiameter) {
    const cricPerrow = sheetWidth / circleDiameter
    const circlesPerRow = Math.floor(cricPerrow);
    const circlesPerColumn = Math.floor(sheetHeight / circleDiameter);
    

