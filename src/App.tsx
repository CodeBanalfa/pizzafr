import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import PizzaListe from './components/PizzaList/PizzaListe';
import { mockDataPizza } from './data/MockData';
import Login from './Pages/login';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main>
        {isAuthenticated ? (
          <Routes>
            <Route path="/pizza" element={<PizzaListe pizza={mockDataPizza} />} /> 
          </Routes>
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
         
        )}
      </main>
    </>
  );
}

export default App;

