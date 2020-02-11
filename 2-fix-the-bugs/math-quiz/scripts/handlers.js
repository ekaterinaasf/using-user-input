function showResult() {
  // read user input
  //const firstNumberValue = document.getElementById('first-number').value;
  //replaced by 'first'
  const firstNumberValue = document.getElementById('first').value;
  const firstNumber = Number(firstNumberValue);

  const operation = document.getElementById('operation').value;

  //const secondNumberValue = document.getElementById('second-number').value;
  //replaced by 'second'
  const secondNumberValue = document.getElementById('second').value;
  const secondNumber = Number(secondNumberValue);

  // execute core logic
  const result = doMath(operation, secondNumber, firstNumber);

  // communicate result to user
  //convert result to string??
  document.getElementById('program-output').innerHTML = result;

  // log action for developers
  console.log('\n-- user action --');
  console.log('firstNumber:', '(' + typeof firstNumber + ')', firstNumber);
  console.log('operation:', '(' + typeof operation + ')', operation);
  console.log('secondNumber:', '(' + typeof secondNumber + ')', secondNumber);
  console.log('result:', '(' + typeof result + ')', result);

  // for the browser
  return true;
}


function hideResult() {
  // re-render user interface
  document.getElementById('program-output').innerHTML = '';

  // log action
  console.log('\n-- user action --');
  console.log('cleared program output');

  // for the browser
  return true;
}
