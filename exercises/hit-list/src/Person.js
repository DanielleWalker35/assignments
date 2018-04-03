import React from 'react'

function Person(props){
    const {name, image} = props
    return(
        <div className="person">
            <h1>{name}</h1>
            <img src={image} width="200px" alt=""/>
        </div>
    )
}
export default Person;