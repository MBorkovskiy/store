import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant/url";

import { IProduct, IdProps } from "../types/types";

interface IInitialState {
  product: IProduct;
  isLoading: boolean;
}

export const getProduct = createAsyncThunk<IProduct, IdProps>(
  "product/getProduct",
  async ({ id }) => {
    const responce = await axios.get(`${BASE_URL}/products/${id}`);
    return responce.data;
  }
);

const initialState: IInitialState = {
  product: {
    title: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    category: "",
    finalSumm: 0,
  },
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
