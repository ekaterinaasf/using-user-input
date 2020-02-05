# Hex Setter

A simple program that allows users to select, then set the background color of the website.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>`| `id='user-interface' class='inputs'`|the section that contains all user interface elements  |
|`<form>` |`class='inputs'` | the form that allows us to handle all user input with one event|
|`<select>` |`name="first"` | this is the drop-down where a user can select first symbol of HEX colour name|
|`<option>` |`value="0"`<br>`value="1"`<br>`value="2"`<br>`value="3"`<br>`value="4"`<br>`value="5"`<br>`value="6"`<br>`value="7"`<br>`value="8"`<br>`value="9"`<br>``value="a"`<br>`value="b"`<br>`value="c"`<br>`value="d"`<br>`value="e"`<br>`value="f"`| a target type for the `colorCodeToStyle` function's first argument |
|`<select>` |`name="second"` | this is the drop-down where a user can select second symbol of HEX colour name|
|`<option>` |`value="0"`<br>`value="1"`<br>`value="2"`<br>`value="3"`<br>`value="4"`<br>`value="5"`<br>`value="6"`<br>`value="7"`<br>`value="8"`<br>`value="9"`<br>``value="a"`<br>`value="b"`<br>`value="c"`<br>`value="d"`<br>`value="e"`<br>`value="f"`| a target type for the `colorCodeToStyle` function's second argument |
|`<select>` |`name="third"` | this is the drop-down where a user can select third symbol of HEX colour name|
|`<option>` |`value="0"`<br>`value="1"`<br>`value="2"`<br>`value="3"`<br>`value="4"`<br>`value="5"`<br>`value="6"`<br>`value="7"`<br>`value="8"`<br>`value="9"`<br>``value="a"`<br>`value="b"`<br>`value="c"`<br>`value="d"`<br>`value="e"`<br>`value="f"`| a target type for the `colorCodeToStyle` function's third argument |
|`<select>` |`name="fourth"` | this is the drop-down where a user can select fourth symbol of HEX colour name|
|`<option>` |`value="0"`<br>`value="1"`<br>`value="2"`<br>`value="3"`<br>`value="4"`<br>`value="5"`<br>`value="6"`<br>`value="7"`<br>`value="8"`<br>`value="9"`<br>``value="a"`<br>`value="b"`<br>`value="c"`<br>`value="d"`<br>`value="e"`<br>`value="f"`| a target type for the `colorCodeToStyle` function's fourth argument |
|`<select>` |`name="fifth"` | this is the drop-down where a user can select fifth symbol of HEX colour name|
|`<option>` |`value="0"`<br>`value="1"`<br>`value="2"`<br>`value="3"`<br>`value="4"`<br>`value="5"`<br>`value="6"`<br>`value="7"`<br>`value="8"`<br>`value="9"`<br>``value="a"`<br>`value="b"`<br>`value="c"`<br>`value="d"`<br>`value="e"`<br>`value="f"`| a target type for the `colorCodeToStyle` function's fifth argument |
|`<select>` |`name="sixth"` | this is the drop-down where a user can select sixth symbol of HEX colour name|
|`<option>` |`value="0"`<br>`value="1"`<br>`value="2"`<br>`value="3"`<br>`value="4"`<br>`value="5"`<br>`value="6"`<br>`value="7"`<br>`value="8"`<br>`value="9"`<br>``value="a"`<br>`value="b"`<br>`value="c"`<br>`value="d"`<br>`value="e"`<br>`value="f"`| a target type for the `colorCodeToStyle` function's sixth argument |
|`<input>` |`type='button' id='user-action' value='set background' class='button' ` | the button used to trigger the event that will change the web page background according the the selected colour|

## Styling

| class name | description | role |
| --- | --- | --- |
|`section .inputs` | sets position & font styling for `<section>`| make input form more user-friendly|
|`.inputs` |center text | make text more visible|
|`.button` | set button with specific margin around it | make button more visible|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'click'` |`id='user-action'` |`setColorHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `setColorHandler(event)`| Event: a user-triggered event| Boolean: should the browser continue as normal? | reads user input from the event, passes input through core logic, renders result for user, logs action for developer, and alerts the browser 'OK' |
## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`colorCodeToStyle(a, b, c, d, e, f)`| set of characters (_String_) to set up the colour code| it takes the desired colour code characters and returns entire HEX colour code| 

