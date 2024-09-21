/**@type{HTMLCanvasElement} */
const speedSlider = document.getElementById('speed')
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

const center = { x: canvas.width / 2, y: canvas.height / 2 };
const radius = canvas.width * 0.4 
const colors = ["blue", "white", "white", "blue", "white", "white", 'blue', 'white', 'white',];
const wheel = new Wheel(center, radius, colors);


let angle = 0

ctx.globalAlpha = 0.3;

function animate() {
  angle += Number(speedSlider.value)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  wheel.draw(ctx, angle);

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
