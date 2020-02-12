function shaddowMouse(event) {
    // reads current mouse coordinates from the event, 
    //formats the coordinates to a CSS string (`left` & `top`), 
    //then resets the style property for the `follower` DOM element.
    const var1 = event.x;
    const var2 = event.y;


    //execute core logic
    const result = coordinatesToStyle(var1, var2);

    // communicate result to user
    //document.body.style = newStyle; 
    document.getElementById('follower').style.cssText = result;
    //document.getElementById('user-interface').innerHTML = typeof result + ': ' + result;

    // log action for developers
    console.log('\n-- user action --');
    console.log('X coordinate:', '(' + typeof var1  + ')', var1);
    console.log('Y coordinate:', '(' + typeof var2 + ')', var2);
    console.log('result:', '(' + typeof result + ')', result);

    // tell the browser everything is OK
    return true;
}