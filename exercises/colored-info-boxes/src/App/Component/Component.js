import React from 'react';

function Component(props){
    const {data, backgroundColor} = props;
    const style = {
        backgroundColor
    }
   return(
    <div class="box"style= {style}>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.info}</p>
    </div>
   )
}
export default Component;