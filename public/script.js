const canvas = document.getElementById("canvas-1");
// Define the 2d context, with ctx, we can now draw anything inside
const ctx = canvas.getContext("2d");
// Set its dimensions same as style.css otherwise it won't scale right, defaults 150x300
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
// ctx.fillStyle = "cyan";
// ctx.fillRect(0, 0, 150, 100);

// Bringing an image into the canvas
const playerImg = new Image(); // new instance of Image is just like <img /> provide src=""
playerImg.src = "./images/shadow_dog_frames.png";

// Sprite Dimensions - Taken by dividing total size of png, divide by the columns & rows for each individual frame
const SPRITE_WIDTH = 575; // 6876 / 11 columns
const SPRITE_HEIGHT = 523; // 5230 / 10 rows


// Animation Loop
const animate = () => {
  // beginning of each loop, clear canvas
  // .clearRect(x-start, y-start, w, h) -> 0, 0 == top left to entire width && height
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Passing in the animation frames, drawing from top-left(0, 0)
  // .drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh) | s = src, d = dest | dest is WHERE we place the cutout src
  ctx.drawImage(playerImg, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // Cutting out from top-left to each sprite frame, where is it appearing? Top-left to entire canvas width/height

  // This is built-in method for a recursion loop
  requestAnimationFrame(animate);
};

animate();
