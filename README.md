The goal is to test the candidate's experience with React. You will primarily be working on the src/game.jsx file. The candidate will be pair programming with the engineer to complete the game Towers of Hanoi. Candidate will be giving directions while engineer will be driving. 

The skeleton contains the project from which you will be working; you can reference the solution in the solution folder.

Be sure to run npm install first, otherwise npm start won't work. 

## Available Scripts

In either project directory skeleton/solution, you can run:

### `npm install`

Run this command to install the node_modules dependencies

### `npm start`

Runs the game in the development mode.<br />
The finished Towers of Hanoi game is in the solutions folder. 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
You can hit a hard refresh on the browser to reset the game.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
By the end of the pairing session, ideally the candidate will have passed 5 tests.


## Notes

There are many ways to implement Towers of Hanoi, but in this implementation we will be focusing on these methods: handleClick, moveDisk, and isGameOver. 

handleClick is invoked whenever you click on a tower.

moveDisk should move a disk from one tower to the next.

isGameOver checks whether the game is finished. 

The tests will check several cases:
- Bigger disks are not allowed to be placed on top of smaller disks
- Only one disk can be moved at a time. 
- Game will be finished when all disks are ordered correctly on a different tower.

Somethings to check for:
- See if they can setState correctly
- See if they can avoid mutating state (use slice, destructuring, new arrays, etc.)
- How to implement a check to see when game is over
- See if they can write jsx

## State properties

Left, middle, and right should be self-explanatory.

Clicked stores a string that tells which tower has been clicked on. If the candidate
wants to implement things differently they can delete the "clicked" property or set "clicked" to a different data structure.

