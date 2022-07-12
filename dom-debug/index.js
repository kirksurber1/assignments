const colors = ["", "red", "blue", "green"]

var add = document.getElementById("add")
add.addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.style.backgroundColor = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        var list = document.getElementById("list")
        list.style.backgroundColor= e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    
    const dropDown = createDropDown()
    subItem.append(subItemValue)
    subItem.append(dropDown)
    
    subItem.setAttribute("class", "subItem")
    return subItem
}


