import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMarketInfo } from "../../redux/locations";

class MarketLocations extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };
   
    handleClick(event) {
        // event.preventDefault();
        this.props.getMarketInfo(this.props.id);
        this.setState(this.initialState);
    };
    render(props) {
        console.log(this.props)
        return (
            <div>
                <div>
                    <p>
                        <Link onClick={this.handleClick} to={`/marketinfo/${this.props.id}`}>{this.props.marketname}</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(null, { getMarketInfo })(MarketLocations);