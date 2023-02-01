import React from "react";
import './FriendsList.css'
import people from './people'
import Friend from './Friend'
import Pets from "./Pets";

function FriendsList () {
    
    const friends = people.map(item => {

        return <Friend 
        item={item}>
            {item.pets.map((pet => {
                return <Pets
                pets={pet}></Pets>
            }))}
            
        </Friend>
    
        
          
    })
 
   
    return (
        <div>
            {friends}
           
        </div>
    )
}

export default FriendsList