


var square = document.getElementById("square")
square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue"
    square.addEventListener("mouseout", function () {
    square.style.backgroundColor = "white"
    })

})

var holdMouse = document.getElementById("square")
holdMouse.addEventListener("mousedown", function () {
    holdMouse.style.backgroundColor = "red"
    holdMouse.addEventListener("mouseup", function() {
        holdMouse.style.backgroundColor = "yellow"
    })
})

var doubleClick = document.getElementById("square")
doubleClick.addEventListener("dblclick", function() {
    doubleClick.style.backgroundColor = "green"
    
})

var window = document.getElementById("square")
document.addEventListener("wheel", function() {
        square.style.backgroundColor = "orange"
    
})

    
var keypress = document.getElementById("square")
    document.addEventListener("keydown", event => {
    
    if (event.key === "r") {
    keypress.style.backgroundColor = "red"
    }

    if (event.key === "g") {
        keypress.style.backgroundColor = "green"
        }
    if (event.key === "b") {
        keypress.style.backgroundColor = "blue"
        }
    if (event.key === "y") {
        keypress.style.backgroundColor = "yellow"
        }
    if (event.key === "o") {
        keypress.style.backgroundColor = "orange"
        }
    
})




 





