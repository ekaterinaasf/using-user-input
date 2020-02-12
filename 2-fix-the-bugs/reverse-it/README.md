# Reverse It

Reverse a user-provided string when the button is clicked.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<form>` | | Contains elements for user input |
|`<input>` |`name='input' class='input-field'` | Text field for the user input|
|`<input>` |`type='button' id='user-action' value="reverse text" ` | Button to execute pre-defined action |
|`<code>` |`id='program-output'` |Output for the result |

## Styling

| class name | description | role |
| --- | --- | --- |
|`.input-field` | input text form | make text visualization more suitable|
|`#user-action` | action button | make button more impressive|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'click'` |`'user-action'` |`reverseHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`reverseHandler(event)` |Event: a user-triggered event | Boolean: should the browser continue as normal? | Show the result of inverted text |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`reverse(str)` | str( _String_ )| _String_ | Reverse input valued and return the result|

