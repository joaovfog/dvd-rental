import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerListPage from "../pages/customers/CustomerListPage";
import MovieListPage from "../pages/movies/MovieListPage";

export const WebRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/customers" element={<CustomerListPage />} />
    </Routes>
  );
};
