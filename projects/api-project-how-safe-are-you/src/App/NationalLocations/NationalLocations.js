import React, { Component } from 'react';
import { connect } from "react-redux";
import { getLocationNat } from "../../redux/locations";
import { selectYear } from "../../redux/locations";
import { Link } from "react-router-dom";
import Location from "./Location";
import Option from "./Option";


class NationalLocations extends Component {
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    componentDidMount(props) {
        this.props.getLocationNat();
    };

    render(props) {
        const { data, loading, errMsg, year, selectYear } = this.props;
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const locationComponent = data.filter(obj => obj.year === year).sort((a, b) => b.count - a.count).map((location, i) => <Location key={location.location_name + i} {...location} />);
            // console.log(locationComponent);
            const yearArr = [];
            function addYears() {
                for (let i = 1993; i <= 2015; i++) {
                    yearArr.push(i)
                }
            };
            addYears();
            const createOptions = yearArr.map((year, i) => <Option key={year + i} year={year} />)
            return (
                <div>
                    <h1>Select a Year to find where the most crime occured...</h1>
                    <div>year drop down</div>
                    <form name="form1" >
                        <select name="jumpmenu" value={year}onChange ={selectYear}>
                            {createOptions}
                        </select>
                    </form>
                    <h3>Where did the crime during -insert year- take place?</h3>
                    <div>{locationComponent}</div>
                    <Link to="/">Home</Link>
                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return state.natLocations;
}
export default connect(mapStateToProps, { getLocationNat, selectYear })(NationalLocations);