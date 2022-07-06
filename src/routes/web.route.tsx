import React from "react";
import { Route, Routes } from "react-router-dom";

import { CreateCustomer } from "../pages/customers/CreateCustomerPage";
import CustomerListPage from "../pages/customers/CustomerListPage";
import { CreateRent } from "../pages/rents/CreateRentPage";
import RentListPage from "../pages/rents/RentListPage";

export const WebRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/rents" element={<RentListPage />} />
        <Route path="/rents/create" element={<CreateRent />} />
        <Route path="/customers" element={<CustomerListPage />} />
        <Route path="/customers/create" element={<CreateCustomer />} />
    </Routes>
  );
};
