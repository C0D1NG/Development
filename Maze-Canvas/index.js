const {Engine, Render, Runner, World, Bodies, Body, Events} = Matter;

// Maze size
const width = window.innerWidth;
const height = window.innerHeight * 0.9;

// Cell size
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

// create a new engine
const engine = Engine.create();
// disable gravity in y direction
engine.world.gravity.y = 0;

const {world} = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false, //colors
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

//Walls  coordinates - x,y, width, height
const walls = [
  //TOP
  Bodies.rectangle(width / 2, 0, width, 8, {
    isStatic: true,
    render: {fillStyle: 'transparent'},
  }),
  //Bottom
  Bodies.rectangle(width / 2, height, width, 8, {
    isStatic: true,
    render: {
      fillStyle: '#904e95',
    },
  }),
  //LEFT
  Bodies.rectangle(0, height / 2, 8, height, {
    isStatic: true,
    render: {
      fillStyle: '#904e95',
    },
  }),
  //RIGHT
  Bodies.rectangle(width, height / 2, 8, height, {
    isStatic: true,
    render: {fillStyle: '#904e95'},
  }),
];
World.add(world, walls);

//Maze generation - 2 dimensional array

// const grid = [];
// for (let i = 0; i < 3; i++) {
//   grid.push([]);
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(false);
//   }
// }

//shuffle the array
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};
//first array controls rows, second array controls columns
const grid = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
  //if I have visited the cell at [row, column], then return
  if (grid[row][column]) {
    return;
  }
  //mark this cell as being visited, make it true
  grid[row][column] = true;
  //assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left'],
  ]);
  // console.log(neighbors);
  //for each neighbor...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    //see if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    ) {
      continue;
    }

    //if we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    //remove a wall from either horizontals or verticals
    if (direction === 'left') {
      verticals[row][column - 1] = true;
    } else if (direction === 'right') {
      verticals[row][column] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }
    //visit that next cell, recursion
    stepThroughCell(nextRow, nextColumn);
  }
};

stepThroughCell(startRow, startColumn);

// Horizontal Walls
horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2, //horizontal
      rowIndex * unitLengthY + unitLengthY, //vertical
      unitLengthX, //width of 1 cell
      5, //length of the wall
      {
        label: 'wall',
        isStatic: true,
        // customize color
        render: {
          fillStyle: 'red',
        },
      }
    );
    World.add(world, wall);
  });
});

// Vertical Walls
verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,
      {
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red',
        },
      }
    );
    World.add(world, wall);
  });
});

//GOAL
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  // scale with the unit length
  unitLengthX * 0.5,
  unitLengthY * 0.5,
  {
    label: 'goal',
    isStatic: true,
    render: {
      fillStyle: 'green',
    },
  }
);
World.add(world, goal);

//BALL, x y radius, velocity of the ball - speed
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4; //take the smaller
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
  label: 'ball',
  isStatic: true,
  render: {
    fillStyle: 'blue',
  },
});
World.add(world, ball);

document.addEventListener('keydown', (event) => {
  const {x, y} = ball.velocity; //current velocity
  // console.log(x, y);
  //up (up arrow or W)
  if (event.keyCode === 38 || event.keyCode === 87) {
    Body.setVelocity(ball, {x, y: y - 3.5});
  }
  // Right (right arow or D)
  if (event.keyCode === 39 || event.keyCode === 68) {
    Body.setVelocity(ball, {x: x + 3.5, y});
  }
  // Down (down arrow or S)
  if (event.keyCode === 40 || event.keyCode === 83) {
    Body.setVelocity(ball, {x, y: y + 3.5});
  }
  // Left (left arrow or A)
  if (event.keyCode === 37 || event.keyCode === 65) {
    Body.setVelocity(ball, {x: x - 3.5, y});
  }
});

//win condition - collision event
Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach((collision) => {
    const labels = ['ball', 'goal'];
    if (
      //they collide
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      timerStop();
      increaseCells();
      winningMessage();

      // document.querySelector('.winner').classList.remove('hidden');
      world.gravity.y = 1; //turn back gravity
      Body.setStatic(ball, true);
      world.bodies.forEach((body) => {
        if (body.label === 'wall') {
          Body.setStatic(body, false); //remove static flag
        }
      });
    }
  });
});
