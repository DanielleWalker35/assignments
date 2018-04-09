import React from 'react'

function OneBadge(props) {
    const { firstName, lastName, phone, email, placeOfBirth, favoriteFood, comments } = props;

    if (props.index % 2) {
        return (
            <div>
                <h1 style={{ backgroundColor: "blue" }}>Name Badge</h1>
                <p>Name: {firstName} {lastName}</p>
                <p>Place of birth: {placeOfBirth}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Favorite food: {favoriteFood}</p>
                <div>{comments}</div>
            </div>
        )
    } else {
        return (
            <div>
                <h1 style={{ backgroundColor: "red" }}>Name Badge</h1>
                <p>Name: {firstName} {lastName}</p>
                <p>Place of birth: {placeOfBirth}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Favorite food: {favoriteFood}</p>
                <div>{comments}</div>
            </div>
        )
    }
}
export default OneBadge;