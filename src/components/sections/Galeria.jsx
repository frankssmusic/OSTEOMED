// src/components/sections/Galeria.jsx
import React from 'react';
import { galeria } from '../../constants/data';

const Galeria = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-semibold text-gray-700 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Fotos reales del centro se integran en fase de producción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Foto grande izquierda */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-lg">
            <img
              src={galeria[0].imagen}
              alt={galeria[0].label}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {galeria[0].label}
              </span>
            </div>
          </div>

          {/* Grid de 4 fotos pequeñas derecha */}
          <div className="grid grid-cols-2 gap-4">
            {galeria.slice(1).map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={item.imagen}
                  alt={item.label}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;