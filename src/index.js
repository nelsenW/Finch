import Vine from "./scripts/vine"

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight
    
    const vines = [];
    for( let i = 0; i < 10; i++){
        vines.push(new Vine(canvas))
    }
    vines.forEach(vine => vine.draw(ctx))
})
