import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/types";

interface InitialStateProps {
  cartItems: IProduct[] | never[];
}

const initialState: InitialStateProps = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
