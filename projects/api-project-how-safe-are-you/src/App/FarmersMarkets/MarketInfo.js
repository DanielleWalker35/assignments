// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMarketInfo } from "../../redux/locations";
// import Products from "./Products";


class MarketInfo extends Component {
    constructor(props) {
        super();


    }
    componentDidMount(props) {
        this.props.getMarketInfo(this.props.match.params.marketId);
        // this.setState(this.initialState);
    }
    //write a method to parse the string
    parseStr(str) {
        if (!str) return;
        return str.split(";").map((product, i) => <li key={product + i}>{product}</li>);
    };

    filterStr(str) {
        if (!str) return;
        return str.replace(/<br>/g, "");
    }
    filterGoogle(str) {
        if (!str) return;
        return str.replace(/ *\([^)]*\) */g, "");
    }

    render(props) {
        // console.log(this.props.data.id);
        const { info, loading, errMsg } = this.props;

        // const productLis = arrOfStrings.map((product, i) => <li key={product + i} {...product} />)

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            // const oneProduct = prodArr.map((product, i) => <li key={product + i} {...product} />)
            return (

                <div>
                    <h1>Name of Farmer's Market</h1>
                    <p>Address: {info.Address}</p>
                    <p>GoogleLink: <a href={this.filterGoogle(info.GoogleLink)}>{this.filterGoogle(info.GoogleLink)}</a></p>
                    {/* <Products productStr={info.Products}></Products> */}
                    {/* <ul>Products:
                        {oneProduct}
                    </ul> */}
                    <ul>Products: {this.parseStr(info.Products)}</ul>
                    <p>Schedule: {this.filterStr(info.Schedule)}</p>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps, { getMarketInfo })(MarketInfo);