import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import AddVendor from "./AddVendor";
import UpdateVendor from "./UpdateVendor"


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/addVendor" element={<AddVendor />}></Route>
      <Route path="/updateVendor" element={<UpdateVendor />}></Route>
    </Routes>
  );
}

export default AllRoutes;
