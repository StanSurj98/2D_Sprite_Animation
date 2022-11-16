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

// ----- Frame Controllers -----
let gameFrame = 0; // this will help slow down the animation
const staggerFrames = 2; // this is DIRECTLY the amount of frames it slows down by
// Animation Data Structure
const spriteAnimations = []; // empty for now that will hold all data for all animations
// Holds all names and max frames data
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];
// Now we can map each coordinate for each frame | state = name, frames
animationStates.forEach((state, index) => {
  // We wanted that object that contains the loc coords of each frame in the sprite sheet
  let frames = {
    loc: [],
  };
  // Fills the loc arrays
  for (let i = 0; i < state.frames; i++) {
    let positionX = i * SPRITE_WIDTH; // Loop through all horizontal frames, get x pixels
    let positionY = index * SPRITE_HEIGHT; // Loop through all vertical frames, get y pixels
    frames.loc.push({
      x: positionX,
      y: positionY,
    });
  }

  spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

// ----- Animation Loop -----
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // cycles horizontal frames between 0th to last frame per row, for each animation action
  let position =
    Math.floor(gameFrame / staggerFrames) % spriteAnimations["run"].loc.length;
  let frameX = spriteAnimations["run"].loc[position].x;
  let frameY = spriteAnimations["run"].loc[position].y; 
  // just access the Y value in the loc array (the row at Y pixel, the different animations)
  // !! NOTE !! => even though "position" is dynamic and keeps changing the the x-value, the y is constant for each animation 

  ctx.drawImage(
    playerImg,
    frameX,
    frameY,
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
