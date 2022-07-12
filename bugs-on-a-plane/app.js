
const form = document["airline-form"]


form.addEventListener("submit", (event) => {
    event.preventDefault()
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form["travel-location"].value
    var diets = []

    for (let i =0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            diets.push(form.diet[i].value)
        }
    }
    // var diet = form.diet.value
    // if (form.vegan.checked === true) {
    //     diet.push(form.vegan.value);
    // }
    // if (form.gluten.checked === true) {
    //     diet.push(form.gluten.value);
    // }
    // if (form.paleo.checked === true) {
    //     diet.push(form.paleo.value);
    // }

    alert("First Name: "  + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diets + "\nAwesome, now if you die, it won't be an accident.." )
    // + lastName + "\nAge: " + age    +  )
    
})   
    





//     var location = form["travel-location"].value;
   


    // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
