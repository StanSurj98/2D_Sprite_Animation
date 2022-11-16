// ----- Canvas -----
const canvas = document.getElementById("canvas-1");
// Define the 2d context, with ctx, we can now draw anything inside
const ctx = canvas.getContext("2d");
// Set its dimensions same as style.css otherwise it won't scale right, defaults 150x300
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

// ----- Sprite -----
// Bringing an image into the canvas
const playerImg = new Image(); // new instance of Image is just like <img /> provide src=""
playerImg.src = "./images/shadow_dog_frames.png";
// Sprite Dimensions - Taken by dividing total size of png, divide by the columns & rows for each individual frame
const SPRITE_WIDTH = 575; // 6876 / 11 columns
const SPRITE_HEIGHT = 523; // 5230 / 10 rows
// Frame Controllers
let frameX = 0; // each num advances the src cutout to one frame on x or y axis
let frameY = 4; // x = each frame in same action, y = different actions for the fox
let gameFrame = 0; // this will help slow down the animation
const staggerFrames = 2 // this is DIRECTLY the amount of frames it slows down by

// ----- Animation Loop -----
const animate = () => {
  // beginning of each loop, clear canvas
  // .clearRect(x, y, w, h) -> 0, 0 == top left to entire width && height
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // "Selecting" EACH sprite frame and then drawing in from top-left(0, 0) of canvas to its intended size
  // .drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh) | s = src, d = dest | dest is WHERE we place the cutout src
  ctx.drawImage(
    playerImg,
    frameX * SPRITE_WIDTH,
    frameY * SPRITE_HEIGHT,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  );

  if (gameFrame % staggerFrames === 0) { // For every staggerFrames frames increment frameX
    if (frameX < 9) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  // This is built-in method for a recursion loop
  requestAnimationFrame(animate);
};

animate();
