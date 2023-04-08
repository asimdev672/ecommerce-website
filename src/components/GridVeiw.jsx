import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormatePrice from "../Helper/FormatePrice";
import Loading from "./Loading";
const GridVeiw = () => {
  const { sortingProducts,products, loading,isSort } = useSelector((state) => state.eccom);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="row row-cols-md-3 mt-4">  
          {(isSort?sortingProducts:products)?.map((ele) => {
            return (
              <>
                <Link to={`/singleProduct/${ele.id}`}>
                <div className="col" key={ele.id}>
                  <div className="border my-2">
                    <figure>
                      <img src={ele.image} className="img-fluid" alt="" />
                    </figure>
                    <div className="d-flex justify-content-between">
                      <p>{ele.name}</p>
                      <strong className="text-end">
                        {<FormatePrice price={ele.price} />}
                      </strong>
                    </div>
                  </div>
                </div>
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GridVeiw;
