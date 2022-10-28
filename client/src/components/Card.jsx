import React from "react";

const Card = ({ img, rating, rev, country, title, price }) => {
  const colors=['red', 'orange','yellow', 'green', 'blue']
  return (
    <div className="card">
      <img
        src={require(`../images/${img}`)}
        alt="swimmer"
        className="card--img"
      />
      <div className="card--stats">
        <img
          src={require("../images/star.png")}
          alt="star"
          className="card--star"
        />
        <span>{rating}</span>
        <span className="gray"> ({rev}) .</span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <b>From ${price}</b> / person
      </p>
      {colors.map(color => {
        return <h3>{color.toUpperCase()}</h3>
      })}
    </div>
  );
};

export default Card;
