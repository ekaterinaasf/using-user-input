function gooooogle(event) {
  // read & process user input
const userQuery = event.target.form.query.value;

  // call the core logic
  const variable = googleURL(userQuery);

  // render results for the user
  //Open a new tab
  window.open(variable);

  // log action for developers
  console.log('\n-- user action --');
  console.log('variable:', '(' + typeof variable + ')', variable);

  // tell the browser everything is OK
  return true;
}
