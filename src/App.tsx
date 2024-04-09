import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./Pages/login";
import PizzaG from "./Pages/Pizza";
import CreateAccount from "./Pages/Add";
import { Modal } from "@mui/material";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<PizzaG />} />
          ) : (
            <Route
              path="/"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
          )}
          <Route
            path="/Add"
            element={<CreateAccount handleCreateAccount={Function} />}
          />

          <Route path="/PizzaG" element={<PizzaG />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
