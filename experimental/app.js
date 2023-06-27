// https://www.youtube.com/watch?v=GFO_txvwK_c
// cool was exiting. got too complicated. i follow whats happening but realize its a lot fo work. i ened to chill


// have to use <canvas></canvas> element wowowowowowow
const canvas = document.querySelector('.box')
const context = canvas.getContext("2d")

console.log(context)


// doing this to prevent canvas default of 300 X 150 that would distort images.. correct scaling
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


// bringing in an image... wow!! built in image class constructor. creates img element
const playerImage = new Image()
playerImage.src = 'sheep-sprite.jpg'


// checking to make sure my path works
// console.log(playerImage)
// const body = document.querySelector('body')
// body.append(playerImage)


let x = 0;
// let y = 0;


// const moveAcross = () => {
//     setTimeout(() => {
//         y-=50
//     }, 1000)
// }
const animate = () => {
    // method to remove canvas "paint" ? clear old paint between every animation frame .... 4 args 0 0 starting points.. h/w is end... so full space
    context.clearRect(0,0,CANVAS_HEIGHT, CANVAS_WIDTH)

    // now we can draw.. test if it works by drawing simple rectangle with this dimensions ... start at position 50, 50 then give w & h of 100px
    // context.fillRect(100,50,100,100)
    // context.fillRect(x,50,100,100)
    x++


    // takes 3 args depending on how much control you want
        // 1. the img you want to draw
        // 2. x, y coordinates  0, 0 is top left corner (scale x)
        // 3. y coordinates (scale y)
        // 4. width   .. scale image up and down and stretch vertically and horizontally (scale width)
        // 5. height ... scale image (passing canvas height and width stretches image to canvas area) (scale height)
        // 6. destination x 
        // 7. destination y
        // 8. destination w
        // 9. destination h

        // context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

    context.drawImage(playerImage, 0, 0, 5000, 2500)
    // moveAcross()
    //built in method that runs the function passed to it
    requestAnimationFrame(animate) // runs this function infinitely bc we're calling it from inside.... isnt this recursion ?? maybe 

    //though i do wonder why we aren't calling animate()
}

// if we dont specify fillstyle colors of shapes on canvas default to black ... (prove with x vairable)
animate()

