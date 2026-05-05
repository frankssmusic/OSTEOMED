// src/components/sections/PatagoniaBand.jsx
import React from 'react';

const PatagoniaBand = () => {
  return (
    <section className="relative text-white" style={{ minHeight: '420px', display: 'flex', alignItems: 'center' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhl87xrhg/image/upload/v1777944902/Punta_Arenas_htrgrr.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
        }}
      />
      {/* Overlay igual al anterior pero respetando los colores del cielo */}
      <div
        className="absolute inset-0 bg-slate"
        style={{ opacity: 0.55 }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 w-full">
        <h2
          className="font-bold mb-6"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          Tu salud, nuestra misión<br />en el fin del mundo
        </h2>
        <p
          style={{
            fontSize: '14px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}
        >
          Punta Arenas · Región de Magallanes · Chile
        </p>
      </div>
    </section>
  );
};

export default PatagoniaBand;