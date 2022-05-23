import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardRouters from "./DashboardRouters";
import PrivateRouters from "./PrivateRouters";
import PublicRouters from "./PublicRouters";

const AppRouters = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        //  dispatch(loginEmailPassAsync(user.uid, user.displayName))
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return <h1>Espere....</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouters isAut={isLoggedIn}>
              <Login />
            </PublicRouters>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouters isAut={isLoggedIn}>
              <Register />
            </PublicRouters>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouters isAut={isLoggedIn}>
              <DashboardRouters />
            </PrivateRouters>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
