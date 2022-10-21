
const form = document["airline-form"]


form.addEventListener("submit", (event) => {
    event.preventDefault()
    var fName = form["fName"].value;
    var lName = form["lName"].value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form["travel-location"].value
    var diets = []

    for (let i =0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diets.push(form.diet[i].value)
        }
    }


    alert("First Name: "  + fName + "\nLast Name: " + lName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diets )
    
    
})   