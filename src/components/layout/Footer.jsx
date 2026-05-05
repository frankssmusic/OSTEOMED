// src/components/layout/Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react'; // Asumiendo Lucide React
import { contacto, horarios, especialidades } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <img src="https://res.cloudinary.com/dhl87xrhg/image/upload/v1777942986/logo_osteomed_tivogg.png" alt="OSTEOMED" style={{ height: '48px', objectFit: 'contain' }} className="mb-4" />
            <p className="text-gray-300 mb-4">
              Centro Médico y Dental en Punta Arenas, Región de Magallanes.
              Tu salud en manos expertas, con especialidades en traumatología, odontología y más.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 OSTEOMED. Todos los derechos reservados.
            </p>
          </div>

          {/* Especialidades */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Especialidades</h3>
            <ul className="space-y-2">
              {especialidades.map((esp) => (
                <li key={esp.id} className="text-gray-300 text-sm">
                  {esp.nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Centro y Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Centro</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>{contacto.direccion}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{contacto.telefono}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{contacto.email}</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>{horarios.general}</p>
                  <p>{horarios.sabados}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;