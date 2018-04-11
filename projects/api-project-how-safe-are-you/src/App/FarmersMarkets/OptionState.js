import React from 'react'

function OptionState(props) {
    // console.log(props);
    return (
        <option value={props.state}>{props.state}</option>
    )
}
export default OptionState;