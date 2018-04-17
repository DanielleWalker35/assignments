
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import MarketLocations from "./MarketLocations";
import { addZip } from "../../redux/locations";
import { enteredZip } from "../../redux/locations";

class FarmersMarkets extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.initialState;
    }

    handleChange(e) {
        this.props.addZip(e.target.value);
        this.setState(this.initialState);

    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.enteredZip(this.props.zip);
        this.setState(this.initialState);
    }

    render(props) {
        const { data, loading, errMsg } = this.props;
        if (loading) {
            return (
                <div className="loading">...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const farmersMarketsComponent = data.map((location, i) => <MarketLocations key={location.id + i} {...location} id={location.id} />);
            return (
                <div className="marketsWrapper">
                    <div className="marketsHeader">
                        <h1 className="marketsH1">Enter a zip code to find near by Farmer's Markets</h1>
                        <form className="form1" onSubmit={this.handleSubmit} >
                            <input type="text" value={this.props.zip} placeholder="Enter Zip Code" onChange={this.handleChange} />
                            <button className="marketSubmit">Submit</button>
                        </form>
                    </div>
                    <h3 className="marketsH3">Farmer's Markets near {this.props.zip}</h3>
                    <div className="farmersMarketsListWrapper">
                        <div className="listOfMarkets">{farmersMarketsComponent}</div>
                        <div className="imageWrapper">
                            <div className="marketImage"></div>
                            <div className="marketImageBerries"></div>
                            <img src="https://imgur.com/iHmw4oZ" alt=""/>
                        </div>
                    </div>
                    <Link className="linkHome" to="/">Return Home</Link>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps, { addZip, enteredZip })(FarmersMarkets);
