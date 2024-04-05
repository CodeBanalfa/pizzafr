import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PizzaListe from './components/PizzaList/PizzaListe';

import { mockDataPizza } from './data/MockData';


function App() {
  return (
    <>
    <Header/>;
    <PizzaListe pizza={mockDataPizza} />
    </>
  );
}

export default App;
