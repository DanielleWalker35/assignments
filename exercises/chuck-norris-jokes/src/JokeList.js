import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from "./redux/jokes"
import JokeComponent from "./JokeComponent"

class JokeList extends Component {
    
    componentDidMount() {
        this.props.getJokes();
    }

    render() {
        // console.log(this.props)
        const { data, loading, errMsg, getJokes } = this.props
        const jokeComponent = data.map((joke, i) => <JokeComponent key={joke.value.id} {...joke} />)
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
                <div className="jokeBox">
                    <header></header>
                    <div>{jokeComponent}</div>
                    <h2>To Get a New Joke Click Below</h2>
                    <button onClick={getJokes}>Click Me!</button>
                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return state.jokes;
}
export default connect(mapStateToProps, { getJokes })(JokeList);
