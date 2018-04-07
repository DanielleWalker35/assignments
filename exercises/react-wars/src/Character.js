import React from 'react';
import { Link } from 'react-router-dom';

function Character(props) {
    const names = props.characters.map((person, i) => {
        return (
            <div key={i + 1}>
                <p >
                    <Link className="characterName" to={`/person/${i + 1}`} >{person.name}</Link>
                </p>
            </div>
        )
    });
    return(
        <div>
            {names}
        </div>
    )
}
           
export default Character;