const inquirer = require('inquirer');
const svgBuilder = require('svg-builder');

async function createLogo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const { text, textColor, shape, shapeColor } = answers;

  // Create an SVG file using the svg-builder library (or any other SVG library of your choice)
  const svg = svgBuilder.createSVG({
    width: 300,
    height: 200,
  });

  // Add text and shape to the SVG
  svg.addText({
    text,
    x: 150,
    y: 100,
    fill: textColor,
  });

  if (shape === 'circle') {
    svg.addCircle({
      cx: 150,
      cy: 100,
      r: 50,
      fill: shapeColor,
    });
  } else if (shape === 'triangle') {
    // Add triangle code here
  } else if (shape === 'square') {
    // Add square code here
  }

  // Save the SVG to a file named 'logo.svg'
  svg.toFile('logo.svg');

  console.log('Generated logo.svg');
}

createLogo();