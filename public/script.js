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

  // cycles positions horizontally between 0 and the modulus num (frames per row)
  let position = Math.floor(gameFrame/staggerFrames) % 6; 
  frameX = SPRITE_WIDTH * position;


  ctx.drawImage(
    playerImg,
    frameX,
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


// // Now let's think about data structures for a minute
// // We would like to have an array of objects - each object being each animation action
// // Inside the animation action, we would like to know exactly how many frames there are in the animations
// const spriteAnimations = [
//   "idle" = {
//     loc: [
//       // it would be nice if we have the exact pixel cutoff for each frame in one animation
//       {x: 0, y: 0},
//       {x: 575, y: 0},
//       {x: 1150, y: 0},
//       {x: 1725, y: 0},
//       {x: 2300, y: 0},
//       {x: 2875, y: 0},
//       {x: 3450, y: 0},
//     ]
//   },
//   "jump" = {
//     loc: []
//   },
//   "run" = {
//     loc: []
//   }
// ];
// // Having the loc arrays above we can just loop through them to directly access each frame
// // we won't have to worry about how many exact frames are in one particular animation
// console.log(spriteAnimations["idle"].loc[2].x); // 1150
// console.log(spriteAnimations["idle"].loc.length); // 7 (would tell us exactly how many frames in one animation!)

// // so now lets build this data structure programmatically!