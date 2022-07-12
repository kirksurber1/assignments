// const readlineSync = require("readline-Sync");

// class Calculator {
//     constructor(entry, total) {
//         this.entry = entry
//         this.total = total
//         this.clear()
//     }

//     clear() { 
//         this.total = ""
//         this.entry = ""
//         this.operator = "undefined"
//     }

//     delete(){

//     }

//     appendNumber(){
//         this.entry = e.target.value
//     }

//     chooseOperation(operator) {
//         if(this.entry ==="") return
//        this.operator = operator
//        this.entry = this.total
//        this.total = ""
//     }

//     compute() {

//     }

//     updateDisplay() {
//         this.entry.innerText = this.entry
//     }


// }

    function refresh() {
        displayValue1.innerText = array1Join
    }
    const add = document.getElementById("add")
    const sub = document.getElementById("sub")
    const mult = document.getElementById("mult")
    const div = document.getElementById("div")
    const operator = document.querySelectorAll(".operator")
    const numberButton = document.getElementsByClassName("number")
    const equals = document.getElementById("eq")
    const clear = document.getElementById("clear")
    const del = document.getElementById("del")
    const displayValue1 = document.getElementById("entry")
    const displayvalue2 = document.getElementById("total") 
    let num1 = displayValue1.innerText
    const num2 = displayvalue2.innerText
    let sum = num1 + num2
 


    const numbersEntry = document.getElementsByClassName("number")
        for (var i = 0; i < numbersEntry.length; i++) {
        
            numbersEntry[i].addEventListener("click", (e) => {
                if(document.getElementById(".").onclick = true && displayValue1.innerText.includes("."))  {
                    document.getElementById(".").disabled = true
            }
                 displayValue1.append(e.target.value)  
            
             
        })

    }
    del.addEventListener("click", () => {
        const array1 = Array.from(displayValue1.innerText) 
          array1.pop();
          const array1Join = array1.join("");
          displayValue1.innerText = array1Join;
          
        

    })


    add.addEventListener("click", (e) => {
       
        displayvalue2.innerText = displayValue1.innerText
        displayvalue2.append(e.target.value)
        displayValue1.innerText = ""
        if (displayValue1.innerText === "") {
            document.getElementById("add").disabled = true
        }
       
    })

    div.addEventListener("click", (e) => {
        displayvalue2.innerText = displayValue1.innerText
        displayvalue2.append(e.target.value)
        displayValue1.innerText = ""
        if (displayValue1.innerText === "") {
            document.getElementById("div").disabled = true
        }
    })
    mult.addEventListener("click", (e) => {
        displayvalue2.innerText = displayValue1.innerText
        displayvalue2.append(e.target.value)
        displayValue1.innerText = ""
        if (displayValue1.innerText === "") {
            document.getElementById("mult").disabled = true
        }
    })
    sub.addEventListener("click", (e) => {
        displayvalue2.innerText = displayValue1.innerText
        displayvalue2.append(e.target.value)
        displayValue1.innerText = ""
        if (displayValue1.innerText === "") {
            document.getElementById("sub").disabled = true
        }
    })
    const eq = document.getElementById("eq")
    eq.addEventListener("click", (e) => {
        const num1 = displayValue1.innerText
        
        if (displayvalue2.innerText.includes("+")) {
            const array2 = Array.from(displayvalue2.innerText)
            array2.pop()
            const array2Join = array2.join("")
            // displayvalue2.innerText = array2Join 
           const array2Value = array2Join 
           array2Value 
           const sum = Number(num1) + Number(array2Value)
           displayvalue2.innerText = ""
           displayValue1.innerText = ""
           displayvalue2.innerText = sum
        }
        if (displayvalue2.innerText.includes("-")) {
            const array2 = Array.from(displayvalue2.innerText)
            array2.pop()
            const array2Join = array2.join("")
            // displayvalue2.innerText = array2Join 
           const array2Value = array2Join 
           array2Value 
           const sub = Number(array2Value) - Number(num1)  
           displayvalue2.innerText = ""
           displayValue1.innerText = ""
           displayvalue2.innerText = sub
        }
        if (displayvalue2.innerText.includes("*")) {
            const array2 = Array.from(displayvalue2.innerText)
            array2.pop()
            const array2Join = array2.join("")
            // displayvalue2.innerText = array2Join 
           const array2Value = array2Join 
           array2Value 
           const mult = Number(num1) * Number(array2Value)
           displayvalue2.innerText = ""
           displayValue1.innerText = ""
           displayvalue2.innerText = mult
        }
        if (displayvalue2.innerText.includes("/")) {
            const array2 = Array.from(displayvalue2.innerText)
            array2.pop()
            const array2Join = array2.join("")
            // displayvalue2.innerText = array2Join 
           const array2Value = array2Join 
           array2Value 
           const divide = Number(array2Value) / Number(num1)  
           displayvalue2.innerText = ""
           displayValue1.innerText = ""
           displayvalue2.innerText = divide
        }
        
    })

    
    
         
    clear.addEventListener("click", () => {
        displayValue1.innerText = ''
        displayvalue2.innerText = ''
        return

})

 




  




    


