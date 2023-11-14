function createSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
  
    let shapeElement = '';
  
    if (shape === 'circle') {
      shapeElement = `<circle cx="50%" cy="50%" r="40%" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
      shapeElement = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
      shapeElement = `
        <polygon points="150,20 30,180 270,180" fill="${shapeColor}" />
      `;
    } else {
      // Handle other shapes or provide a default shape if needed
      shapeElement = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
    }
  
    // Define SVG content using user input
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="50%" y="30%" dy="1em" text-anchor="middle" fill="${textColor}" font-size="40" font-weight="bold">${text}</text>
      </svg>
    `;
  
    return svgContent;
  }
  
  module.exports = { createSVG };