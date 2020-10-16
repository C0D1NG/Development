# Maze game

Guide the ball through the maze until you reach the green square. Each level get progressively harder and each round's score is computed by the time left in the timer X the round #.

## How to play?

User can control the ball with these keys and arrows:

- to go 'up' -> W key or up arrow
- to go 'down' -> S key or down arrow
- to go 'right' -> D key or right arrow
- to go 'left' -> A key or left arrow

## Matter JS Terminology

**World** ---> Object that contains all of the different 'things' in our matter app

**Engine** ---> Reads in the current state of the world object, then calculates changes in positions of all the different shapes.

**Runner** ---> Gets the engine and world to work together. Runs about 60 times per second.

**Render** ---> Whenever the engine processes an update, Render will take a look at all the different shapes and show them on the screen.

**Body** ---> A shape that we are displaying. Can be a circle, rectangle, oval, etc.
