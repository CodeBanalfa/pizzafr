import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./Pages/login";
import CreateAccount from "./Pages/Add";
import AuthenticationService from "./Pages/service/AuthenticationService";
import PizzaG from "./Pages/Pizza";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    AuthenticationService.isAuthenticated()
  );

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/PizzaG" replace />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/Add"
            element={
              !isAuthenticated ? (
                <CreateAccount handleCreateAccount={Function} />
              ) : (
                <Navigate to="/PizzaG" replace />
              )
            }
          />
          <Route path="/PizzaG" element={<PizzaG />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
