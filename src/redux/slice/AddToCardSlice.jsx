import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartData:[]
}
const AddToCardSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        state.cartData.push(action.payload)
    },
    replaceData:(state,action)=>{
     state.cartData=action.payload
    }
  }
});

export const {addToCart,replaceData} = AddToCardSlice.actions

export default AddToCardSlice.reducer