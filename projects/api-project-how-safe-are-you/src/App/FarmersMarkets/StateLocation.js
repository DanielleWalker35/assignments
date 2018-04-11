import React from 'react'

function StateLocation(props) {
    // console.log(props)
    return (
        <div>
            <div>{props.location_name}</div>
            <div>{props.count}</div>
        </div>
    )
}
export default StateLocation;