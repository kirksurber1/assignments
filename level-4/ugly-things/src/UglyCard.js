import React from 'react'

export default function UglyCard(props) {
  
  
    return (
    <div>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <div className='imgHolder' src={props.url}></div>
        <button>Edit</button>
        <button>Delete</button>

    </div>
  )
}
