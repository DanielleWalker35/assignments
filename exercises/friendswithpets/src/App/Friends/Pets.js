import React from 'react';


const Pet = (props) => 
   ( <div>
            <h4> Name: {props.pet.name}</h4>
            <h5> Breed: {props.pet.breed}</h5>
        </div>
    );

export default Pet;