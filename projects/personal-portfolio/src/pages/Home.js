import React, { Component } from 'react'


class Home extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            display: "HI"//I need to put what will render
        }
        this.state = this.initialState;
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(event) {
        console.log("hi");
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    //here i want a onscroll function that returns diff things when it hears a scroll
    render() {
        return (
            <div className="home">
                <h1>Danielle Walker</h1>
                <h2>Web Developer</h2>
            </div>
        )
    }
}
export default Home;