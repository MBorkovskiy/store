import { configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "./allProductsSlice";
import allCategoriesSlice from "./allCategoriesSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    allProducts: allProductsSlice,
    allCategories: allCategoriesSlice,
    category: categorySlice,
    users: userSlice,
    cartItems: cartSlice,
    product: productSlice,
    isAuth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
