import React from 'react';
import './App.css';
// Componentes
import Navbar from './Componentes/Nabvar'; 
import Cartas from './Componentes/Cartas';
import Footer from './Componentes/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Cartas />
      <Footer />
    </>
  );
}

export default App;
