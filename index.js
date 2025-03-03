function arrangeCircles(sheetWidth, sheetHeight, circleDiameter) {
    const cricPerrow = sheetWidth / circleDiameter
    const circlesPerRow = Math.floor(cricPerrow);
    const circlesPerColumn = Math.floor(sheetHeight / circleDiameter);
    const totalCircles = circlesPerRow * circlesPerColumn;

    console.log(`Circles per row: ${circlesPerRow}`);
    console.log(`Circles per column: ${circlesPerColumn}`);//
    console.log(`Total circles: ${totalCircles}`);

