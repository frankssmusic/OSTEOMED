// src/services/agendaService.js
// Arquitectura de conectores intercambiables para agendamiento

const AGENDA_MODE = import.meta.env.VITE_AGENDA_MODE || 'whatsapp';
// Opciones: 'whatsapp' | 'email' | 'supabase' | 'dentalink' | 'google_calendar'

export async function enviarSolicitud(formData) {
  switch (AGENDA_MODE) {
    case 'whatsapp':
      return enviarWhatsApp(formData);
    case 'email':
      return enviarEmail(formData);
    case 'supabase':
      return enviarSupabase(formData);
    case 'dentalink':
      return enviarDentalink(formData);
    case 'google_calendar':
      return enviarGoogleCalendar(formData);
    default:
      throw new Error('Modo de agenda no válido');
  }
}

// Función para enviar por WhatsApp (fase actual)
function enviarWhatsApp(formData) {
  const { nombre, telefono, especialidad, fecha, horario, mensaje } = formData;
  const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER || '56994769217';
  const texto = `Hola, soy ${nombre}. Teléfono: ${telefono}. Quiero agendar una hora en ${especialidad} para el ${fecha} a las ${horario}. ${mensaje || ''}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
  return { success: true, message: 'Abriendo WhatsApp...' };
}

// Función para enviar por email (placeholder)
function enviarEmail(formData) {
  // Implementar envío por email usando un servicio como EmailJS o backend
  console.log('Enviando por email:', formData);
  return { success: true, message: 'Solicitud enviada por email' };
}

// Función para enviar a Supabase (fase 2)
function enviarSupabase(formData) {
  // Implementar inserción en Supabase
  console.log('Enviando a Supabase:', formData);
  return { success: true, message: 'Solicitud guardada en base de datos' };
}

// Función para enviar a Dentalink (fase 3)
function enviarDentalink(formData) {
  // Implementar API de Dentalink
  console.log('Enviando a Dentalink:', formData);
  return { success: true, message: 'Integrado con Dentalink' };
}

// Función para enviar a Google Calendar (fase 3)
function enviarGoogleCalendar(formData) {
  // Implementar Google Calendar API
  console.log('Enviando a Google Calendar:', formData);
  return { success: true, message: 'Evento creado en Google Calendar' };
}