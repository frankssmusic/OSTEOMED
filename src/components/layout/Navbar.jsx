// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react'; // Asumiendo Lucide React instalado

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="https://res.cloudinary.com/dhl87xrhg/image/upload/v1777942986/logo_osteomed_tivogg.png" alt="OSTEOMED" style={{ height: '65px', objectFit: 'contain' }} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#especialidades" className="hover:text-green-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Especialidades
              </a>
              <a href="#horarios" className="hover:text-green-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Horarios
              </a>
              <a href="#ubicacion" className="hover:text-green-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Ubicación
              </a>
              <a href="#contacto" className="hover:text-green-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Urgencias Badge */}
          <div className="hidden md:flex items-center bg-emergency text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
            <Phone className="w-4 h-4 mr-1" />
            Urgencias Dentales
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white text-green-dark px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Agendar Hora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-green-dark inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-light hover:bg-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-light">
            <a href="#especialidades" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-dark">
              Especialidades
            </a>
            <a href="#horarios" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-dark">
              Horarios
            </a>
            <a href="#ubicacion" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-dark">
              Ubicación
            </a>
            <a href="#contacto" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-dark">
              Contacto
            </a>
            <div className="bg-emergency text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Urgencias Dentales
            </div>
            <button className="bg-white text-green-dark block w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
              Agendar Hora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;