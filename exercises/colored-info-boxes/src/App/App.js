import React from 'react';
import Component from './Component/Component.js';
function App() {
    // const styles = {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     backgroundColor: "yellow",
    //     fontFamily: "sans-serif"
    // }
    const data1 = {
        title: "This is my title 1",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "blue"
    }
    const data2 = {
        title: "This is my title 2",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "violet"
    }
    const data3 = {
        title: "This is my title 3",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "lightgreen"
    }
    const data4 = {
        title: "This is my title 4",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "purple"
    }
    const data5 = {
        title: "This is my title 5",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "orange"
    }
    const data6 = {
        title: "This is my title 6",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "grey"
    }
    const data7 = {
        title: "This is my title 7",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "red"
    }
    const data8 = {
        title: "This is my title 8",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "pink"
    }
    const data9 = {
        title: "This is my title 9",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "yellow"
    }
    const data10 = {
        title: "This is my title 10",
        subtitle: "I've got a body",
        info: "Here is my info",
        backgroundColor: "green"
    }
    return (
        <div className="wrapper">
            <Component {...data1} ></Component>
            <Component {...data2}></Component>
            <Component {...data3}></Component>
            <Component {...data4}></Component>
            <Component {...data5}></Component>
            <Component {...data6}></Component>
            <Component {...data7}></Component>
            <Component {...data8}></Component>
            <Component {...data9}></Component>
            <Component {...data10}></Component>
        </div>
    )
}

export default App;