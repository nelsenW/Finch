export default class Vine {
  constructor(canvas, ctx) {
    // pass in canvas and context to use for drawing
    this.ctx = ctx;
    this.canvas = canvas;
    //generate a random spot for vine to start on outer edge of 100px
    if(Math.random() > 0.5){
        if(Math.random() < 0.5){
            this.x = canvas.width
        } else {
            this.x = 0
        }
        this.y = canvas.height * Math.random()
    } else {
        if(Math.random() < 0.5){
            this.y = canvas.height
        } else {
            this.y = 0
        }
        this.x = canvas.width * Math.random()
    }

    this.dim = 10
    this.color = "green"
  }

  draw(context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.dim, this.dim)
    grow()
  }

  grow() {
      this.x += 1 
  }

  animate(){
    draw()
    requestAnimationFrame(animate)
  }
}
