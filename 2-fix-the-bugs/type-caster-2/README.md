# Type Caster 2



## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<section>`|`id='user-interface' class='inputs'`|Contains element for user actions |
|`<form>` | | Contains input field, drop-down menu and button to simplify the input  |
|`<input>` |`name='value' type='text'` |Text field for the user input string |
|`<select>` |`name="type"` | Drop-down menu with the pre-defined elements|
|`<option>` |`value="string"` | Option for casting into a _String_ value |
|`<option>` |`value="number"` | Option for casting into a _Number_ value|
|`<option>` |`value="boolean"` |Option for casting into a _Boolean_ value |
|`<option>` |`value="undefined"` |Option for casting into a _Undefined_ value |
|`<button>` |`type='button' id='user-action' value='Cast it!'` | Button for initiating casting|
|`<code>` |`id='casted-value' class='output'` | Output for the result|

## Styling

| class name | description | role |
| --- | --- | --- |
|`.output` | Style user input bloc| Make the form more user-friendly|
|`.inputs` | Style result output block| Make the result more visible|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'click'` |`'user-action'`| `typeCastHandler`|

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`typeCastHandler(event)` | Event: a user-triggered event| Boolean: should the browser continue as normal? |Show the result of type casting |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`typeCaster(value, type)` | value ( _String_ ), type( _String_ ) | _String_ , _Number_ , _Boolean_ ,_Undefined_ | Cast the value into selected type |
