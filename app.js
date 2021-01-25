const sliderControlLeft = document.querySelector('.slider-controls-left')
const sliderControlRight = document.querySelector('.slider-controls-right')
const sliderItemsContainer = document.querySelector('.slider-items-container')
const sliderItems = document.querySelectorAll('.slider-item')
const sliderLength = sliderItems.length
const mid = Math.floor(sliderLength / 2)
console.log(mid)

let translateXValue = -400
let displayedItemIndex = 0

sliderControlLeft.addEventListener('click', () => {
    console.log('left')
    moveLeft()
})

sliderControlRight.addEventListener('click', () => {
    console.log('right')
    moveRight()
})

function prependLeft() {
    const lastSliderItem = document.querySelector('.slider-item:last-child')

    sliderItemsContainer.prepend(lastSliderItem)
}

function appendRight() {
    const lastSliderItem = document.querySelector('.slider-item:first-child')

    sliderItemsContainer.append(lastSliderItem)
}

prependLeft()

sliderItemsContainer.style.transform = 'translateX(-400px)'

function moveLeft() {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(0px)`
    
    setTimeout(() => {
        prependLeft()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = 'translateX(-400px)'
    }, 300)
}

function moveRight() {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(-800px)`

    setTimeout(() => {
        appendRight()
        
        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = 'translateX(-400px)'
    }, 300)
}