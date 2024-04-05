import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './Pages/login';

import Pizza from './Pages/Pizza';
import PizzaG from './Pages/Pizza';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Router>
      <Header />
      <main>
        {isAuthenticated ? (
          <Routes>
            <Route path="/pizza" element={<PizzaG/>} /> 
          </Routes>
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </main>
    </Router>
  );
}

export default App;
