// Your code goes here

let funBusHeader = document.querySelector("h1")
funBusHeader.addEventListener("mouseenter", () => {
    funBusHeader.style.fontFamily = "monospace"
})

let funBusHeader2 = document.querySelector("h1")
funBusHeader2.addEventListener("mouseleave", () => {
    funBusHeader2.style.fontFamily = "Indie Flower, cursive"
})

let bodyScroll = document.querySelector("body")
document.addEventListener("scroll", () => {
    bodyScroll.style.backgroundColor = "aliceBlue"
    bodyScroll.style.color = "cornflowerBlue"
})

let navBarChange = document.querySelector("a")
navBarChange.addEventListener("click", () => {
    navBarChange.style.color = "pink"
})

let busPicture = document.querySelector(".main-navigation")
busPicture.addEventListener("dblclick", () => {
    busPicture.style.border = "8px dotted blue"
})

let selectedText = document.querySelector("h2")
selectedText = addEventListener("mousemove", () => {
    selectedText.style.color = "green"
})