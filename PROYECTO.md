# PROYECTO: OSTEOMED — Sitio Web Oficial
> Briefing completo para desarrollo. Leer este archivo antes de generar cualquier código.

---

## 1. DESCRIPCIÓN GENERAL

Sitio web informativo con agendamiento online para **OSTEOMED**, centro médico y dental ubicado en Punta Arenas, Región de Magallanes, Chile.

- **Tipo:** Sitio web institucional + sistema de agendamiento
- **Referencia visual:** [clinicaimet.cl](https://www.clinicaimet.cl) — estructura y estética similar
- **Audiencia:** Pacientes locales de Punta Arenas, incluyendo adultos mayores y usuarios no técnicos

---

## 2. STACK TECNOLÓGICO

```
Frontend:   React + Vite
Estilos:    Tailwind CSS
Animaciones: Framer Motion
Iconos:     Lucide React
Routing:    React Router DOM
Deploy:     Vercel
Imágenes:   Cloudinary (para imágenes del cliente) + Unsplash/Pexels (stock)
Backend:    Supabase (cuando se requiera agenda propia)
```

---

## 3. ESTRUCTURA DE CARPETAS

```
osteomed/
├── public/
│   └── logo_osteomed.jpg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Convenios.jsx
│   │   │   ├── Galeria.jsx
│   │   │   ├── Especialidades.jsx
│   │   │   ├── Urgencias.jsx
│   │   │   ├── Agenda.jsx
│   │   │   ├── Horarios.jsx
│   │   │   └── PatagoniaBand.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── SectionHeader.jsx
│   │       └── ContactCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Especialidad.jsx   ← página individual por especialidad (futuro)
│   ├── services/
│   │   ├── agendaService.js   ← lógica de agendamiento (whatsapp/email hoy, API mañana)
│   │   ├── dentalinkConnector.js  ← conector Dentalink (preparado, no activo)
│   │   └── googleCalendarConnector.js ← conector Google Calendar (preparado, no activo)
│   ├── hooks/
│   │   └── useAgenda.js
│   ├── constants/
│   │   └── data.js            ← especialidades, horarios, convenios, contacto
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── PROYECTO.md                ← este archivo
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 4. DISEÑO Y ESTÉTICA

### Paleta de colores
```css
--slate:          #3D4A5C   /* color principal, títulos, navbar, hero */
--slate-light:    #4d5e72   /* hover states */
--silver:         #a8b4c0   /* textos secundarios, bordes suaves */
--silver-light:   #c8d4de   /* acentos sobre fondos oscuros */
--white:          #ffffff
--off-white:      #f7f8fa   /* fondo de secciones alternas */
--gray-50:        #f0f2f5
--gray-100:       #e2e6eb   /* bordes */
--gray-300:       #9aa3ae   /* textos terciarios */
--gray-500:       #5c6672   /* textos secundarios */
--gray-700:       #2e3540   /* footer, texto oscuro */
--emergency:      #c0392b   /* urgencias dentales */
--success:        #1a7a4a   /* convenios, confirmaciones */
--gold:           #b8963e   /* avisos de integración futura */
```

### Tipografía
```
Display/Títulos: Cormorant Garamond (300, 400, 500, 600)
Cuerpo/UI:       DM Sans (300, 400, 500)
```

### Principios de diseño
- Mobile-first, pero desktop como prioridad de presentación
- Claro y limpio: fondo blanco/gris con detalles oscuros
- Fotos de instalaciones, equipos y espacios clínicos (sin personas de piel oscura — no es realista para el target de Punta Arenas)
- Videos de fondo en secciones hero y urgencias (Pexels, sin costo)
- Identidad patagónica: usar paisajes de Punta Arenas/Estrecho de Magallanes como elemento visual
- Accesible para adultos mayores: textos legibles, botones grandes, flujo claro

---

## 5. INFORMACIÓN DEL CENTRO

### Datos de contacto
```
Nombre:     OSTEOMED — Centro Médico y Dental
Dirección:  Vittorio Cuccuini 620, Punta Arenas, Región de Magallanes
Celular:    +56 9 9476 9217
Teléfono:   (61) 2 855 0527
Email:      osteomedmagallanes@gmail.com
WhatsApp:   +56 9 9476 9217
```

### Horarios de atención
```
Lunes a viernes:   09:30 – 12:00  /  15:00 – 21:00
Sábados:           15:30 – 18:30
Urgencias dentales: Viernes y sábados  23:00 – 05:00
```

### Especialidades
```
1. Medicina General
2. Traumatología (especialidad en pie y tobillo)
3. Nutrición (general y deportiva)
4. Psiquiatría
5. Odontología (incluye urgencias dentales nocturnas)
```

### Convenios (mostrar como referencia — confirmar los reales con el cliente)
```
- FONASA
- Isapre Banmédica
- Isapre Colmena
- Cruz Blanca
```

---

## 6. SECCIONES DEL SITIO (en orden)

### 6.1 Navbar
- Logo OSTEOMED (izquierda)
- Links: Especialidades, Horarios, Ubicación, Contacto
- Badge de urgencias dentales con punto parpadeante rojo
- Botón CTA "Agendar hora" (derecha)
- Sticky al hacer scroll
- Versión mobile: hamburger menu

### 6.2 Hero
- **Video de fondo** (Pexels, clínica moderna, equipos, sin personas problemáticas)
- Overlay oscuro con gradiente
- Título grande: "Tu salud en manos expertas"
- Subtítulo con descripción breve
- Botones: "Agendar hora" + "Ver especialidades"
- Cards flotantes (derecha): horario general, urgencias, dirección
- Tag: "Punta Arenas · Magallanes"

### 6.3 Barra de convenios
- Franja gris clara debajo del hero
- Logos/tags de Fonasa e Isapres
- Ícono de check verde por cada uno

### 6.4 Galería de instalaciones
- Grid asimétrico: 1 foto grande izquierda + 4 fotos pequeñas derecha
- Hover: overlay oscuro con label del espacio
- Labels: Recepción, Box dental, Equipos, Box consulta, Área dental
- Caption: "Fotos reales del centro se integran en fase de producción"

### 6.5 Especialidades
- Grid de 5 cards (una por especialidad)
- Cada card: foto de fondo temática + nombre + descripción breve
- Hover: elevación + sombra
- Click: navega a página de especialidad (implementar en siguiente fase)

### 6.6 Split — Odontología destacada
- Foto de sillón dental moderno (izquierda)
- Texto explicativo + botón "Ver prestaciones dentales" (derecha)

### 6.7 Split invertido — Identidad local
- Texto "Punta Arenas confía en OSTEOMED" (izquierda, fondo slate)
- Foto Patagonia/Estrecho de Magallanes (derecha)

### 6.8 Urgencias dentales
- Fondo slate con video sutil
- Badge rojo "Urgencias dentales"
- Título: "Estamos cuando más nos necesitas"
- Horario destacado en card: Viernes y sábados 23:00–05:00
- Botón: "Llamar ahora: +56 9 9476 9217"

### 6.9 Agenda / Formulario
- Formulario izquierda: nombre, teléfono, especialidad, fecha, horario, mensaje
- Botón principal: "Solicitar hora" (envía a backend/email)
- Botón secundario: "Agendar por WhatsApp" (abre wa.me con mensaje prellenado)
- Aviso dorado: "Próxima fase: Integración agenda propia · Google Calendar · API Dentalink"
- Derecha: card horarios + card contacto

### 6.10 Banda Patagonia
- Foto panorámica Estrecho de Magallanes o Torres del Paine
- Overlay oscuro
- Texto: "Tu salud, nuestra misión en el fin del mundo"
- "Punta Arenas · Región de Magallanes"

### 6.11 Footer
- Logo + descripción breve
- Columnas: Especialidades, Centro, Contacto
- Copyright 2025

---

## 7. SISTEMA DE AGENDAMIENTO

### Arquitectura (preparada para escalar)

El sistema usa un patrón de **conector intercambiable**. El formulario siempre llama a `agendaService.js`, que internamente decide qué backend usar según configuración. Esto permite cambiar el destino sin tocar el formulario.

```javascript
// src/services/agendaService.js
// HOY: envía por WhatsApp y/o email
// FUTURO: cambia el conector sin tocar el formulario

const AGENDA_MODE = import.meta.env.VITE_AGENDA_MODE || 'whatsapp'
// Opciones: 'whatsapp' | 'email' | 'supabase' | 'dentalink' | 'google_calendar'

export async function enviarSolicitud(formData) {
  switch (AGENDA_MODE) {
    case 'whatsapp':    return enviarWhatsApp(formData)
    case 'email':       return enviarEmail(formData)
    case 'supabase':    return enviarSupabase(formData)
    case 'dentalink':   return enviarDentalink(formData)
    case 'google_calendar': return enviarGoogleCalendar(formData)
  }
}
```

### Variables de entorno (.env)
```env
VITE_AGENDA_MODE=whatsapp
VITE_WHATSAPP_NUMBER=56994769217
VITE_EMAIL_DESTINO=osteomedmagallanes@gmail.com
VITE_SUPABASE_URL=           # activar en fase 2
VITE_SUPABASE_ANON_KEY=      # activar en fase 2
VITE_DENTALINK_API_KEY=       # activar cuando confirmen API
VITE_GOOGLE_CALENDAR_ID=      # activar en fase 3
```

### Fase 1 (actual): WhatsApp directo
- El formulario arma un mensaje prellenado
- Abre `https://wa.me/56994769217?text=...` con los datos del paciente
- Cero backend, funciona inmediatamente

### Fase 2 (próxima): Agenda propia + Supabase
- Tabla `solicitudes` en Supabase
- Panel de administración para gestionar horas
- Notificaciones por email al centro

### Fase 3 (futura): Integración API
- **Dentalink:** conectar cuando confirmen acceso a API
- **Google Calendar:** mini-app de agendamiento con disponibilidad en tiempo real
- El formulario no cambia — solo cambia el conector en `agendaService.js`

---

## 8. FUENTES DE IMÁGENES Y VIDEOS

### Videos (Pexels — gratuitos, sin copyright)
- Hero: clínica moderna, equipos médicos, espacios limpios
- Urgencias: instrumental dental, box de noche
- Buscar en: pexels.com/search/videos/dental+clinic

### Fotos stock (Unsplash — gratuitas)
- Especialidades: fotos temáticas por área médica
- Instalaciones: boxes, recepción, equipos
- Patagonia: paisajes del Estrecho de Magallanes, Torres del Paine
- Buscar en: unsplash.com

### Fotos reales del cliente (Cloudinary)
- En producción, reemplazar stock con fotos reales de OSTEOMED
- Subir a Cloudinary y usar URL optimizada

### Criterio de selección
- Sin personas de piel oscura (no es representativo del target en Punta Arenas)
- Preferir espacios, equipos, instalaciones
- Si hay personas: tez clara, contexto clínico neutro
- Paisajes patagónicos para identidad local

---

## 9. FLUJO DE DEPLOY

```
Desarrollo local → GitHub → Vercel (deploy automático)
```

1. Crear repositorio en GitHub
2. Conectar con Vercel
3. Configurar variables de entorno en Vercel
4. Cada push a `main` dispara deploy automático
5. URL temporal de Vercel para mostrar al cliente
6. Dominio final: el cliente elige y contrata — apunta los DNS a Vercel

---

## 10. INSTRUCCIONES PARA CLAUDE CODE

Al leer este archivo, construir el proyecto en este orden:

1. Configurar `tailwind.config.js` con la paleta de colores y tipografías
2. Configurar `index.css` con imports de Google Fonts y variables CSS
3. Crear `src/constants/data.js` con toda la data del centro
4. Crear `src/services/agendaService.js` con arquitectura de conectores
5. Crear componentes layout: `Navbar.jsx` y `Footer.jsx`
6. Crear secciones en orden: Hero → Convenios → Galeria → Especialidades → Urgencias → Agenda → Footer
7. Ensamblar en `Home.jsx` y `App.jsx`
8. Verificar responsive en mobile

**Reglas de código:**
- Siempre código completo, nunca fragmentos
- Un componente por archivo
- Comentarios en español
- Props tipadas con PropTypes o comentarios descriptivos
- Clases Tailwind, sin CSS inline salvo casos excepcionales
- Imágenes de Unsplash como placeholder (URL directa) hasta tener las reales

---

*Última actualización: Mayo 2025*
*Desarrollado para: OSTEOMED — Centro Médico y Dental, Punta Arenas*
