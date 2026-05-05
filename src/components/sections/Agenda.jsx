// src/components/sections/Agenda.jsx
import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Send } from 'lucide-react';
import { especialidades, horarios, contacto } from '../../constants/data';
import { enviarSolicitud } from '../../services/agendaService';

const Agenda = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    especialidad: '',
    fecha: '',
    horario: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enviarSolicitud(formData);
      alert('Solicitud enviada exitosamente');
      setFormData({
        nombre: '',
        telefono: '',
        especialidad: '',
        fecha: '',
        horario: '',
        mensaje: '',
      });
    } catch (error) {
      alert('Error al enviar la solicitud');
    }
  };

  const handleWhatsApp = () => {
    enviarSolicitud(formData);
  };

  return (
    <section id="agenda" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-semibold text-gray-700 mb-4">
            Agenda tu Hora
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Solicita tu cita médica o dental de forma rápida y sencilla
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-green-pale rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Especialidad
                </label>
                <select
                  name="especialidad"
                  value={formData.especialidad}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                >
                  <option value="">Seleccionar especialidad</option>
                  {especialidades.map((esp) => (
                    <option key={esp.id} value={esp.nombre}>
                      {esp.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horario preferido
                  </label>
                  <input
                    type="time"
                    name="horario"
                    value={formData.horario}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje adicional (opcional)
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-500 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Solicitar Hora
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Agendar por WhatsApp
                </button>
              </div>
            </form>

            {/* Aviso dorado */}
            <div className="mt-6 bg-gold bg-opacity-10 border border-gold rounded-lg p-4">
              <p className="text-sm text-gold font-medium">
                Próxima fase: Integración agenda propia · Google Calendar · API Dentalink
              </p>
            </div>
          </div>

          {/* Información lateral */}
          <div className="space-y-6">
            {/* Card Horarios */}
            <div className="bg-gray-700 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Nuestros Horarios
              </h3>
              <div className="space-y-2 text-sm">
                <p>{horarios.general}</p>
                <p>{horarios.sabados}</p>
                <p className="text-emergency font-medium">{horarios.urgencias}</p>
              </div>
            </div>

            {/* Card Contacto */}
            <div className="bg-green-pale rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Información de Contacto
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Dirección:</strong> {contacto.direccion}</p>
                <p><strong>Teléfono:</strong> {contacto.telefono}</p>
                <p><strong>Celular:</strong> {contacto.celular}</p>
                <p><strong>Email:</strong> {contacto.email}</p>
                <p><strong>WhatsApp:</strong> {contacto.whatsapp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;