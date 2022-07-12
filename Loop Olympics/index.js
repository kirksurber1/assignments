var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (var i =0; i < array1.length; i++) {
    console.log(i);

}

for (var i = array1.length -1; i >= 0; i--) {
    console.log(array1[i])
}


const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i =0; i < fruit.length; i++) {
    console.log(fruit[i])
}

for (var i=0; i <= 100; i++) {
    if (i%2==0) {
        console.log(i)
        //array.push(i)
    }
}

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i=0; i<fruits.length; i++){
    if (i%2==0) {
        console.log(fruits[i])
        //array.push(fruits[i])
    }
}