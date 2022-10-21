
//1
var arr = [1, 2, 3];

const res = arr.reduce(function (final, num){
    final +=num
    return final
})
console.log(res)

//2

let arrString = arr.join("")
console.log(arrString)

//3

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voted = voters.reduce(function (final, yes){
    if (yes.voted) {
        final++
    }
    return final
}, 0)
console.log(voted)

//4 

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalPrice = wishlist.reduce(function (final, prices) {
    return final + prices.price
    
}, 0)
console.log(totalPrice)

//5

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const arrayString = arrays.reduce (function (final, str){
   final += str
    

    return final
})
console.log(arrayString)

// 6

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voteNum = voters.reduce (function (final, vote){
    if (vote.voted) {
        final.didvote++
    } else {
        final.didntvote++
    }
    final + vote.voted

    return final

}, { didvote: 0, didntvote: 0 })

console.log(voteNum)

const voteAge = voters.reduce (function (final, ageGroup){
    if (ageGroup.age >=18 && ageGroup.age <=25) {
        final["18-25"]++
    } else if(ageGroup.age >=26 && ageGroup.age <=35){
        final["26-35"]++
    } else if (ageGroup.age >=36 && ageGroup.age <=45){
        final["36-45"]++
    }

    return final
}, {"18-25": 0, "26-35": 0, "36-45": 0 })

console.log(voteAge)