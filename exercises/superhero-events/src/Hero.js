import React from 'react';

function Hero(props) {
    const imgStyle = {
        width: "300px"
    }


    return (
        <div onClick={() => props.handleClick(props.obj)} >
            <h2>{props.obj.name}</h2>
         <img src={props.obj.image} alt="superhero pic" style = {imgStyle}/>
        </div>
    )
}
export default Hero;