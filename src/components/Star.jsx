import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar style={{color:'darkgoldenrod',fontSize:'2rem'}}/>
        ) : stars >= number ? (
          <FaStarHalfAlt style={{color:'darkgoldenrod',fontSize:'2rem'}}/>
        ) : (
          <AiOutlineStar style={{color:'darkgoldenrod',fontSize:'2rem'}}/>
        )}
      </span>
    );
  });
  return (
    <>
      <div style={{background:'white'}}>{ratingStar}</div>
    </>
  );
};

export default Star;
