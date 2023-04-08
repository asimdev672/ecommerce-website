import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FormatePrice from "./Helper/FormatePrice";

const FeatureProduct = () => {
  const { loading, featuredProducts } = useSelector((state) => state.eccom);

  if (loading) {
    <div className="text-center">loading........</div>
  }
  return (
    <>
      <div className="container mt-4">
        <small>check Now!</small>
        <h5>Our Feature Services</h5>
        <div className="row row-cols-md-3 mt-4">
          
            {featuredProducts.map((ele,i) => {
              return (
                <>
                <NavLink to={`/singleProduct/${ele.id}`} className="text-decoration-none">
                  <div className="col" key={i}>
                    <figure>
                      <img src={ele.image} className="img-fluid" alt="" />
                    </figure>
                    <div className="d-flex justify-content-between">
                      <p>{ele.name}</p>
                      <strong className="text-end">{<FormatePrice price={ele.price}/>}</strong>
                    </div>
                  </div>
                  </NavLink>
                </>
              );
            })}
          
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
