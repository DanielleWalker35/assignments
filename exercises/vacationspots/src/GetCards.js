import React from 'react';
import Card from './Card';
let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  }, {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  }, {
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  }, {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  }, {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]
const headerStyle = {
  textAlign: "center",
  fontSize: "80px",
  textDecoration: "underline",
}
const wrapStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}
function GetCards() {
  const GetCards = vacationSpots.map((person, i) => <Card key={person.place + i} human={person} />)
  return (
    <div>
      <h1 style={headerStyle}>Travel Cards</h1>
      <div className="wrapper" style={wrapStyle}>
        {GetCards}
      </div>
    </div>
  )
}
export default GetCards;