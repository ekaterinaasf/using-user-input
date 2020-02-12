function showResult(event) {
    //receive user defined input
    const var1 = Number(event.target.form.left.value);
    const var2 = Number(event.target.form.right.value);
    const operator = event.target.form.operation.value;

    //execute core logic 
    const result = doMath(operator, var1, var2);
    
    // communicate result to user
    document.getElementById('program-output').innerHTML = typeof result + ': ' + result;

  // log action for developers
  console.log('\n-- user action --');
  console.log('var1:', '(' + typeof var1 + ')', var1);
  console.log('var2:', '(' + typeof var2 + ')', var2);
  console.log('operator:', '(' + typeof operator + ')', operator);
  console.log('result:', '(' + typeof result + ')', result);

  // tell the browser everything is OK
  return true;


}