const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const body = document.querySelector('body')
const fallingContainer = document.querySelector('.fallingContainer')
const chickensContainer = document.querySelector('.chickens')
const GAME_WIDTH = 800

const player1 = ctx

canvas.height = 500
canvas.width = 800

// canvas.style.opacity = .5

console.log(canvas.height)
console.log(canvas.width)


let x = 0
let y = 310

// velocity
let vxl = 0
let vxr = 0
let vy = 0

const update = () => {
    // resetting canvas position... prevents "paint brushing"..
    player1.clearRect(0, 0, canvas.width, canvas.height)

    // console.log( canvas.getBoundingClientRect() )

    // separting the left and right prevents lag when switching directions of x
    x += vxl
    x += vxr
    y += vy

    if(y > 310){ //prevents from moving underneath
        y = 310
    }

    // loop horizontally
    if(x < 0){
        x = 800
    }
    if(x > 800){
        x = 0
    }

    player1.fillRect(x, y, 50, 50)

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
    vy += 0.025
})

// random inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


class FallingObject {
    constructor(name, symbol){
        this.name = name,
        this.symbol = symbol
        this.caught = null
        this.value = 1,
        this.fallPoint = getRandomIntInclusive(0,500)
    }
    upScore(who){
        who.score++
    }
    beginFall(){
        //add object to page before canvas container
        let element = document.createElement('span')
        element.innerHTML = this.symbol
        // fallingContainer.append(element)
        // chickensContainer.append(element)
        console.log(element)
        element.style.left = `${this.fallPoint}px`
        element.classList.toggle('fall')



    }

}

const player = {
    name: name,
    score : 0,
    addCatch(){
        upScore(player)
    }
}


const chicken = new FallingObject('chicken','🐔')

// orange.beginFall()


let chickens = []
const createChickens = () => {
    // oranges.push(new FallingObject('orange','https://www.minecraftskins.com/uploads/preview-skins/2021/05/16/cute-enchanted-golden-apple-17818333.png?v538'))

    let newChicken = new FallingObject('chicken','🐔')
    return newChicken
}


// setInterval(createOranges() 
//     oranges.forEach((orange) => {
//         orange.beginFall()
//     }), 10)
// let fruitLength = fallingContainer.childNodes.length
// while(fruitLength <= 10){
    setInterval(() => {
        for(let i = 0; i <= 1; i++){
            // createChickens().beginFall()
        }
        // fruitLength = fallingContainer.childNodes.length
    }, 10000)

// }


//every 10 seconds 2 oranges fall.. then return to staring pos
    


// random horizontal placement

//  need falling objs to render as canvas

class FallingChicken {
    constructor(symbol){
        this.symbol = symbol
        this.xPos = getRandomIntInclusive(0, GAME_WIDTH)
        this.yPos = 0
    }
    appear(ctx){
        ctx.fillText(this.symbol, this.xPos, this.yPos)
        ctx.font = '10px sans-serif' //default size
    }
    drop(){
        if(this.yPos >400) this.yPos++
    }
}


const chickenTry = new FallingChicken('🐔')