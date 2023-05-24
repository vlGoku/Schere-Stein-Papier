# Rock Paper Scissor

Thats my Rock-Paper-Scissor with a GUI and a colleagues Code

The HTML is basic with some div classes like

```
    <div class="uebersicht">
    <div class="schaltflaeche">
    <div class="ausgabe">###</div>
    <button class="reset">Reset</button>
```

The reset button resets the game

```
    <button class="reset">Reset</button>
```

The function init() listens to the clicks and acts with them

```
function init()
```

The function myFunc(event) reacts to the click on the symbol and starts the game

```
  function myFunc(event)
```

ComputerPlay is self-explanatory

```
function computerPlay()
```

The PlayRound function plays a single Round and counts the points

```
let playRound = function (playerChoice)
```
