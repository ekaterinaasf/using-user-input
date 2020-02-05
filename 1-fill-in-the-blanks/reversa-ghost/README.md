# Reversa Ghost

As a user I can write words and have them appear magically in reverse.  Still not sure why this is helpful.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<section>` |`id='user-interface' class='input-output'` | the section that contains all user interface elements|
|`<textarea>` |`id='user-input' class='editor'` | the area where user should input initial text|
|`<pre>`|`id='output'` |the area where user can see the inverted text |

## Styling

| class name | description | role |
| --- | --- | --- |
|`.editor` |sets position of the user input `<textarea>` | provides more suitable way of input text|
|`.input-output` |sets position for the `<section>` |makes view more natural |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'keyup'`|`id='user-input'` |`reverseItHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`reverseItHandler(event)` |_Event_: a user-generated event | _Boolean_: should the browser continue as normal? | when triggered, this handler take user's input of `<textarea>`, revert it and display below. |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`reverse(str)`|str(_String_) | _String_ |reverse the input and provide it as an output |

