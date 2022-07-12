

for (let i = 1; i < 101; i++) {
    const array = []
    
    array.push(i)
    if (i%3 ===0 && i%5 === 0) {
        array.splice("")
        array.push("FizzBuzz")
        
    }   
     else if (i%3 === 0 ) {
        array.splice("")
       array.push("Fizz")       
     }
     else if (i%5 ===0) {
        array.splice("")
        array.push("Buzz")
     }
     
     console.log(array)        
           
// let counter = 0
// for (let j = 0; j < array.length; j++) {
//     if (array[j] === "FizzBuzz")
// }
    
}