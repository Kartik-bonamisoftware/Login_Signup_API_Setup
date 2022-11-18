import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import ProtectedRoute from "./views/ProtectedRoute";
import Registration from "./views/Registration";

const Root = () => {
  const [isAuth, setIsAuth] = useState(false);
  // const isLoggedIn = () => {
  //   setIsAuth(!isAuth);
  // };

  const access = localStorage.getItem("accessToken");
  console.log("Access token: " + access);

  useEffect(() => {
    if (access) {
      console.log("innerr");
      setIsAuth((prev) => !prev);
    }
  }, [access]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/dash"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
