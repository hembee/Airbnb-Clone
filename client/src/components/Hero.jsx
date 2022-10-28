import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <img src={require("../images/grid.png")} alt="" className="hero--img" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by
        <br /> one-of-a-kind hosts-all without leaving <br /> home.
      </p>
    </section>
  );
};

export default Hero;
