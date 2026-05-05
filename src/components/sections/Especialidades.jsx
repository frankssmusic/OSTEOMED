// src/components/sections/Especialidades.jsx
import React from 'react';
import { especialidades } from '../../constants/data';

const Especialidades = () => {
  return (
    <section id="especialidades" className="py-16 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-semibold text-gray-700 mb-4">
            Nuestras Especialidades
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Atención especializada para cuidar tu salud y la de tu familia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {especialidades.map((esp) => (
            <div
              key={esp.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={esp.imagen}
                  alt={esp.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-gray-700 mb-2">
                  {esp.nombre}
                </h3>
                <p className="text-sm text-gray-500">
                  {esp.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;