// screens
const homePage = document.querySelector('.landingScreen')
const directionsPage = document.querySelector('.directionsScreen')
const gamePage = document.querySelector('.gameBoard')
const buttons = document.querySelectorAll('button')

// console.log(buttons)

// game title
const gameTitle = document.querySelector('.title')
console.log(gameTitle)





// toggle screens for buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // hide home page
        homePage.classList.add('hidden')
        // hide game and directions
        gamePage.classList.add('hidden')
        directionsPage.classList.add('hidden')
        if(button.classList.value.includes('start')){
            console.log('start button clicked')
            // show game screen
            gamePage.classList.remove('hidden')
        } else if (button.classList.contains('directions')){
            console.log(`directions clicked`)
            // show directions
            directionsPage.classList.remove('hidden')
        }
    })
})


// 10 seconds after page load... make title flash again
setTimeout(() => {
    gameTitle.setAttribute('style', 'animation: flashing 1s infinite;')
}, 10000)