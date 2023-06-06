import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const CategoryPage = lazy(
  () => import("../../Pages/CategoryPage/CategoryPage")
);
const CardPage = lazy(() => import("../../Pages/CardPage/CardPage"));
const Auth = lazy(() => import("../../Pages/Auth/Auth"));
const CatalogPage = lazy(() => import("../../Pages/CatalogPage/CatalogPage"));
const FaqPage = lazy(() => import("../../Pages/FaqPage/FaqPage"));
const BasketPage = lazy(() => import("../../Pages/BasketPage/BasketPage"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/card/:id" element={<CardPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
