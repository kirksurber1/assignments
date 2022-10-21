

const timer = document.getElementById("timer").innerText
const x = 1
const y = timer - x
let count = 10
const body = document.getElementsByTagName("body")

function removeClick() {
    counter.removeEventListener("click", (e) => {
        alert("Timer is up")
    })
}
const counter = document.addEventListener("click", (e) => {
        const clickNumber = document.getElementById("clickCounter").innerText
        const addNumber = Number (clickNumber) + 1
        document.getElementById("clickCounter").innerText = addNumber
    })


const countdown = setInterval(() => {
      
      document.getElementById("timer").innerText = count
      count--
      
      if (count >= 0) {
        
        document.getElementById("timer").innerText = count
         
      }
      else if (count <= 0) {
        clearInterval(countdown);
        removeClick()
        }
        localStorage.setItem("clicks", clickCounter.innerText)
      
    }, 1000)

   