import React from 'react';
function Card(props) {
    const styles = {
        border: "3px solid black",
        borderRadius: "10px",
        padding: "5%",
        margin: "2%",
        width: "300p%",
        height: "200%",
        backgroundColor: "",
    }

    function pickBackgroundColor() {

        switch (props.human.timeToGo) {
            default:
                styles.backgroundColor = "grey";
                break;
            case "Spring":
                styles.backgroundColor = "pink";
                break;
            case "Winter":
                styles.backgroundColor = "blue";
                break;
            case "Fall":
                styles.backgroundColor = "orange";
                break;
            case "Summer":
                styles.backgroundColor = "yellow";
                break;
        }
    };
    pickBackgroundColor();

let dollarSigns = "";

    function dollaz() {
        switch (true) {
            default:
                break;
            case props.human.price > 1000:
                dollarSigns = "$$$";
                break;
            case props.human.price < 1000 && props.human.price > 500:
                dollarSigns = "$$";
                break;
            case props.human.price < 500:
                dollarSigns = "$";
                break;
        }
    }
    dollaz();
    return (
        <div className="card" style={styles}>
            <header> {dollarSigns} </header>
            <h1>Place: {props.human.place}</h1>
            <h2>Price: {props.human.price} </h2>
            <h3>Time to go: {props.human.timeToGo} </h3>
        </div>
    )
}
export default Card;