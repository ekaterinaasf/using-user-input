const googleURLTests = [
  { name: 'first', args: ['money'], expected: 'https://www.google.com/search?q=money' },
  { name: 'second', args: [''], expected: 'https://www.google.com/search?q=' },
  { name: 'third', args: ['javascript'], expected: 'https://www.google.com/search?q=javascript' },
  { name: 'fourth', args: ['1'], expected: 'https://www.google.com/search?q=1' },
  { name: 'fifth', args: ['hackyourfuture'], expected: 'https://www.google.com/search?q=hackyourfuture'},
  { name: 'sixth', args: ['null'], expected: 'https://www.google.com/search?q=null' },
  { name: 'seventh', args: ['true'], expected: 'https://www.google.com/search?q=true' },
  { name: 'eighth', args: ['error'], expected: 'https://www.google.com/search?q=error' },
  { name: 'ninth', args: ['Google API'], expected: 'https://www.google.com/search?q=Google API' },
  { name: 'tenth', args: ['last one'], expected: 'https://www.google.com/search?q=last one' },
];

function googleURL(searchQuery) { 
  return ('https://www.google.com/search?q='+searchQuery);

}
//https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters

testing(googleURL, googleURLTests);
