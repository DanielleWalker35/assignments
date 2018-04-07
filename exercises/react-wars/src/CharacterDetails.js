import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Character from './Character';
import CharacterInfo from './CharacterInfo';

class CharacterDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        // const id = this.props.match.params.characterID;
        axios.get(`https://swapi.co/api/people/`)
            .then(response => {
                this.setState({
                    characters: response.data.results
                })
            });
    }

    render() {
        console.log(this.state.characters)

        return (
            <div className="characterBox">
                <div className="pickCharacter">
                    <h1>Select A Character to See Their Stats</h1>
                    <ul>
                        <Character characters={this.state.characters} />
                    </ul>
                </div>
                <div className="pickedCharacter">
                    <Switch>
                        <Route path='/person/:personId' component={CharacterInfo} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default CharacterDetails;