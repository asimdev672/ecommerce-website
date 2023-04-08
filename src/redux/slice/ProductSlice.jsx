import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  sortingProducts: [],
  featuredProducts: [],
  isSort: false,
};

// async thunk
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  return axios
    .get("https://api.pujakaitem.com/api/products")
    .then((res) => res.data);
});

export const ProductSlice = createSlice({
  name: "eccom",
  initialState,
  reducers: {
    sortingVal: (state, action) => {
      // let newSortProduct;
      // let tempProducts = [...action.payload.data];
      // if (action.payload.value === "accending") {
      //   newSortProduct = tempProducts.sort((a, b) => {
      //     return a.name.localeCompare(b.name);
      //   });
      // }
      state.isSort = action.payload.isSort;
      state.sortingProducts = action.payload.newSortProduct;
    },
    InputFilter: (state, action) => {
      console.log("InputFilter", action.payload);
      state.isSort=true
      state.sortingProducts=action.payload.tempInpData
    },
    sideBarFilterData: (state, action) => {
      state.sortingProducts = action.payload.tempFilterData;
      state.isSort = true;
    },
    clearFilter: (state, action) => {
      state.isSort = false;
    },
  },
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      const featuredProducts = action.payload.filter(
        (ele) => ele.featured == true
      );
      state.loading = false;
      state.products = action.payload;
      state.sortingProducts = action.payload;
      state.featuredProducts = featuredProducts;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { sortingVal, clearFilter, InputFilter } = ProductSlice.actions;

export default ProductSlice.reducer;

// action
export const sortArray = (data) => {
  return (dispatch) => {
    const { pdata, isSort, value } = data;
    let newSortProduct;
    if (value === "accending") {
      newSortProduct = pdata.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (value === "deccending") {
      newSortProduct = pdata.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (value === "lowest") {
      newSortProduct = pdata.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (value === "heights") {
      newSortProduct = pdata.sort((a, b) => {
        return b.price - a.price;
      });
    }
    else{
      newSortProduct=pdata.filter((ele)=>{
        return ele.company===value
      })
    }
    dispatch(ProductSlice.actions.sortingVal({ isSort, newSortProduct }));
  };
};

// sideBar Filter action
export const sideBarFilter = (dataa) => {
  return (dispatch) => {
    const { data, value } = dataa;
    let tempFilterData;
    if (value === "all") {
      tempFilterData = [...dataa.data];
    } else {
      tempFilterData = data.filter((ele) => {
        return ele.category === value;
      });
    }

    dispatch(ProductSlice.actions.sideBarFilterData({ tempFilterData }));
  };
};

// InputFilter Filter action
export const InputFilterAc = (dataa) => {
  console.log("dataadataa", dataa);
  return (dispatch) => {
    const { data, value } = dataa;
    let tempInpData;
    tempInpData=data.filter((ele) => {
      console.log('first',ele)
      return (
        ele.name.toLowerCase().includes(value) ||
        ele.company.toLowerCase().includes(value) ||
        ele.category.toLowerCase().includes(value)
      );
    });
    dispatch(ProductSlice.actions.InputFilter({tempInpData}));
  };
};
