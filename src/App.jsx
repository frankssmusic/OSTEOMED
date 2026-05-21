App · JSX
// =============================================
// LANDING "PRÓXIMAMENTE" — TEMPORAL
// Cuando el sitio esté listo, reemplaza este archivo
// con el App.jsx original (respaldado como App.original.jsx)
// =============================================
 
import { useEffect, useState } from 'react'
 
export default function App() {
  const [visible, setVisible] = useState(false)
 
  useEffect(() => {
    // Fade in al cargar
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
 
  return (
    <div className="min-h-screen bg-[#3D4A5C] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      
      {/* Fondo sutil — gradiente radial */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(168,180,192,0.3) 0%, transparent 70%)'
        }}
      />
 
      {/* Contenido principal */}
      <div 
        className={`relative z-10 text-center max-w-lg mx-auto transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Logo */}
        <div className="mb-10">
          <img 
            src="/logo_osteomed.jpg" 
            alt="OSTEOMED — Centro Médico y Dental" 
            className="w-64 sm:w-80 mx-auto rounded-lg shadow-2xl"
          />
        </div>
 
        {/* Línea decorativa */}
        <div className="w-16 h-[1px] bg-[#a8b4c0] mx-auto mb-8" />
 
        {/* Mensaje principal */}
        <h1 
          className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Próximamente
        </h1>
        <p 
          className="text-[#c8d4de] text-base sm:text-lg md:text-xl font-light tracking-wide mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Un centro médico pensado para ti y tu familia
        </p>
 
        {/* Línea decorativa */}
        <div className="w-16 h-[1px] bg-[#a8b4c0] mx-auto mb-10" />
 
        {/* Datos de contacto */}
        <div 
          className="space-y-3 text-[#a8b4c0] text-sm sm:text-base"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {/* Dirección */}
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
            </svg>
            Vittorio Cuccuini 620, Punta Arenas
          </p>
 
          {/* Teléfonos */}
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="tel:+56994769217" className="hover:text-white transition-colors">+56 9 9476 9217</a>
            <span className="text-[#5c6672]">·</span>
            <a href="tel:+56612855027" className="hover:text-white transition-colors">28550527</a>
          </p>
 
          {/* Email */}
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:osteomedmagallanes@gmail.com" className="hover:text-white transition-colors">
              osteomedmagallanes@gmail.com
            </a>
          </p>
        </div>
 
        {/* WhatsApp button */}
        <div className="mt-10">
          <a
            href="https://wa.me/56994769217?text=Hola%2C%20quiero%20consultar%20por%20atención%20en%20OSTEOMED"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
 
        {/* Footer sutil */}
        <p 
          className="mt-12 text-[#5c6672] text-xs"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          OSTEOMED · Centro Médico y Dental · Punta Arenas, Chile
        </p>
      </div>
    </div>
  )
}
 