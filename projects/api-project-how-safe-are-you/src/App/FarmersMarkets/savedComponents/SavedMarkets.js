import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndividualSavedMarket from "./IndividualSavedMarket";

class SavedMarkets extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        window.scrollTo(0, 0)
    };
    render(props) {
        console.log(this.props.savedMarkets);
        // console.log(this.props.data);
        const { info, loading, errMsg, data, id, savedMarkets, marketName } = this.props;

        if (loading) {
            return (
                <div className="loading">...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const indivMarketComponent = savedMarkets.map((market, i) => <IndividualSavedMarket key={market.name + i} marketName={market.name} marketInfo={market.info} />);
            return (
                <div className="savedMarketsWrapper">
                    <h2>Saved Markets</h2>
                    <div>{indivMarketComponent}</div>
                    <Link className="linkMarkets" to="/farmersMarkets">Back to Markets</Link>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps)(SavedMarkets);