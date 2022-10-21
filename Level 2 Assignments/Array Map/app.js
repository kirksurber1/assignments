// 1
const arr1 = [1, 2, 3]

const arr1Ret = arr1.map(function(num) {
    return num * 2
})

console.log(arr1Ret)

//2
const strings = arr1.toString()
console.log(strings)

//3
const names =["john", "JACOB", "jinGleHeimer", "schmidt"]

const nameCap = names.map ( (e) => {
    const naming = names.toString()
    const lowName = naming.toLowerCase()
    const updateName = lowName.charAt(0).toLocaleUpperCase() + naming.substring(1)
    console.log(updateName)
    
})

//4
let newPeople = []
let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
for (var i = 0; i < people.length; i++)
newPeople.push(people[i].name)
console.log(newPeople)

// 5

let oldEnough = []
for (var i = 0; i < people.length; i++)

if (people[i].age >= 18) {
    oldEnough.push(people[i].name + " can go to The Matrix")
}
else if (people[i].age < 18) {
    oldEnough.push(people[i].name + " is under age!!")

}
console.log(oldEnough)


