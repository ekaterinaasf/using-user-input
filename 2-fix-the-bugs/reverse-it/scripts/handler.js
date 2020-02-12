function reverseHandler(event) {
  // read user input
  const form = event.target.form;
  const userInput = form.input.value;

  // execute core logic
  const reversed = reverse(userInput);

  // communicate result to user
  document.getElementById('program-output').innerHTML = reversed;

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', userInput);
  console.log('reversed:', reversed);

  // for the browser
  return true;
}
