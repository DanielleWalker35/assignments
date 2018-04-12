
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMarketLocations } from "../../redux/locations";
import MarketLocations from "./MarketLocations";
import { addZip } from "../../redux/locations";
import { enteredZip } from "../../redux/locations";
// import MarketInfo from "./MarketInfo";

class FarmersMarkets extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.initialState;
    }
    componentDidMount(props) {
        this.props.getMarketLocations();
    };
    handleChange(e) {
        this.props.addZip(e.target.value);
        // console.log();
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.enteredZip(this.props.zip);
        this.setState(this.initialState);
    }

    render(props) {
        const { data, loading, errMsg } = this.props;
        // console.log(this.props);
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const farmersMarketsComponent = data.map(location => <MarketLocations key={location.id} {...location} id={location.id} />);
            return (
                <div>
                    <h1>Enter a valid zip code to find near by Farmer's Markets</h1>
                    <form className="form1" onSubmit={this.handleSubmit} >
                        <input type="text" placeholder="Enter Zip Code" onChange={this.handleChange} />
                        <button>Submit</button>
                    </form>

                    <h3>Near by Farmer's Markets</h3>
                    <div>{farmersMarketsComponent}</div>
                    {/* <MarketInfo></MarketInfo> */}
                    <Link to="/">Home</Link>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps, { getMarketLocations, addZip, enteredZip })(FarmersMarkets);
