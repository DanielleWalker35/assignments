import React from 'react';
import EditForm from './EditForm';

function BountyList(props) {

    return (
        <div className="bountyWrapper">
            <div>
                <button className="deleteButton" onClick={() => props.deleteBounty(props._id)}>X</button>
            </div>
            <div className="bountyInfo">
                <h3>WANTED: {props.firstName} {props.lastName}</h3>
                <p>Bounty: ${props.bountyAmount}</p>
                <p>Living: {props.living.toString()}</p>
                <p>Type: {props.type}</p>
            </div>
            <EditForm className="editForm" {...props} id={props._id} />
        </div>
    )
}

export default BountyList;