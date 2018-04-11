import React from 'react'

function Location(props) {
    // console.log(props)
    return (
        <div>
            <div>{props.location_name}</div>
            <div>{props.count}</div>
        </div>
    )
}
export default Location;