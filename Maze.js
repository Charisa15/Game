// Setup game variables
const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const blockSize = 25; // Block size for each maze square
const rows = 20; // Number of rows in the maze
const cols = 20; // Number of columns in the maze

// Maze data (1: wall, 0: path, 2: start, 3: finish)
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 3],
];

// Player starting position
let playerPos = { x: 1, y: 1 };

// Game draw and setup functions
function drawMaze() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * blockSize;
            const y = row * blockSize;
            if (maze[row][col] === 1) {
                ctx.fillStyle = '#333'; // Wall
                ctx.fillRect(x, y, blockSize, blockSize);
            } else if (maze[row][col] === 0) {
                ctx.fillStyle = '#fff'; // Path
                ctx.fillRect(x, y, blockSize, blockSize);
            } else if (maze[row][col] === 2) {
                ctx.fillStyle = '#00f'; // Start
                ctx.fillRect(x, y, blockSize, blockSize);
            } else if (maze[row][col] === 3) {
                ctx.fillStyle = '#0f0'; // Finish
                ctx.fillRect(x, y, blockSize, blockSize);
            }
        }
    }

    // Draw player
    ctx.fillStyle = '#f00'; // Player (red)
    ctx.fillRect(playerPos.x * blockSize, playerPos.y * blockSize, blockSize, blockSize);
}

// Key event for player movement
document.addEventListener('
