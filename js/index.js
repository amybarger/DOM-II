// Your code goes here

let funBusHeader = document.querySelector("h1")
funBusHeader.addEventListener ("mouseenter", () => {
    funBusHeader.style.fontFamily = "monospace"
})

let funBusHeader2 = document.querySelector("h1")
funBusHeader2.addEventListener ("mouseleave", () => {
    funBusHeader2.style.fontFamily = "Indie Flower, cursive"
})

let bodyScroll = document.querySelector("body")
document.addEventListener ("scroll", () => {
    bodyScroll.style.backgroundColor = "aliceBlue"
    bodyScroll.style.color = "cornflowerBlue"
})