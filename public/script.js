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

// let x = 0;
// Animation Loop
const animate = () => {
  // at the beginning of each loop, clear the canvas
  // ctx.clearRect(x-start, y-start, w, h) -> 0, 0 == top left to entire width && height
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(x, 50, 100, 100); // test square
  // This is built-in method for a recursion loop
  // requestAnimationFrame(animate);
  // x++
}

animate();