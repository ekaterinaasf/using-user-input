function reverseItHandler(event) {
  // read & process user input
  const userInput = event.target.value;//target.value???

  // execute core logic
  const reversed = reverse(userInput);

  // display results to user
  document.getElementById('output').innerHTML = reversed;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('output:', '(' + typeof output + ')', output);

  // tell the browser everything is OK
  return true;
}
