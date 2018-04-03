import React, { Component } from 'react';

import axios from "axios";

import ArrPeople from './ArrPeople';

const hitListApiUrl = "http://api.vschool.io:6543/hitlist.json";
class DataContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
    }
    componentDidMount() {
        axios.get(hitListApiUrl).then(response => {
            console.log(response.data);
            const {data} = response;
            this.setState({
                people: data,
            })
        })
    }
render(){
   const {people} = this.state;
   console.log(people);
    return(
        <div className="listWrapper">
            <header>
            <h1 className="headding">Hit List</h1>
            <h3>People to hit...</h3>
            </header>
            <ArrPeople people={people}></ArrPeople>
        </div>
    )
}
}
export default DataContainer;