import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { replaceData } from "../redux/slice/AddToCardSlice";
const Store = () => {
  const { cartData } = useSelector((state) => state.cart);
  // const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const handleDecrease = (i) => {
    let tempData = [...cartData];
    let obj = { ...tempData[i] };
    let amount = obj.amount;
    amount = amount > 1 ? amount - 1 : amount;
    obj.amount = amount;
    tempData[i] = obj;
    dispatch(replaceData(tempData));
  };
  const handleIncrease = (i) => {
    let tempData = [...cartData];
    let obj={...tempData[i]}
    let amount=obj.amount
    amount=amount<tempData[i].stock ? amount+1 : tempData[i].stock
    obj.amount=amount
    tempData[i]=obj
    dispatch(replaceData(tempData))

  };
  
  // item delete 
  const handleRemove = (i) => {
    console.log(i)
    let tempData=[...cartData]
    let objData=  tempData.filter((ele)=>{
      return  ele!==tempData[i]
    })
    console.log(objData)
    dispatch(replaceData(objData))
  };
  return (
    <>
      <div className="container">
        <table className="table table-secondary">
          <thead>
            <tr>
              <th scope="col">item</th>
              <th scope="col">color</th>
              <th className="ps-5" scope="col">
              Quantity
              </th>
              <th scope="col">Amount</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((ele, i) => {
              return (
                <tr>
                  <td className="w-25">
                    <img src={ele.image.url} className="img-fluid h-3" alt="" />
                  </td>
                  <td>
                    <button
                      className="clrIcon mt-2 activeClr"
                      style={{ backgroundColor: ele.color }}
                    >
                      <TiTick />
                    </button>
                  </td>
                  <td>
                    <div className="d-flex mt-2 align-items-center">
                      <p
                        className="plusMinus my-0"
                        onClick={() => handleDecrease(i)}
                      >
                        <AiOutlineMinus />
                      </p>
                      {ele.amount}
                      <p className="plusMinus my-0" onClick={()=>handleIncrease(i)}>
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-2 ps-4">{ele.amount}</p>
                  </td>
                  <td>
                    <MdOutlineDeleteOutline
                      onClick={()=>handleRemove(i)}
                      className="mt-2 ms-3"
                      style={{ color: "red", cursor: "pointer" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Store;
