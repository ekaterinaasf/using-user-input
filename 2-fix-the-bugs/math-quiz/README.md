# Math Quiz

A user can study math in JS by entering an expression and testing their predictions.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<input>` |`id='first' class='input-field' placeholder="first number"` | Area to input first expression |
|`<select>` |`id='operation'` | Area including four math operations to select|
|`<option>` |`value="add"` |This option describe add action |
|`<option>` |`value="subtract"` | This option describe subtract action|
|`<option>` |`value="multiply"` | This option describe multiply action |
|`<option>` |`value="divide"` |This option describe divide action |
|`<input>` |`id='second' class='input-field' placeholder="second number"` |Area to input second expression |
|`<p>` |`id='user-action'` | Mouse moving above this area allow to display the result|
|`<code>` | `id='program-output'`| Area to display the a result|

## Styling

| class name | description | role |
| --- | --- | --- |
|`.input-field` | apply predefined width| to make input field more visible|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'mouseover'` | `'user-action'`| showResult |
|`'mouseout'`|`'user-action'` | hideResult |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`showResult()` | Event: a user-triggered event|Boolean: should the browser continue as normal? |Show the result of calculation when mouse is over the paragraph |
|`hideResult()` |Event: a user-triggered event |Boolean: should the browser continue as normal? | Hide the result of calculation when mouse is out of the paragraph|

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`doMath(op, a, b)` |`op(_String_), a(_Number_), b(_Number_)` | _Number_| It takes in a desired operation and two values, and return the result of this operation above these values.|

