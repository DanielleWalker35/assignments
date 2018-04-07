import React, { Component } from 'react';
import axios from 'axios';

class CharacterInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            character: {},
        }
    }

    componentDidMount() {
        this.getInfo(this.props.match.params.personId);
    }
    componentWillReceiveProps(newProps) {
        if(this.props.match.params.personId !== newProps.match.params.personId){
            this.getInfo(newProps.match.params.personId);
        }
    }

    getInfo = (personId) => {
        axios.get("https://swapi.co/api/people/" + personId)
            .then(response => {
                this.setState({
                    character: response.data
                })
            })
    }

    render() {
        const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url} = this.state.character;
        return(
            <div>
                <h1>{name}</h1>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Hair Color: {hair_color}</p>
                <p>Skin Color: {skin_color}</p>
                <p>Eye Color: {eye_color}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Gender: {gender}</p>
            </div>
        )
    }
}
export default CharacterInfo;

