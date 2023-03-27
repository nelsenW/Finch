export default class Vine {
  constructor(canvas, ctx) {
    // pass in canvas and context to use for drawing
    this.ctx = ctx;
    this.canvas = canvas;
    //generate a random spot for vine to start on outer edge of 100px
    // if(Math.random() > 0.5){
    //     if(Math.random() < 0.5){
    //         this.x = canvas.width
    //     } else {
    //         this.x = 0
    //     }
    //     this.y = canvas.height * Math.random()
    // } else {
    //     if(Math.random() < 0.5){
    //         this.y = canvas.height
    //     } else {
    //         this.y = 0
    //     }
    //     this.x = canvas.width * Math.random()
    // }
    this.x = 0
    this.y = this.canvas.height
    //starting width of the vine
    this.dim = 10
    //starting color of the vine
    this.h = 144;
    this.s = 28;
    this.l = 22;
    this.color = `hsla(${this.h}, ${this.s}%, ${this.l}%)`
  }

  draw(context, dimension, color) {
    context.fillStyle = color
    context.fillRect(this.x, this.y, dimension, dimension)
    this.shade(dimension)
  }

  shade(dim){
    while(dim > 0){
      dim -= 2
      let mod = 10 - Math.abs(dim - 10)
      this.draw(this.ctx, dim, `hsla(${this.h - mod}, ${this.s - mod}%, ${this.l - mod}%)`)
    }
  }

  grow() {
      this.x += 1 
      this.y -= 1
  }



}
