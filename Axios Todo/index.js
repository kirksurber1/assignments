// const { default: axios } = require("axios")
// const { type } = require("os")
// const { relative } = require("path")





function axiosGet() {


axios.get("https://api.vschool.io/kirksurber/todo")
.then(response => {
    for(let i =0; i<response.data.length; i++){
    
    const h2 = document.createElement("h2")
    h2.innerText = response.data[i].title
    const dropZone = document.getElementById("dropZone")
    const makeDiv = document.createElement("div")
    const img = document.createElement("img")
    img.src = response.data[i].imgUrl
    const check = document.createElement("input")
    check.className = "check"
    check.type = "checkbox"
    check.value = response.data[i].completed
    check.dataset.value = response.data[i]._id
    const checkLabel = document.createElement("label")
    checkLabel.innerText = response.data[i].completed
    
    const editBut = document.createElement("button")
    editBut.innerText = "Edit"
    editBut.className = "edit"
    editBut.value = response.data[i]._id
    const delBut = document.createElement("button")
    delBut.innerText = "Delete"
    delBut.className = "delete"
    delBut.value = response.data[i]._id
    const newTodo = document.querySelector("newTodo")
    
    dropZone.appendChild(makeDiv)
    makeDiv.appendChild(h2)
    makeDiv.appendChild(check)
    makeDiv.appendChild(checkLabel)
    makeDiv.appendChild(editBut)
    makeDiv.appendChild(delBut)
    makeDiv.dataset.value = response.data[i]._id
    
    
    makeDiv.style.display = "flex"
    makeDiv.style.position = "relative"
    makeDiv.style.border = "1px solid #3c3c3c"
    makeDiv.style.borderRadius = "15px"
    h2.style.width = "50%"
    editBut.style.marginLeft = "60%"
}
})
.catch(error => console.log(error))

}

axiosGet()

document.addEventListener("submit", (e) => {
    e.preventDefault()

 

    form.onsubmit = makeTodo()
    
})


function makeTodo() {
    const formTitle = document.getElementById("title").value
    const formPrice = document.getElementById('price').value
    const formDes = document.getElementById('description').value
    const formURL = document.getElementById('imgUrl').value
    const dropZone = document.getElementById("dropZone")
    const makeDiv = document.createElement("div")
    makeDiv.className = "newTodo"
    const h2 = document.createElement('h2')
    h2.innerText = formTitle
    const h3Desc = document.createElement('h3')
    h3Desc.innerText = formDes
    const h3Price = document.createElement("h3")
    h3Price.innerText = formPrice
    const h3Url = document.createElement("h3")
    h3Url.innerText = formURL
    const img = document.createElement("img")
    
    const check = document.createElement("input")
    check.className = "check"
    check.type = "checkbox"
    check.dataset.value = response.data[i]._id

    const checkLabel = document.createElement("label")
    checkLabel.innerText = "false"
    
    const editBut = document.createElement("button")
    editBut.innerText = "Edit"
    editBut.className = "edit"
    const delBut = document.createElement("button")
    delBut.innerText = "Delete"
    delBut.className = "delete"
    const newTodo = document.querySelector("newTodo")
    
    dropZone.appendChild(makeDiv)
    makeDiv.appendChild(h2)
    makeDiv.appendChild(h3Price)
    makeDiv.appendChild(h3Desc)
    makeDiv.appendChild(h3Url)
    makeDiv.appendChild(img)
    makeDiv.appendChild(check)
    makeDiv.appendChild(checkLabel)
    makeDiv.appendChild(editBut)
    makeDiv.appendChild(delBut)

    makeDiv.style.display = "flex"
    makeDiv.style.position = "relative"
    makeDiv.style.border = "1px solid #3c3c3c"
    makeDiv.style.borderRadius = "15px"
    img.style.width = "5vw"

    const newTodoInfo = {
        completed: checkLabel.innerHTML,
        title: title.value,
        price: price.value,
        description: description.value,
        imgUrl: imgUrl.value
    
    }

    axios.post("https://api.vschool.io/kirksurber/todo", newTodoInfo)
    .then(response => console.log(response.data))

    .catch(error => error)

    dropZone.innerHTML = ""
    axios.get("https://api.vschool.io/kirksurber/todo")
    .then(response => {
        for(let i =0; i<response.data.length; i++){
        
        const h2 = document.createElement("h2")
        h2.innerText = response.data[i].title
        const dropZone = document.getElementById("dropZone")
        const makeDiv = document.createElement("div")
        const img = document.createElement("img")
        img.src = response.data[i].imgUrl
        const check = document.createElement("input")
        check.className = "check"
        check.type = "checkbox"
        check.value = response.data[i].completed
        check.dataset.value = response.data[i]._id

        const checkLabel = document.createElement("label")
        checkLabel.innerText = response.data[i].completed
        
        const editBut = document.createElement("button")
        editBut.innerText = "Edit"
        editBut.className = "edit"
        const delBut = document.createElement("button")
        delBut.innerText = "Delete"
        delBut.className = "delete"
        delBut.value = response.data[i]._id
        const newTodo = document.querySelector("newTodo")
        
        dropZone.appendChild(makeDiv)
        makeDiv.appendChild(h2)
        makeDiv.appendChild(img)
        makeDiv.appendChild(check)
        makeDiv.appendChild(checkLabel)
        makeDiv.appendChild(editBut)
        makeDiv.appendChild(delBut)
        
        
        makeDiv.style.display = "flex"
        makeDiv.style.position = "relative"
        makeDiv.style.border = "1px solid #3c3c3c"
        makeDiv.style.borderRadius = "15px"
        h2.style.width = "50%"
        editBut.style.marginLeft = "60%"
        img.style.width = "5vw"

        location.reload()
    }
    })
    .catch(error => console.log(error))
    
    

   // CLEAR ALL DROPZONE INNERHTML AND DO AXIOS GET AGAIN TO GAIN ID'S!!!!
}

document.addEventListener("change", (e) => {
    if(e.target.checked) {
       axios.put("https://api.vschool.io/kirksurber/todo/" + e.target.dataset.value, {"completed": true})
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
    }else {
        axios.put("https://api.vschool.io/kirksurber/todo/" + e.target.dataset.value, {"completed": false})
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
    }
    location.reload
})




document.addEventListener("click", (e) => {
    if (e.target.innerText === "Delete") {
        axios.delete("https://api.vschool.io/kirksurber/todo/" + e.target.value)
        .then(response => {
            const dropZone = document.getElementById("dropZone")
            dropZone.innerHTML = ""
            axiosGet()
            location.reload
    })
        
        
        .catch(error => console.log(error))
        
    } else if(e.target.innerText === "Edit") {
// grab h2 and allow input box
    
        
    }
})


function updateTask() {
    const checkStat = document.getElementsByClassName("check")
    checkStat.addEventListener("change", (e) => {
        axios.put("https://api.vschool.io/kirksurber/todo/" + e.target.value)





        const newTodoInfo = {
            completed: checkLabel.innerHTML,
            title: title.value,
            price: price.value,
            description: description.value,
            imgUrl: imgUrl.value
        
        }        
    })
}


