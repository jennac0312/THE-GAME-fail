// need player class




// need falling obj class




let div = document.querySelector('.test')

console.log(typeof div.addEventListener)

console.log(div)


const keydown = () => {
    console.log('key was pressed')
    let key = event.key
    console.log(key)
}



// works with window object and document object hmmmm
// window.addEventListener('keydown', (event) => {
//     console.log('key was pressed')
//     let key = event.key
//     console.log( key)
//     console.log(event)
// })

// returns the key i press as strings wow!!!! ArrowLeft ArrowRight etc
//key down gives ^^

//key press event listener doesnt do tab, or arrowkeys 



const kirby = document.querySelector('.kirby')
const blueKirby = document.querySelector('.blueKirby')
// console.log(blueKirby)

// let right 

// window.addEventListener('keydown', (event) => {
//     console.log(`${event.key} key was pressed`)
//     if(event.key === 'ArrowRight'){
//         // kirby.classList.add('moveRight')
//         // console.log('kirby is moving right')
//         right = true
//         moveRight()
//     }
// })


// // document.addEventListener('keydown', (event) => {
// //     console.log(`${event.key} key was pressed`)
// //     if(event.key === 'd'){
// //         blueKirby.classList.add('moveRight')
// //         console.log('blue kirby is moving right')
// //     }
// // })


// window.addEventListener('keyup', (event) => {
//     console.log(event.key, 'key was let go')
//     right = false
//     console.log('right is', right)

// })



// animation issues
    // works but now how do i make it remember its most recent position??????
    // just realized this cannot take in 2 different key presses at a time...


// falling object
    //  how do i implement a way for each player obj to be aware of when a falling object touches them ??
    // or vice versa... how od i make the falling obj aware whne it touches a player object.... 
    // is that an event listener of some sort??
    // how do i make objects aware of themselves and other objects



// // move function
// const moveRight = () => {
//     // let id = null
//     let position = 0
//     // clearInterval(id)
//     // while(right){
//         // if(right){
//         //     right = true
//         // } else {
//         //     right = false
//         // }
//     setInterval(() => {
//         if(position <= 504){
//             // clearInterval(id)
//         // } else {
//                 position--
//                 kirby.style.top = `${position}px`
//                 // moveRight(moveRight)
//                 // kirby.style.left = `${position}px`
//                 }
//             }, 10)
//         }
//         console.log(kirby)
// // }


// returns DOMRECT object with x,y,width,height,top,bottom,left,right props
console.log('kirby coordinates:', kirby.getBoundingClientRect() )

let kirbyCoords = kirby.getBoundingClientRect()



let gameRect = div.getBoundingClientRect()
console.log('rectangle coordinates:', gameRect)

div.addEventListener('click', (event) => {
    console.log('click event happened')
    // let clickLocation = event.target.getBoundingClientRect()
    // console.log('click location is ',clickLocation)

    let coords = {
        x: event.x,
        y: event.y,
        height: event.height,
        width: event.width
    }
    console.log('click coordinates: ',coords)
})


const getCordinates = (who) => {

    who = who.getBoundingClientRect()
    let coords = {
        x: who.x,
        y: who.y,
        height: who.height,
        width: who.width
    }

    return coords
}

let rightMovement = 0

window.addEventListener('keydown', (event) => {
    console.log('key down event fired')
    console.log(event)

        if(event.key === 'ArrowRight'){
            console.log('kirb moves right')
            // kirbyCoords.right++
            let coords = getCordinates(kirby)
            console.log('kirbs old x position:', coords.x)
            rightMovement++
            kirby.style.marginLeft = `${rightMovement}px`
    
            let newCords = getCordinates(kirby)
            console.log('new kirb x cords: ',newCords.x)
        }
})



const update = () => {

     
    requestAnimationFrame(update)
}