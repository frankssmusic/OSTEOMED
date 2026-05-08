// src/components/sections/Hero.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';

const VIDEO_1 = 'https://res.cloudinary.com/dhl87xrhg/video/upload/v1777942988/14218570_2160_3840_30fps_fwzgld.mp4';
const VIDEO_2 = 'https://res.cloudinary.com/dhl87xrhg/video/upload/v1777944424/trauma_tobillo_f9hub2.mp4';
const LOGO = 'https://res.cloudinary.com/dhl87xrhg/image/upload/v1777942986/logo_osteomed_tivogg.png';

// Duración exacta de cada video en segundos
const DURACIONES = { 1: 5, 2: 8 };

const Hero = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const activeVideoRef = useRef(1);
  const switchingRef = useRef(false);
  const [activeVideo, setActiveVideo] = useState(1);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;
    v1.load();
    v2.load();
    v1.play().catch(() => {});
  }, []);

  const switchVideo = () => {
    if (switchingRef.current) return;
    switchingRef.current = true;

    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    const current = activeVideoRef.current;
    const nextNum = current === 1 ? 2 : 1;
    const currentVid = current === 1 ? v1 : v2;
    const nextVid = current === 1 ? v2 : v1;

    const doSwitch = () => {
      currentVid.pause();
      currentVid.currentTime = 0;
      nextVid.currentTime = 0;
      nextVid.play().catch(() => {});
      activeVideoRef.current = nextNum;
      setActiveVideo(nextNum);
      setTimeout(() => {
        switchingRef.current = false;
      }, 900);
    };

    if (nextVid.readyState >= 3) {
      doSwitch();
    } else {
      nextVid.addEventListener('canplay', doSwitch, { once: true });
    }
  };

  const handleTimeUpdate1 = () => {
    const v1 = video1Ref.current;
    if (activeVideoRef.current === 1 && v1 && v1.currentTime >= DURACIONES[1]) {
      switchVideo();
    }
  };

  const handleTimeUpdate2 = () => {
    const v2 = video2Ref.current;
    if (activeVideoRef.current === 2 && v2 && v2.currentTime >= DURACIONES[2]) {
      switchVideo();
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        .video-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 800ms ease-in-out;
        }
        .video-active  { opacity: 1; z-index: 2; }
        .video-inactive { opacity: 0; z-index: 1; }
      `}</style>

      {/* Videos superpuestos */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={video1Ref}
          className={`video-layer ${activeVideo === 1 ? 'video-active' : 'video-inactive'}`}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate1}
        >
          <source src={VIDEO_1} type="video/mp4" />
        </video>
        <video
          ref={video2Ref}
          className={`video-layer ${activeVideo === 2 ? 'video-active' : 'video-inactive'}`}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate2}
        >
          <source src={VIDEO_2} type="video/mp4" />
        </video>
      </div>

      {/* Overlay — siempre encima de los videos */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 10,
          background: 'linear-gradient(110deg, rgba(42,53,69,0.93) 0%, rgba(42,53,69,0.82) 50%, rgba(42,53,69,0.45) 100%)'
        }}
      />

      {/* Contenido */}
      <div className="relative text-center text-white max-w-5xl mx-auto px-4" style={{ zIndex: 20 }}>

        {/* Logo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={LOGO}
            alt="OSTEOMED"
            style={{ height: '140px', objectFit: 'contain', filter: 'brightness(1.1)' }}
          />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6"
          style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Especialistas en tu salud
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-10"
          style={{ color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Centro Médico y Dental en Punta Arenas, Región de Magallanes
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <button
            className="px-8 py-3 rounded-md font-semibold transition-colors"
            style={{ background: '#fff', color: '#3D4A5C', fontFamily: 'Sora, sans-serif', fontSize: '15px' }}
          >
            Agendar Hora
          </button>
          <button
            className="px-8 py-3 rounded-md font-semibold transition-colors"
            style={{ border: '2px solid rgba(255,255,255,0.6)', color: '#fff', fontFamily: 'Sora, sans-serif', fontSize: '15px' }}
          >
            Ver Especialidades
          </button>
        </motion.div>

        {/* Cards flotantes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px', textAlign: 'left' }}>
            <Clock className="w-5 h-5 mb-2" style={{ color: '#b8c4d4' }} />
            <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Sora, sans-serif' }}>Horario General</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>Lun–Vie: 9:30–12:00 / 15:00–21:00</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>Sábados: 15:30–18:30</p>
          </div>
          <div style={{ background: 'rgba(192,57,43,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(192,57,43,0.5)', borderRadius: '12px', padding: '16px', textAlign: 'left' }}>
            <Phone className="w-5 h-5 mb-2" />
            <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Sora, sans-serif' }}>Urgencias Dentales</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}>Vie y Sáb: 23:00 – 05:00</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px', textAlign: 'left' }}>
            <MapPin className="w-5 h-5 mb-2" style={{ color: '#b8c4d4' }} />
            <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px', fontFamily: 'Sora, sans-serif' }}>Dirección</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>Vittorio Cuccuini 620</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>Punta Arenas, Magallanes</p>
          </div>
        </motion.div>
      </div>

      {/* Tag inferior */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 20 }}>
        <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 18px', borderRadius: '20px', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
          Punta Arenas · Magallanes · Chile
        </span>
      </div>
    </section>
  );
};

export default Hero;
