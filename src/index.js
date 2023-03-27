import Vine from "./scripts/vine";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

    const vine = new Vine(canvas, ctx)

  const animate = () => {
    // draw intial position
    vine.draw(ctx, vine.dim, vine.color)
    // grow vine
    vine.grow()
    window.requestAnimationFrame(animate)
  };
  animate();
});
