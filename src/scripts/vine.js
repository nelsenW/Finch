export default class Vine {
    constructor(){
        this.startPos = [Math.random() * canvas.width, Math.random() * canvas.height]
        this.endPos = [Math.random() * canvas.width, Math.random() * canvas.height]
        this.color = hsla(120, Math.random() * 100, Math.random() * 100)
    }
    draw(){
        ctx.strokeStyle = this.color
        ctx.beginPath();
        // console.log(this.startPos, this.endPos)
        ctx.moveTo(this.startPos[0], this.startPos[1]);
        ctx.lineTo(this.endPos[0], this.endPos[1]);
        ctx.stroke();
    }
}y