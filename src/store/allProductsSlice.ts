import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant/url";
import { IProduct } from "../types/types";

export interface ParamsProps {
  id?: string;
  limit: number;
  skip: number;
}

interface InitialStateProps {
  allProducts: IProduct[];
  isLoading: boolean;
}

export const getAllProducts = createAsyncThunk<IProduct[], ParamsProps>(
  "products/getAllProducts",
  async ({ limit, skip }) => {
    const responce = await axios.get(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );
    return responce.data.products;
  }
);
const initialState: InitialStateProps = {
  allProducts: [],
  isLoading: false,
};

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = false;
    });
  },
  reducers: {
    changeStore: (state, action) => {
      state.allProducts = [...action.payload];
    },
  },
});

export const { changeStore } = allProductsSlice.actions;
export default allProductsSlice.reducer;
