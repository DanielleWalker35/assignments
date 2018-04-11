
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getStateLocation } from "../../redux/locations";
import { selectYear } from "../../redux/locations";
import { selectState } from "../../redux/locations";
import OptionYear from "./OptionYear";
import OptionState from "./OptionState";
import StateLocation from "./StateLocation";

class FarmersMarkets extends Component {
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    componentDidMount(props) {
        this.props.getStateLocation();
    };

    render(props) {
        const { data, loading, errMsg, year, selectYear, state, selectState } = this.props;
        
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const stateLocationComponent = data.filter(obj => obj.year === year).sort((a, b) => b.count - a.count).map((location, i) => <StateLocation key={location.location_name + i} {...location} />);
            // console.log(locationComponent);
            const yearArr = [];
            function addYears() {
                for (let i = 1993; i <= 2015; i++) {
                    yearArr.push(i)
                }
            };
            const stateArr = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
            addYears();
            const createOptionsYear = yearArr.map((year, i) => <OptionYear key={year + i} year={year} />);
            const createOptionsState = stateArr.map((state, i)=> <OptionState key={state +i} state={state} />);
            return (
                <div>
                    <h1>Select a Year to find where the most crime occured...</h1>
                    <div>state drop down</div>
                    <form name="form1" >
                        <select name="jumpmenu1" value={state}onChange ={selectState}>
                            {createOptionsState}
                        </select>
                    </form>
                    <div>year drop down</div>
                    <form name="form2" >
                        <select name="jumpmenu2" value={year}onChange ={selectYear}>
                            {createOptionsYear}
                        </select>
                    </form>
                    <h3>Where did the crime during -insert year- take place?</h3>
                    <div>{stateLocationComponent}</div>
                    <Link to="/">Home</Link>
                </div>
            )
            
        }
    }
}

const mapStateToProps = state => {
    return state.natLocations;
}
export default connect(mapStateToProps, { getStateLocation, selectYear, selectState })(FarmersMarkets);
