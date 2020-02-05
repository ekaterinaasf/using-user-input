# Selecting Buttons

Selecting a button will display the button text in  center of the screen.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
|`<section>` |`id='user-interface'` | the section that contains all `<div>` elements|
| `<div>`| `id='red'`| sets the `<div>`'s class to the `#red` class |
| `<div>`| `id='orange'`| sets the `<div>`'s class to the `#orange` class |
| `<div>`| `id='blue'`| sets the `<div>`'s class to the `#blue` class |
| `<div>`| `id='green'`| sets the `<div>`'s class to the `#green` class |
| `<div>`| `id='yellow'`| sets the `<div>`'s class to the `#yellow` class |
| `<div>`| `id='gray'`| sets the `<div>`'s class to the `#gray` class |
| `<div>`| `id='black'`| sets the `<div>`'s class to the `#black` class |


## Styling

| class name | description | role |
| --- | --- | --- |
|`section` |sets position for the blocks | |
| `#red`| sets another position for the block| applies specific user selected action|
|`#orange` |sets another position for the block| applies specific user selected action|
|`#blue` |sets another position for the block| applies specific user selected action|
|`#green`  |sets another position for the block| applies specific user selected action|
|`#yellow` |sets another position for the block| applies specific user selected action|
|`#gray` | sets another position for the block| applies specific user selected action|
|`#black` | sets another position for the block| applies specific user selected action|

## Listeners

| type | attached to | callback |
| --- | --- | --- |
|`'mouseenter'` | `div[i]`| `setBackground`|
|`'mouseout'` | `div[i]` | `unsetBackground`|

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`setBackground(event)` | _Event_: a user-generated event | _Boolean_: should the browser continue as normal? | when triggered, this handler determines which div was `mouseenter`ed, uses it's id to generate a new colour identifier, and assigns that to background parameter. The action is logged to the developer and the Browser is told to continue as normal.|
| --- | --- | --- | --- |
|`unsetBackground(event)` | _Event_: a user-generated event | _Boolean_: should the browser continue as normal? | when triggered, this handler determines which div was `mouseout`ed, uses it's id to generate to change colour to the default `white` one.|

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|`filterColors(color)` | color(_String_): the colour unique identifier | _String_: A new colour identifier | this function returns the color identifier associated with a given unique identifier |


