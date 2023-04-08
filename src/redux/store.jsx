import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/ProductSlice'
import cartReducer from './slice/AddToCardSlice'
export const store = configureStore({
  reducer: {
    eccom:productReducer,
    cart:cartReducer
  },
})