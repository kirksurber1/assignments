var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop() 
    console.log(vegetables)

fruit.shift()
console.log(fruit)

console.log(fruit.indexOf("orange"))

fruit.push(fruit.indexOf("orange"))

console.log(vegetables.length)

vegetables.push(vegetables.length)

const food = fruit + vegetables

console.log(food)
    
for (var i =0; i < food.length; i++) {
    food.splice(food[4], food[5])
}

for (var i =food.length-1; i>=0; i--) {
    food.toString()
}

