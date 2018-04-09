import React from 'react'

function OneBadge (props){
    const { firstName, lastName, phone, email, placeOfBirth, favoriteFood, comments } = props;
    return(
        <div>
            <p>Name: {firstName} {lastName}</p>
            <p>Place of birth: {placeOfBirth}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Favorite food: {favoriteFood}</p>
            <div>{comments}</div>
        </div>
    )
}
export default OneBadge;