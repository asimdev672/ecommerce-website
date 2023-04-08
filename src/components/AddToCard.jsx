import React from "react";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { addToCart } from "../redux/slice/AddToCardSlice";
import { Link } from "react-router-dom";
const AddToCard = ({ data ,handleAdd,handleDecrease,handleIncrease,amount}) => {
  let { colors } = data;
  const [active, setActive] = useState(colors[0]);
  console.log('active clr',active)
  return (
    <>
      <div className="d-flex align-items-center">
        <span className="me-2">color:</span>
        {colors.map((currColor, index) => {
          return (
            <>
              <button
                key={index}
                 onClick={() => setActive(colors[index])}
                className={
                  active === currColor ? "clrIcon activeClr" : "clrIcon"
                }
                style={{ backgroundColor: currColor }}
              >
                {active === currColor ? <TiTick /> : null}
              </button>
            </>
          );
        })}
      </div>
      <div>
        <div className="d-flex align-items-center">
          <p className="plusMinus" onClick={handleDecrease}>
            <AiOutlineMinus />
          </p>
          {amount}
          <p className="plusMinus" onClick={handleIncrease}>
            <AiOutlinePlus />
          </p>
        </div>
        <Link to='/store'>
          <button className="addToCard" onClick={()=>handleAdd(active)}>
            Add To Card
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddToCard;
