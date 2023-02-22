import React from 'react'
import axios from 'axios'

const UglyContext = React.createContext ()

function UglyProvider (props) {



const [uglyItems, setUglyItems] = React.useState (["apple", "orange",{
    title: "", 
    imgUrl: "", 
    description: ""
}])



function getData () {
    axios.get("https://api.vschool.io/kirksurber/thing")
        .then(res =>  setUglyItems({uglyItems: res.json}))
        .catch(err => console.log(err))
}

React.useEffect(() => { 
    getData()

  
},[uglyItems])

const addUglyItem = (item) => {
    setUglyItems(prevUglyItems => [item, ...prevUglyItems])
}

    return (
        <UglyContext.Provider value={{
            
            getData,
            uglyItems,
            addUglyItem

        }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export { UglyContext, UglyProvider}