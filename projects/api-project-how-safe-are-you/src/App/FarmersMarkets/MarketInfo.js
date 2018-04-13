import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMarketInfo } from "../../redux/locations";
import { setCurrentId } from "../../redux/locations";

class MarketInfo extends Component {
    constructor(props) {
        super();
    }
    componentDidMount(props) {
        this.props.getMarketInfo(this.props.match.params.marketId);
        this.props.setCurrentId(this.props.match.params.marketId);
    }
    //write a method to parse the string
    parseStr(str) {
        if (!str) return "No information provided";
        return str.split(";").map((product, i) => <li key={product + i}>{product}</li>);
    };

    filterStr(str) {
        console.log(str);
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

    render(props) {
        // console.log(this.props.data);
        const { info, loading, errMsg, data, id } = this.props;
        let marketName = "";
        function getObject(arr, idNum) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === idNum) {
                    marketName = arr[i].marketname;
                }
            }
            return null;
        }
        getObject(data, id);

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
                        <p className="infoP"><span className="bold">GoogleLink: </span><a href={this.filterGoogle(info.GoogleLink)}>{this.filterGoogle(info.GoogleLink)}</a></p>
                        <ul><span className="bold">Products:</span> {this.parseStr(info.Products)}</ul>
                        <p className="infoP"><span className="bold">Schedule:</span> {this.filterStr(info.Schedule)}</p>
                        <Link className="linkMarkets" to="/farmersMarkets">Back to Markets</Link>
                        <Link className="linkHome" to="/">Return Home</Link>
                    </div>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps, { getMarketInfo, setCurrentId })(MarketInfo);