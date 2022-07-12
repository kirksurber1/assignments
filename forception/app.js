var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var newPeople = []
const alphabetArray = alphabet.split("")

for (var i = 0; i < people.length; i++) {
    newPeople.push(people[i] + " " + alphabetArray)    
    
        console.log(newPeople)
    
}
