document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight
    
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black'
    
    class Vine {
        constructor(){
            this.startPos = [Math.random() * canvas.width, Math.random() * canvas.height]
            this.endPos = [Math.random() * canvas.width, Math.random() * canvas.height]
        }
        draw(){
            ctx.beginPath();
            console.log(this.startPos, this.endPos)
            ctx.moveTo(this.startPos[0], this.startPos[1]);
            ctx.lineTo(this.endPos[0], this.endPos[1]);
            ctx.stroke();
        }
    }
    
    const vine1 = new Vine()
    vine1.draw()
})
