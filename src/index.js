
import { GridPath } from './pathfinding.js';
export default { GridPath };


// const test = new Array(8 * 8).fill(null).map((x, i) => `${i%8}x${Math.floor(i/8)}`);

// const path = new GridPath(test, 8, 8, 0, 7 + 8 * 7);
// console.log(path);

window.GridPath = GridPath;
