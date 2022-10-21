
let array1 = [3, 6, 8, 2]

const bigFive =  array1.filter(num => {
    if(num >=5) {
        return num
    }
})
console.log(bigFive)

//2 

const even = array1.filter(num => {
    if (num % 2 === 0) {
        return num
    }
})
console.log(even)

//3 

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]
let fiveLess = words.filter((e) => {
 return e.length <= 5;

})
console.log(fiveLess)


//4
const belong = []
const members = [
    {   name: "Angelina Jolie",
        member: "true",
        age: 80, 
    },
    {
        name: "Eric Jones",
        member: "false",
        age: 2, 
    },
    {
        name: "Paris Hilton",
        member: "true" ,
        age: 5,
    },
    { 
        name: "Kayne West", 
        member: "false",
        age: 16,
    },
    { 
        name: "Bob Ziroll", 
        member: "true",
        age: 100, 
    }
]

const isMember = members.filter(function (memb) {
    if (memb.member === "true") {
        return memb
    }
})
console.log(isMember)

//5
const ofAge = members.filter(function (agesOf) {
    if (agesOf.age > 18) {
        return agesOf
    }
})
console.log(ofAge)