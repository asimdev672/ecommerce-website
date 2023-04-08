import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormatePrice from "../Helper/FormatePrice";

const ListColVeiw = () => {
  const { products, loading,isSort ,sortingProducts} = useSelector((state) => state.eccom);

  return (
    <>
      <div className="row">
        {(isSort?sortingProducts:products).map((ele) => {
          return (
            <>
              <div className="col-12">
                <div className="d-flex p-3 mb-2  border">
                  <div className=" h-25 flex-1 ">
                    <img className="img-fluid" src={ele.image} alt="" />
                  </div>
                  <div className="flex-2 ps-5">
                    <div> {ele.name}</div>
                    {<FormatePrice price={ele.price} />}
                    <div style={{fontSize:'13px',fontWeight:'400'}}> {ele.description.slice(0,90)}...</div>
                  <Link to={`/singleProduct/${ele.id}`}>
                  <button className="btn btn-outline-danger mt-3"style={{color:'violet',borderColor:'violet'}}>Read More</button>
                  </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ListColVeiw;
