import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<PizzaG />} />
          </Routes>
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </main>
    </>
  );
};

export default App;
