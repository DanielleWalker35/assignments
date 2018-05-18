import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMarketInfo } from "../../redux/locations";
import { setCurrentId } from "../../redux/locations";
import { saveInfo } from "../../redux/locations";
import { saveName } from "../../redux/locations";

class MarketInfo extends Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(props) {
        window.scrollTo(0, 0);
        this.props.getMarketInfo(this.props.match.params.marketId);
        this.props.setCurrentId(this.props.match.params.marketId);
        this.props.saveName(this.props.match.params.marketId);
    }
    //write a method to parse the string
    parseStr(str) {
        if (!str) return "No information provided";
        return str.split(";").map((product, i) => <li key={product + i}>{product}</li>);
    };
    filterStr(str) {
        if (str === " <br> <br> <br> " || str === undefined) {
            return "No information provided";
        } else {
            return (str.replace(/<br>/g, ""));
        }
    }
    filterGoogle(str) {
        if (!str) return;
        return str.replace(/ *\([^)]*\) */g, "");
    }
    handleClick(e) {
        e.preventDefault();
        this.props.saveInfo(this.props);
    }

    render(props) {
        const { info, loading, errMsg, marketName } = this.props;


        if (loading) {
            return (
                <div className="loading">...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div className="marketInfoWrapper">
                    <div className="marketInfo">
                        <h1 className="marketInfoH1">{marketName}</h1>
                        <p className="infoP"><span className="bold">Address:</span> {info.Address}</p>
                        <p className="infoP"><span className="bold">GoogleLink: </span><a href={this.filterGoogle(info.GoogleLink)} target="_blank">{this.filterGoogle(info.GoogleLink)}</a></p>
                        <ul><span className="bold">Products:</span> {this.parseStr(info.Products)}</ul>
                        <p className="infoP"><span className="bold">Schedule:</span> {this.filterStr(info.Schedule)}</p>
                        <Link className="linkMarkets" to="/farmersMarkets">Back to Markets</Link>
                        <Link className="linkHome" to="/">Return Home</Link>
                        <button onClick={this.handleClick}> <Link to="/savedMarkets">Save Market</Link> </button>
                    </div>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps, { getMarketInfo, setCurrentId, saveInfo, saveName })(MarketInfo);