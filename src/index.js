import Vine from "./scripts/vine";
import transform from "./scripts/transform";

window.onload = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  
  const currCharCanvas = document.getElementById("currentCharacter");
  currCharCanvas.width = 64;
  currCharCanvas.height = 64; 
  const cCtx = currCharCanvas.getContext("2d");
  cCtx.imageSmoothingEnabled = false;

  const nextCharCanvas = document.getElementById("nextCharacter");
  nextCharCanvas.width = 64;
  nextCharCanvas.height = 64;
  const nCtx = nextCharCanvas.getContext("2d");
  nCtx.imageSmoothingEnabled = false;

  let finches = new Image();
  finches.onload = function(){
    cCtx.drawImage(finches, 0, 0, 32, 32, 0, 0, 64, 64);
    nCtx.drawImage(finches, 128, 0, 35, 32, 0, 0, 64, 64);
    ctx.drawImage(finches, 0, 0, 32, 32, 50, 50, 64, 64);
    transform(cCtx.getImageData(0,0,64,64), nCtx.getImageData(0,0,64,64), ctx, false);
  }
  finches.src =  'src/styles/Finches V1.png'


  // const animate = () => {
  //   // draw intial position
  //   vine.draw(ctx, vine.dim, vine.color, [vine.x, vine.y])
  //   // grow vine
  //   vine.grow()
  //   window.requestAnimationFrame(animate)
  // };
  // animate();
};
