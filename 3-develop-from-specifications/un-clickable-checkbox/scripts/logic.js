const coordinatesToStyleTests = [
  { name: 'first', args: [3, 5], expected: 'left: 3px;\n top: 5px;' },
  { name: 'second', args: [333, 522], expected: 'left: 333px;\n top: 522px;' },
  { name: 'third', args: [223, 335], expected: 'left: 223px;\n top: 335px;' },
  { name: 'fourth', args: [1223, 903], expected: 'left: 1223px;\n top: 903px;' },
  { name: 'fifth', args: [0, 17], expected: 'left: 0px;\n top: 17px;' },
];

function coordinatesToStyle(x, y) {
  //takes in the mouse coordinates and returns a CSS string to reposition the checkbox
  //x (_Number): number of pixels left. 
  //y (_Number): number of pixels from the top
  return 'left: ' + x + 'px;\n top: ' + y +'px;';
}

testing(coordinatesToStyle, coordinatesToStyleTests);
