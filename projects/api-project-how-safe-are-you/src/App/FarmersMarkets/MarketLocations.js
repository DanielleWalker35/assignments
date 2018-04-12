import React from 'react'

function MarketLocations(props) {
    // console.log(props)
    return (
        <div>
            <div>{props.marketname}</div>
            <div>{props.id}</div>
        </div>
    )
}
export default MarketLocations;