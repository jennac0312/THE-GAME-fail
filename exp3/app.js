const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const body = document.querySelector('body')
const fallingContainer = document.querySelector('.fallingContainer')

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
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // console.log( canvas.getBoundingClientRect() )

    // separting the left and right prevents lag when switching directions of x
    x += vxl
    x += vxr
    y += vy

    if(y > 310){ //prevents from moving underneath
        y = 310
    }
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

// random inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


class FallingObject {
    constructor(name, img){
        this.name = name,
        this.img = img
        this.caught = null
        this.value = 1,
        this.fallPoint = getRandomIntInclusive(100,500)
    }
    upScore(who){
        who.score++
    }
    beginFall(){
        //add object to page before canvas container
        let element = document.createElement('img')
        element.src = this.img
        fallingContainer.append(element)
        console.log(element)
        element.style.marginLeft = `${this.fallPoint}px`
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


const orange = new FallingObject('orange','https://www.minecraftskins.com/uploads/preview-skins/2021/05/16/cute-enchanted-golden-apple-17818333.png?v538')

// orange.beginFall()


let oranges = []
const createOranges = () => {
    // oranges.push(new FallingObject('orange','https://www.minecraftskins.com/uploads/preview-skins/2021/05/16/cute-enchanted-golden-apple-17818333.png?v538'))

    let createdOrange = new FallingObject('orange','https://www.minecraftskins.com/uploads/preview-skins/2021/05/16/cute-enchanted-golden-apple-17818333.png?v538')
    return createdOrange
}


// setInterval(createOranges() 
//     oranges.forEach((orange) => {
//         orange.beginFall()
//     }), 10)
let fruitLength = fallingContainer.childNodes.length
// while(fruitLength <= 10){
    setInterval(() => {
        for(let i = 0; i <= 1; i++){
            createOranges().beginFall()
        }
        fruitLength = fallingContainer.childNodes.length
    }, 10000)

// }


//every 10 seconds 2 oranges fall.. then return to staring pos
    

