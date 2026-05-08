/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Jet Set — azul grisáceo elegante
        primary:     '#8397B1',   // Jet Set principal
        'primary-dark':  '#3D4A5C',   // slate oscuro (tono del logo)
        'primary-deeper': '#2a3545',  // footer y fondos profundos
        'primary-light': '#b8c4d4',   // acentos claros
        'primary-pale':  '#eef1f6',   // fondos de secciones alternas
        'primary-mid':   '#d0d9e8',   // bordes y separadores

        // Texto
        'text-dark':  '#1e2a38',  // casi negro con tono azul
        'text-mid':   '#4a5868',  // textos secundarios
        'text-light': '#8a99aa',  // textos terciarios

        // Utilidades
        emergency:   '#c0392b',   // urgencias (se mantiene)
        gold:        '#c9943a',   // avisos integración futura
        'off-white': '#f8f9fb',   // fondo general
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}