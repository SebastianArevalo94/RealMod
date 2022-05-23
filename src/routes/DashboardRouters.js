import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import CrudProperties from "../components/CrudProperties";
import Carrito from "../components/Carrito";
import Favoritos from "../components/Favoritos";
import SearchPropertie from "../components/SearchPropertie";
import NavBar from "../components/NavBar";
import Perfil from "../components/Perfil";

const DashboardRouters = () => {
  return (
    <div>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud-properties" element={<CrudProperties />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/favs" element={<Favoritos />} />
          <Route path="/search" element={<SearchPropertie />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </div>
  );
};

export default DashboardRouters;
