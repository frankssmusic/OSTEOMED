// src/components/sections/Convenios.jsx
import React from 'react';
import { Check } from 'lucide-react';
import { convenios } from '../../constants/data';

const Convenios = () => {
  return (
    <section className="bg-green-pale py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-semibold text-gray-700 mb-6">
            Convenios Médicos
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {convenios.map((convenio, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <Check className="w-5 h-5 text-green mr-2" />
                <span className="text-gray-700 font-medium">{convenio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convenios;