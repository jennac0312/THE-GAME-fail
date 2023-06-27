addEventListener('keydown', (event) => {
    // console.log(`key down code is ${event.code}`)
    console.log(`key down key is ${event.key}`)

    if(event.key === 'ArrowRight') vxr = 5
    if(event.key === 'ArrowLeft') vxl = -5
    if(event.key === 'ArrowUp') vy = -5
    if(event.key === 'ArrowDown') vy = 5
})


addEventListener('keyup', (event) => {
    console.log(`key up on ${event.key} key`)
    if(event.key === 'ArrowRight') vxr = 0
    if(event.key === 'ArrowLeft') vxl = 0
    if(event.key === 'ArrowUp') vy = 0
    if(event.key === 'ArrowDown') vy = 0

})
