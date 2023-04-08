import React from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortingVal, sortArray } from "../redux/slice/ProductSlice";
const SortingNav = ({ setVeiw }) => {
  const { sortingProducts, products } = useSelector((state) => state.eccom);
  const [selectVal, setSelectVal] = useState();
  const dispatch = useDispatch();
  // sorting selected value
  const sorting = (e) => {
    //  dispatch(sortingVal({data:sortingProducts,value:e.target.value,isSort:true}))
    dispatch(
      sortArray({ pdata: [...products], value: e.target.value, isSort: true })
    );
  };
  return (
    <>
      <div className=" py-2 d-flex justify-content-between">
        <div>
          <button className="SortingNavIcon" onClick={() => setVeiw("grid")}>
            <RiLayoutGridFill className="fs-4" />
          </button>
          <button className="SortingNavIcon" onClick={() => setVeiw("col")}>
            <GiHamburgerMenu className="fs-4" />
          </button>
        </div>
        <div> {sortingProducts.length} totall product </div>
        <div>
          <select
            className="w-100"
            style={{ outline: "none" }}
            onChange={sorting}
          >
            <option value="lowest">price(lowest)</option>
            <option value="heights">price(heights)</option>
            <option value="accending">price(a-z)</option>
            <option value="deccending">price(z-a)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortingNav;
