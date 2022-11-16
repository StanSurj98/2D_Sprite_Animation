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
let frameY = 0; // x = each frame in same action, y = different actions for the fox
let gameFrame = 0; // this will help slow down the animation
const staggerFrames = 2 // this is DIRECTLY the amount of frames it slows down by

// ----- Animation Loop -----
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

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


  gameFrame++;
  requestAnimationFrame(animate);
};

animate();
