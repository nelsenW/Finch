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

  draw(context, dimension, color, pos) {
    context.fillStyle = color
    context.fillRect(pos[0], pos[1], dimension, dimension)
    this.shade(dimension)
  }

  shade(dim){
    while(dim > 2){
      dim -= 2
      let mod = 10 - Math.abs(dim - 10)
      let color 
      switch(mod){
        case 8:
          color = 'red'
          break;
        case 6:
          color = 'blue'
          break;
        case 4:
          color = 'white'
          break;
        case 2:
          color = 'black'
          break;
      }
      console.log(color, mod)
      this.draw(this.ctx, dim, color, [this.x + Math.floor(8 / mod), this.y + Math.floor(8 / mod)]) }
  }

  grow() {
      this.x += 1 
      this.y -= 1
  }



}
