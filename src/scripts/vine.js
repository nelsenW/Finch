export default class Vine {
  constructor(canvas, ctx) {
    // pass in canvas and context to use for drawing
    this.ctx = ctx;
    this.canvas = canvas;
    //generate a random spot for vine to start on outer edge of 100px
    if(Math.random() > 0.5){
        if(Math.random() < 0.5){
            this.startX = canvas.width
        } else {
            this.startX = 0
        }
        this.startY = canvas.height * Math.random()
    } else {
        if(Math.random() < 0.5){
            this.startY = canvas.height
        } else {
            this.startY = 0
        }
        this.startX = canvas.width * Math.random()
    }
    //Place the end coordinate for the intial vine
    this.endX = this.startX + (this.startX > canvas.width / 2 ? -1 : 1) * Math.random() * 800
    this.endY = this.startY + (this.startY > canvas.height / 2 ? -1 : 1) * Math.random() * 800
    //Initial values for line styles
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
        context.moveTo(this.startX, this.startY);
        context.bezierCurveTo(
          this.endX / 2,
          this.endY / 2,
          this.endX + this.random,
          this.endY + this.random,
          this.endX,
          this.endY
        );
        context.stroke();
        this.shrink();
    }
    this.vining();
  }

  animate(){
    
    requestAnimationFrame(animate)
  }

  
  vining() {
    this.startX = this.endX;
    this.startY = this.endY;
    this.endX = this.startX + (Math.random() - 0.5) * 800
    this.endY =  this.startY + (Math.random() - 0.5) * 800
  }
}
