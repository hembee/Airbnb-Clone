import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      {props.openSpots > 0 && <div className="card--badge">ONLINE</div>}
      <img
        src={require(`../images/${props.img}`)}
        alt="swimmer"
        className="card--img"
      />
      <div className="card--stats">
        <img
          src={require("../images/star.png")}
          alt="star"
          className="card--star"
        />
        <span>{props.rating}</span>
        <span className="gray"> ({props.rev}) •</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
};

export default Card;
