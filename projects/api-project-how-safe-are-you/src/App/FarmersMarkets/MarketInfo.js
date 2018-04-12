// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMarketInfo } from "../../redux/locations";


class MarketInfo extends Component {
    // constructor(props) {
    //     super();
    //     this.state = {
    //         character: {},
    //     }
    // }

    componentDidMount() {
        this.props.getMarketInfo();
    }
    
    render(props) {
        const { info, loading, errMsg } = this.props;
        console.log(this.props.info);
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    <h1>Name of Farmer's Market</h1>
                   <p>Address:{info.Address}</p>
                   <p>GoogleLink:{info.GoogleLink}</p>
                   <p>Products:{info.Products}</p>
                   <p>Schedule:{info.Schedule}</p>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return state.locations;
}
export default connect(mapStateToProps, { getMarketInfo })(MarketInfo);