# Substring

Extract from user-provided string a substring defined by its first and last element number.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<section>` |`id='user-interface'` | Contains elements for user input |
|`<input>` |`name='string' class='input-field' placeholder="enter some text"` | Text field for the user input|
|`<input>` |`name='begin' class='input-field' type='number' placeholder="begin"` | Text field to  define the first element number|
|`<input>` |`name='end' class='input-field' type='number' placeholder="end"` | Text field to define the last element number|
|`<code>` |`id='program-output'` |Output for the result |

## Styling

| class name | description | role |
| --- | --- | --- |
|`.input-field` | input text form | make text visualization more suitable|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'change'` |`'user-input'` |`displaySubString` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`displaySubString(event)` |Event: a user-triggered event | Boolean: should the browser continue as normal? | Show the result of extracting a substring |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`getPartialString(str, beginIndex, endIndex)` | str( _String_ ), beginIndex( _Number_ ), endIndex( _Number_ )| _String_ | Extract from input string substring with the begin and end index specified|

