import React from 'react';
import heros from './data.json';
import Hero from './Hero'
function SuperHero(){
    function speak(obj){
        alert (obj.catchphrase)
    };
    const herosLis = heros.map((person, i) => <Hero key={person.name +i} obj={person} handleClick={speak} />);

    const divSyle ={
        margin: "10px",
        textAlign: "center",
        fontFamily: "Archivo Narrow",
        fontSize: "35px",
        // backgroundColor: "red",
        // width: "70%"
    }
    return(
        <div style = {divSyle}>
            <h1>Super Heros' Catch Phrases</h1>
            <p>Click me to hear what I have to say...</p>
            {herosLis}
        </div>
    )
}
export default SuperHero;