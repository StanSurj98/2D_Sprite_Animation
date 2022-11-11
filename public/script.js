const canvas = document.getElementById("canvas-1");
// Define the 2d context, with ctx, we can now draw anything inside
const ctx = canvas.getContext("2d");
// Drawing a Rectangle - ctx is now an object with several draw properties
console.log(ctx);
ctx.fillStyle = "cyan"
ctx.fillRect(0, 0, 100, 150);