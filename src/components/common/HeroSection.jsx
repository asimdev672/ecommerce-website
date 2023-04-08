import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ h1 }) => {
  return (
    <>
      <div className="HeroSection--main">
        <div className="container">
          <div className="row">
            <div className="col-10  mx-auto">
              <div className="row row-cols-md-2 row-cols-1">
                <div className="col ">
                  <p className="welcome">Welcome to</p>
                  <h1 className="pb-3">{h1}</h1>
                  <p className="pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores eligendi nobis fugiat veritatis quaerat sequi ipsum
                    nemo. Officiis, accusamus magni.
                  </p>
                  <NavLink to="/products">
                    <button className="hero_btn">Shop Now</button>
                  </NavLink>
                </div>
                <div className="col ">
                  <figure className="pt-4">
                    <img src="\images\hero.jpg" className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
