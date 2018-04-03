import React, { Component } from 'react';

import axios from "axios";

const colorApiUrl = "http://www.colr.org/json/color/random";

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            backgroundColor: "white",
            width: "70%",
            height: "500px",
            margin: "10%",

        }
    }


    componentDidMount() {
        axios.get(colorApiUrl).then(response => {
            console.log(response.data.colors)
            const { colors } = response.data;
            const indivColor = colors.map(newColor => ("#" + newColor.hex));
            const finalColor = indivColor.toString();
            console.log(finalColor);

            this.setState({
                backgroundColor: finalColor,
            })
        })
    }



    render() {
        // console.log(this.state.backgroundColor);
        // const {colors} = this.state;
        return (
            <div style={this.state}></div>
        )
    }

}

export default Colors;