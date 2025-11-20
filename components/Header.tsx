// Componente Header - Barra de navegación principal
// En React/JavaScript normal sería: export default function Header() { ... }
// TypeScript añade tipado estático pero la sintaxis es similar

'use client' // Directiva de Next.js - indica que este componente usa interactividad del cliente
// Sin esto, Next.js intentaría renderizar en el servidor, pero necesitamos useState/useEffect

import Link from 'next/link' // Componente Link de Next.js (similar a <a> pero con navegación optimizada)
import { useState } from 'react' // Hook de React para estado local (igual que en JavaScript)

export default function Header() {
  // useState en TypeScript: TypeScript infiere el tipo automáticamente
  // En JavaScript sería igual: const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50 border-b border-secondary-darker">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - replicando exactamente el estilo del sitio original */}
          <Link href="/" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary hover:text-primary transition-colors">
            <span className="text-primary">Todo</span> <span className="text-text-primary">Goma</span>
          </Link>

          {/* Menú Desktop - estilo más parecido al original */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-text-secondary hover:text-primary font-medium transition-colors py-2">
              Home
            </Link>
            <Link href="/tienda" className="text-text-secondary hover:text-primary font-medium transition-colors py-2">
              Tienda
            </Link>
            <Link href="/quienes-somos" className="text-text-secondary hover:text-primary font-medium transition-colors py-2">
              Quiénes somos
            </Link>
            <Link href="/preguntas-frecuentes" className="text-text-secondary hover:text-primary font-medium transition-colors py-2">
              Preguntas Frecuentes
            </Link>
            <Link href="/contacto" className="text-text-secondary hover:text-primary font-medium transition-colors py-2">
              Contacto
            </Link>
          </nav>

          {/* Botón de búsqueda y menú móvil - estilo más profesional */}
          <div className="flex items-center space-x-3">
            {/* Botón de búsqueda - replicando el del sitio original */}
            <button className="p-2 hover:bg-secondary rounded-md transition-colors text-text-secondary hover:text-primary" aria-label="Buscar">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Botón de menú móvil */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors text-text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil - estilo mejorado */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-secondary-darker">
            <Link href="/" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-secondary font-medium transition-colors rounded-md" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/tienda" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-secondary font-medium transition-colors rounded-md" onClick={() => setIsMenuOpen(false)}>
              Tienda
            </Link>
            <Link href="/quienes-somos" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-secondary font-medium transition-colors rounded-md" onClick={() => setIsMenuOpen(false)}>
              Quiénes somos
            </Link>
            <Link href="/preguntas-frecuentes" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-secondary font-medium transition-colors rounded-md" onClick={() => setIsMenuOpen(false)}>
              Preguntas Frecuentes
            </Link>
            <Link href="/contacto" className="block py-3 px-2 text-text-secondary hover:text-primary hover:bg-secondary font-medium transition-colors rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

