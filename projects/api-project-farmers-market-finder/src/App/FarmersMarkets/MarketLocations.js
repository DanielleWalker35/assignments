import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MarketLocations extends Component {

    render(props) {
        return (
            <div className="marketLocationsWrapper">
                <Link className="oneMarket" to={`/marketinfo/${this.props.id}`}>{this.props.marketname}</Link>
            </div>
        )
    }
}

export default connect(null, {})(MarketLocations);