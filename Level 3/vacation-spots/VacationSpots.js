import React from "react";
import './VacationSpots.css'
import './Cards.css'
import Cards from './Cards'
import vacation from './vacation'



function VacationSpots () {

    const hotSpots = vacation.map(spot => {
        return <Cards 
        place={spot.place}
        price={spot.price}
        timeToGo={spot.timeToGo}
        ></Cards>
    })

    return (
        <div className="vacSpots">
            {hotSpots}
        </div>
    )
}

export default VacationSpots 