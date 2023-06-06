import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant/url";
import { IProduct, IdProps } from "../types/types";

interface InitialStateProps {
  category: IProduct[];
}

export const getCategory = createAsyncThunk<IProduct[], IdProps>(
  "category/getCategory",
  async ({ id }) => {
    const responce = await axios.get(`${BASE_URL}/products/category/${id}`);
    return responce.data.products;
  }
);

const initialState: InitialStateProps = {
  category: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
  reducers: {
    clearCategory: (state) => {
      state.category = [];
    },
  },
});

export default categorySlice.reducer;
export const { clearCategory } = categorySlice.actions;
