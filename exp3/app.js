const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

console.log(canvas.height)


let x = 0
let y = 0

// velocity
let vxl = 0
let vxr = 0
let vy = 0

const update = () => {
    // resetting canvas position... prevents "paint brushing"..
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // separting the left and right prevents lag when switching directions of x
    x += vxl
    x += vxr
    y += vy

    ctx.fillRect(x, y, 50, 50)

    // collision()
    requestAnimationFrame(update)
}

const collision = () => {
    if(y >= canvas.height - 100){
        y = canvas.height -100
    }
}
update()


// gravity
setInterval(() => {
    // vy += 0.025
})