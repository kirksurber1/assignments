import React, {useContext} from "react";
import './Form.css'
import { UglyContext } from "./UglyContext";


function Form (props) {

    const [formData, setFormData] = React.useState ( {
        title: "", imgUrl: "", description: ""
    })

    const {addUglyItem} = useContext(UglyContext)

    function handleChange (event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
            [event.target.name]: event.target.value
    }})
    }

function handleSubmit (event) {
    event.preventDefault()
    addUglyItem(formData)

    setFormData (prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }

    })
    setFormData({
        title: "", 
        imgUrl: "",
        description: ""
    })
}

    return (
        <div className="formDiv">
            <h2>Add Ugly Thing</h2>
            <form onSubmit={handleSubmit}>
                <input value={formData.title} placeholder="Title" name="title" onChange={handleChange}></input>
                <input value={formData.imgUrl} placeholder="imgUrl" name="imgUrl" onChange={handleChange}></input>
                <input value={formData.description} placeholder="Why it's Ugly" name="description" onChange={handleChange}></input>
                <button>Add Ugly Thing to List</button>
            </form>
        </div>
    )
}

export default Form