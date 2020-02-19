// Your code goes here

// 10 EVENT LISTENERS

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

let navWithDots = document.querySelector(".main-navigation")
navWithDots.addEventListener("dblclick", () => {
    navWithDots.style.border = "8px dotted blue"
})

let resizeText = document.querySelector("h2")
window.addEventListener("resize", () => {
    resizeText.style.color = "green"
})

let picsDisappear = document.querySelector(".img-content")
document.addEventListener("keydown", () => {
    picsDisappear.style.display = "none"
})

let copyrightGrow = document.querySelector(".footer")
copyrightGrow.addEventListener("contextmenu", () => {
    copyrightGrow.style.backgroundColor = "orange"
})

let textCopy = document.querySelector("p")
textCopy.addEventListener("copy", () => {
    textCopy.style.color = "plum"
})

let footerSelect = document.querySelector(".btn")
footerSelect.addEventListener("mouseover", () => {
    footerSelect.style.border = "2px solid pink"
})

// STOP PROPAGATION

let logoBackground = document.querySelector(".main-navigation")
logoBackground.addEventListener("click", () => {
    logoBackground.style.backgroundColor = "yellow"
})

let navBackground = document.querySelector(".nav")
navBackground.addEventListener("click", () => {
    navBackground.style.border = "2px solid green"
    navBackground.style.backgroundColor = "orange"
    event.stopPropagation();
})    

// PREVENT DEFAULT

let stopRefreshLink = document.querySelector(".nav");

stopRefreshLink.addEventListener("click", () => {
    event.preventDefault();
})