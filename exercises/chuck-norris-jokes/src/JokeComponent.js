import React from 'react'


function JokeComponent (props){
    console.log(props)
    return(
        <div className="joke">
           {props.value.joke}
        </div>
    )
}
export default JokeComponent;