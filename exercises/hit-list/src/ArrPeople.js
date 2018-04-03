import React from 'react'
import Person from './Person';

function ArrPeople(props) {
    const {people} = props;
    const onePeep = people.map(person => <Person key={person.image} {...person} />)
    return (
       <ul className="list">
           {onePeep}
       </ul>
    )
}
export default ArrPeople;