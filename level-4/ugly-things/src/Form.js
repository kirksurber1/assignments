import React from 'react'
import './Form.css'
// import axios from 'axios'

export default function Form() {
  
  const [formData, setFormData] = React.useState({
        title: "", url: "", description: "" 
  }) 


    function handleChange(event) {
        setFormData (prevFormData => {
            return {
            ...prevFormData,
            [event.target.name]: event.target.value
            }
        })
    }



  function handdleSubmit(event) {
    event.preventDefault()

    //API

    // axios.post = ('https://api.vschool.io/kirksurber/thing', {
    //   title: formData.title,
    //   imgUrl: formData.url,
    //   description: formData.description
    // })
    //   .then(res => res.json)
    //   .catch(err => console.log(err))
  

    setFormData ({
        title: "",
        url: "",
        description: ""
    }
    )
  }


  
  return (
    <div>
        <form onSubmit={handdleSubmit}>
            <input type="text" placeholder="Title" name='title' value={formData.title} onChange={handleChange} ></input>
            <input type="text" placeholder="URL" name='url' value={formData.url} onChange={handleChange} ></input>
            <input type="text" placeholder="Why is this ugly?" name='description' value={formData.description} onChange={handleChange} ></input>
            <button>Submit</button>
        </form>
    </div>
  )
}
