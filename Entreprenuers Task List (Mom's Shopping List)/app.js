
const form = document.form
const li = document.getElementsByClassName("li")

function delListItem () {
  document.addEventListener("click", (e) => { 
    if (e.target.value === "delete") {
      const delLi = document.getElementsByTagName("li")
      e.target.parentNode.remove()
      
    }

})
}

form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const listItem = form.listItem.value
    form.listItem.value = ""
    const div = document.createElement("div")
    const li = document.createElement("li")
    const del = document.createElement("button")
    const edit = document.createElement("button")
    li.textContent = listItem
    del.setAttribute("class", "delButton");
    del.setAttribute("label", "del")
    del.setAttribute("value", "delete")
    edit.setAttribute("class", "editButton")
    edit.setAttribute("label", "edit")
    edit.setAttribute("value", "edit")
    document.getElementById("appendTo").appendChild(li)
    li.appendChild(del)
    li.appendChild(edit)
    
    return (listItem)



    
})

 document.addEventListener("click", (e) => { 
   if (e.target.value === "delete") {
     const delLi = document.getElementsByTagName("li")
     e.target.parentNode.remove()
     
   }
    
 })
  
 document.addEventListener("click", (e) => {
   if (e.target.value ==="edit") {
     console.log(e.target.value)

   }
  })   


//     const editText = document.getElementsByTagName("li")
//     const background = document.createElement("div")
//     const modal = document.createElement("modal")
//     const textEdit = document.createElement("input")
//     const save = document.createElement("button")
//     background.setAttribute("class", "backgroundParent")
//     background.style.backgroundColor = "black"
//     background.style.opacity = "50%"
//     modal.setAttribute("class", "editPopUp")
//     modal.style.zIndex = "2"
//     modal.style.height = "10%"
//     modal.style.width = "30%"
//     textEdit.setAttribute("type", "text")
//     textEdit.setAttribute("class", "textEditPop")
//     textEdit.style.zIndex = "3"
//     save.setAttribute("class", "save")
//     save.style.zIndex = "3"
    
   


//    }
  
// } )

// function modal() {



// }

// const delButt = document.getElementById("appendTo")
//   var children = delButt.addEventListener("change", () => {
//     const trashButt = delButt.getElementsByClassName("delButton")
//     trashButt.addEventListener("click", function() {
//       const li = li.remove()
//     })
    

//   } )
    
  // var list = children.addEventListener("change", (e) => {

  //     for (var i = 0; i < list.length; i++)
      


  //   })
      
    
    
      




 


    // var getButton = document.getElementsByClassName("delButton")
    // for (var i = 0; i < getButton.length; i++)

    //  getButton.addEventListener("click", function() {
    //     console.log("it worked")
    //   })


    
