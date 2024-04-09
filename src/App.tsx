import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
          {isAuthenticated ? (
            <Route path="/" element={<PizzaG />} />
          ) : (
            <Route
              path="/"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
          )}
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
        </Routes>
      </main>
    </>
  );
};

export default App;
