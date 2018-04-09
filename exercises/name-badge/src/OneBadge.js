import React from 'react'

function OneBadge(props) {
    const { firstName, lastName, phone, email, placeOfBirth, favFood, comments } = props;

    if (props.index % 2) {
        return (
            <div className="oneBadge">
                <h1 style={{ backgroundColor: "#ef9c53" }}>Hello My Name Is:</h1>
                <p>Name: {firstName} {lastName}</p>
                <p>Place of birth: {placeOfBirth}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Favorite food: {favFood}</p>
                <div className="comments2">{comments}</div>
            </div>
        )
    } else {
        return (
            <div className="oneBadge">
                <h1 style={{ backgroundColor: "#6fb5fc" }}>Hello My Name Is:</h1>
                <div className="badge">
                    <p>Name: {firstName} {lastName}</p>
                    <p>Place of birth: {placeOfBirth}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Favorite food: {favFood}</p>
                    <div className="comments2">{comments}</div>
                </div>
            </div>
        )
    }
}
export default OneBadge;