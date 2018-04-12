import React from 'react'
import { Link } from "react-router-dom";


function MarketLocations(props) {
    // console.log(props)
    function handleClick(event) {
        event.preventDefault();
        this.props.getMarketInfo(props.id);
        this.setState(this.initialState);
    }
    return (
        <div>
            <div>
                <p>
                    <Link onClick={handleClick} to={`/marketinfo/${props.id}`}>{props.marketname}</Link>
                </p>
            </div>
        </div>
    )
}
export default MarketLocations;