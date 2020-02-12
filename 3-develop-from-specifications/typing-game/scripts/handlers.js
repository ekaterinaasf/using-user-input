function doTheyMatch(event) {
    // reads user input from the event, executes core logic on user inputs, 
    //updates the className of the user-interface to indicate passing/failing, 
    //logs action for developers
    const var1 = event.target.form.target.value;
    const var2 = event.target.form.guess.value;


    //execute core logic
    const result = compareThem(var1, var2);

    // communicate result to user
    //document.body.style = newStyle; return 'background-color: ' + colorCode + ';';
    document.getElementById('user-interface').className = result;
    //document.getElementById('user-interface').innerHTML = typeof result + ': ' + result;

    // log action for developers
    console.log('\n-- user action --');
    console.log('var1:', '(' + typeof var1  + ')', var1);
    console.log('var2:', '(' + typeof var2 + ')', var2);
    //console.log('operator:', '(' + typeof operator + ')', operator);
    console.log('result:', '(' + typeof result + ')', result);

    // tell the browser everything is OK
    return true;
}