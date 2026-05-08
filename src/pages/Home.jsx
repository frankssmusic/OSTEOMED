// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Galeria from '../components/sections/Galeria';
import Especialidades from '../components/sections/Especialidades';
import Urgencias from '../components/sections/Urgencias';
import Agenda from '../components/sections/Agenda';
import PatagoniaBand from '../components/sections/PatagoniaBand';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Galeria />
      <Especialidades />
      <Urgencias />
      <Agenda />
      <PatagoniaBand />
      <Footer />
    </div>
  );
};

export default Home;