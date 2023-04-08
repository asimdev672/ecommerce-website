import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  InputFilterAc,
  sideBarFilter,
  sortArray,
} from "../redux/slice/ProductSlice";
const FilterSection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.eccom);
  const handleInputFilter = (e) => {
    dispatch(InputFilterAc({ data: [...products], value: e.target.value }));
  };
  // sideBarFilter
  const sideBarFilters = (d) => {
    dispatch(sideBarFilter({ data: [...products], value: d }));
  };
  // clearFilter Btn
  const clearFilterBtn = () => {
    dispatch(clearFilter());
  };
  // handleCompanyFilter
  const handleCompanyFilter = (e) => {
    dispatch(
      sortArray({ pdata: [...products], value: e.target.value, isSort: true })
    );
  };
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="search here"
          className="p-1 mt-3 w-100"
          style={{ outline: "none" }}
          onChange={handleInputFilter}
        />
        <h5 className="pt-3 ">Catagory</h5>
        <ul>
          <li className="listItems" onClick={() => sideBarFilters("all")}>
            All
          </li>
          <li className="listItems" onClick={() => sideBarFilters("mobile")}>
            Mobile
          </li>
          <li className="listItems" onClick={() => sideBarFilters("laptop")}>
            Laptop
          </li>
          <li className="listItems" onClick={() => sideBarFilters("computer")}>
            Computer
          </li>
          <li
            className="listItems"
            onClick={() => sideBarFilters("accessories")}
          >
            Accessories
          </li>
          <li className="listItems" onClick={() => sideBarFilters("watch")}>
            Watch
          </li>
        </ul>
        <h5 className="pb-2">Company</h5>
        <select
          className="w-100 py-1"
          style={{ outline: "none" }}
          onChange={handleCompanyFilter}
        >
          <option value="all">All</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="dell">Dell</option>
          <option value="nokia">Nokia</option>
          <option value="rolex">Rolex</option>
        </select>
        <h5 className="pt-3">Range:</h5>
        <input type="range" min='0' max='10' />
        
        <h5 className="pt-3">Price</h5>
        <p className="ps-3">500$</p>
        <button className="clearFilter" onClick={clearFilterBtn}>
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default FilterSection;
