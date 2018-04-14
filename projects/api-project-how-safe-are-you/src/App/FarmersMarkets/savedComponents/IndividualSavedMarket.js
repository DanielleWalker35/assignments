import React from 'react'

function IndividualSavedMarket(props) {

   function parseStr(str) {
        if (!str) return "No information provided";
        return str.split(";").map((product, i) => <li key={product + i}>{product}</li>);
    };

   function filterStr(str) {
        // console.log(str);
        if (str === " <br> <br> <br> " || str === undefined) {
            return "No information provided";
        } else {
            return (str.replace(/<br>/g, ""));
        }
    }

   function filterGoogle(str) {
        if (!str) return;
        return str.replace(/ *\([^)]*\) */g, "");
    }
   
    return (
        <div>
            <h3>{props.marketName}</h3>
            <p className="infoP"><span className="bold">Address:</span> {props.marketInfo.Address}</p>
            <p className="infoP"><span className="bold">GoogleLink: </span><a href={filterGoogle(props.marketInfo.GoogleLink)}>{filterGoogle(props.GoogleLink)}</a></p>
            <ul><span className="bold">Products:</span> {parseStr(props.marketInfo.Products)}</ul>
            <p className="infoP"><span className="bold">Schedule:</span> {filterStr(props.marketInfo.Schedule)}</p>
        </div>
    )
}
export default IndividualSavedMarket;