export default class Vine {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.startPos = [
      Math.random() * this.canvas.width,
      Math.random() * this.canvas.height,
    ];
    this.endPos = [
      this.startPos[0] + (Math.random() - 0.5) * 800,
      this.startPos[1] + (Math.random() - 0.5) * 800,
    ];
    this.h = 138;
    this.s = 22;
    this.l = 15;
    this.color = `hsla(${this.h}, ${this.s}%, ${this.l}%)`;
    this.random = (Math.random() - 0.5) * 800;
    this.size = 9
  }

  shrink() {
    this.h -= 4
    this.s += 9
    this.l += 14
    if(this.size === 9){
        this.size = 5
    } else if(this.size === 5){
        this.size = 3
    } else if(this.size === 3){
        this.size = 1
    } else {
        this.size = 0
    }
    this.color = `hsla(${this.h}, ${this.s}%, ${this.l}%)`;
  }

  draw(context) {
    while(this.size > 0){
        context.strokeStyle = this.color;
        context.lineWidth = this.size;
        context.beginPath();
        context.moveTo(this.startPos[0], this.startPos[1]);
        context.bezierCurveTo(
          this.endPos[0] / 2,
          this.endPos[1] / 2,
          this.endPos[0] + this.random,
          this.endPos[1] + this.random,
          this.endPos[0],
          this.endPos[1]
        );
        context.stroke();
        this.shrink();
    }
    this.vining();
  }

  

  vining() {
    this.startPos = this.endPos;
    this.endPos = [
      Math.random() * this.canvas.width,
      Math.random() * this.canvas.height,
    ];
  }
}
