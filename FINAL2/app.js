// screens
const homePage = document.querySelector('.landingScreen')
const directionsPage = document.querySelector('.directionsScreen')
const modeScreen = document.querySelector('.modeScreen')
const gamePage = document.querySelector('.gameBoard')

// home page variables
const gameTitle = document.querySelector('.title')
const hpParagraph = document.querySelector('.landingScreen p')
const hpBContainer = document.querySelector('.buttons')
const buttons = document.querySelectorAll('button')


// object to track screen location




// toggle screens for buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        // hide home page
        homePage.classList.add('hidden')

        // hide other screens ( game and directions and modes )
            // make this a looop... DRY
        modeScreen.classList.add('hidden')
        gamePage.classList.add('hidden')
        directionsPage.classList.add('hidden')

        if(button.classList.value.includes('start')){
            console.log('start button clicked')
            // show mode screen
            modeScreen.classList.remove('hidden')

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
// 12 second delay... show buttons
setTimeout(() => {
    hpBContainer.classList.remove('hidden')
}, 12000)
// 13 second delay... show hpParagraph
setTimeout(() => {
    hpParagraph.style.color = `moccasin`
}, 13500)