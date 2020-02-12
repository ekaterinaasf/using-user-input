const doMathTests = [
  { name: 'first', args: ['add', 4, 5], expected: 9 },
  { name: 'second', args: ['subtract', 4, 5], expected: -1 },
  { name: 'third', args: ['multiply', 4, 5], expected: 20 },
  { name: 'fourth', args: ['divide', 4, 5], expected: .8 },
  { name: 'fifth', args: ['toad', 4, 5], expected: 'invalid operation' },
  { name: 'sixth', args: ['', 4, 5], expected: 'invalid operation' },
];

function doMath(op, a, b) {
  switch(op) {
    case 'add':
      return a+b;
      break;
    case 'subtract':
      return a-b;
      break;
    case 'multiply':
      return a*b;
      break;
    case 'divide':
      return a/b;
      break;
    default:
      return 'invalid operation';
  }
}

testing(doMath, doMathTests);
