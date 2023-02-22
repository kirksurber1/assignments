import React from "react";
import UglyCard from "./UglyCard";
import axios from "axios";

const DataContext = React.createContext() 

function DataProvider(props) {

  

    const [uglyArray, setUglyArray] = React.useState([])

    const getData = () => {
        axios.get(`https://api.vschool.io/kirksurber/thing`)
        .then(res => setUglyArray({uglyArray: res.data}))
    }

   

   
    const uglyItems = uglyArray.map(uglyItem => {
        return <UglyCard 
            title={uglyItem.title} 
            url={uglyItem.url}
            description={uglyItem.description}
            /> 
    })
    
    function addUglyItem (item) {
        setUglyArray(prevUglyArray => [item, ...prevUglyArray])
    }

    React.useEffect(() => {
        getData()
    }, [uglyItems])
       

    return( 
        <DataContext.Provider value={{
            addUglyItem,
            uglyArray,
            uglyItems,

        }}>
            {props.children}
        </DataContext.Provider>
    )
    
    }
export {DataProvider, DataContext}