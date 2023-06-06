import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant/url";

interface InitialStateProps {
  allCategories: string[];
  isLoading: boolean;
}

export const getAllCategories = createAsyncThunk<string[]>(
  "categories/getAllCategories",
  async () => {
    const responce = await axios.get(`${BASE_URL}/products/categories`);
    return responce.data;
  }
);

const initialState: InitialStateProps = {
  allCategories: [],
  isLoading: false,
};

const allCategorySlice = createSlice({
  name: "allCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
        state.isLoading = false;
      });
  },
});

export default allCategorySlice.reducer;
