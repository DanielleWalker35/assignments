import React from 'react';
import Pet from './Pets';

 // const petLis = friends.map((person, i) => person.pets.map(pet => <Pets key={pet.name + i} pet={pet} />))
const Friend = (props) => 
   ( <div>
            <h1> Name: {props.human.name}</h1>
            <h3> Age: {props.human.age}</h3>
           {props.human.pets.map((pet, i) => <Pet key={pet.name + i} pet={pet} />)}
        </div>
    );

export default Friend;

