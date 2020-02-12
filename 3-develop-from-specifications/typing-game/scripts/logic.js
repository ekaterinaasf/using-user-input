const compareThemTests = [
  { name: 'first', args: [1, 1], expected: 'passing' },
  { name: 'second', args: ['1', 1], expected: 'failing' },
  { name: 'third', args: [1e2, 100], expected: 'passing' },
  { name: 'fourth', args: [NaN, NaN], expected: 'failing' },
  { name: 'fifth', args: [null, undefined], expected: 'failing' },
  { name: 'sixth', args: [undefined, undefined], expected: 'passing' },
  { name: 'seventh', args: [true, false], expected: 'failing' },
  { name: 'eighth', args: [false, true], expected: 'failing' },
  { name: 'ninth', args: [false, false], expected: 'passing' },
];

function compareThem(first, second) {
  if (first === second){
    return 'passing';
  }
  else { return 'failing'; }

}

testing(compareThem, compareThemTests);
