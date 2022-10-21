
 const goom = document.getElementById("goom")
 const bob = document.getElementById('bob')
 const cheep = document.getElementById("cheep")
 const goomVal = document.getElementById("goomVal").innerText
 const bobVal = document.getElementById("bobVal").innerText
 const cheepVal = document.getElementById("cheepVal").innerText

let totalCost = function () {
       
        let x = goom.value * goomVal
        let y = bob.value * bobVal
        let z = cheep.value * cheepVal
        const totalValue = document.getElementById("totalValue")
        let sum = x + y + z
        
    totalValue.innerText = sum.toLocaleString("en-US", {style: "currency", currency: "USD"})


}


document.addEventListener("input", totalCost)