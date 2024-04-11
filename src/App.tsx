import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./Pages/login";
import PizzaG from "./Pages/Pizza";
import CreateAccount from "./Pages/Add";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/PizzaG" />
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
                <Navigate to="/PizzaG" />
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
