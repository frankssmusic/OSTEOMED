// src/components/sections/Urgencias.jsx
import React from 'react';
import { Phone } from 'lucide-react';
import { horarios } from '../../constants/data';

const Urgencias = () => {
  return (
    <section className="relative py-16 bg-gray-700 text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dhl87xrhg/image/upload/v1777944222/boxdentalhero_dt5qst.jpg')",
        }}
      ></div>
      <div className="absolute inset-0" style={{ background: "rgba(13,77,64,0.85)" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-emergency text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Urgencias Dentales
          </div>
          <h2 className="text-4xl font-display font-semibold mb-6">
            Estamos cuando más nos necesitas
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-2">Horario de Urgencias</h3>
            <p className="text-base text-green-mid">{horarios.urgencias}</p>
          </div>
          <button className="bg-emergency hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />
            Llamar ahora: +56 9 9476 9217
          </button>
        </div>
      </div>
    </section>
  );
};

export default Urgencias;