// Componente Header - Barra de navegación principal
// Adaptado para incluir sidebar menu como en el sitio original

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, Search } from 'lucide-react'
import SidebarMenu from './SidebarMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [categories, setCategories] = useState<Array<{ id: string; name: string; slug: string }>>([])

  // Cargar categorías desde la API
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => {
        // Si falla, usar categorías por defecto
        setCategories([
          { id: "1", name: "Correas", slug: "correas" },
          { id: "2", name: "De todo y más", slug: "de-todo-y-mas" },
          { id: "3", name: "ECOCUR ARGENTINA", slug: "ecocur-argentina" },
          { id: "4", name: "Herramientas", slug: "herramientas" },
          { id: "5", name: "Jardin, accesorios y acoples", slug: "jardin-accesorios-acoples" },
          { id: "6", name: "Mangueras", slug: "mangueras" },
          { id: "7", name: "Perfiles de goma", slug: "perfiles-goma" },
          { id: "8", name: "Pisos de goma y PVC.", slug: "pisos-goma-pvc" },
          { id: "9", name: "Ruedas", slug: "ruedas" },
        ])
      })
  }, [])

  return (
    <>
      <header className="bg-[#1a2339] text-white py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Botón de menú - abre sidebar */}
          <button
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
            <span className="text-sm font-light uppercase">Menu</span>
          </button>

          {/* Logo */}
          <Link href="/">
            <img
              src="https://ext.same-assets.com/736435192/906506225.png"
              alt="TODO GOMA"
              className="h-8"
              onError={(e) => {
                // Fallback si la imagen no carga
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling?.classList.remove('hidden')
              }}
            />
            <span className="hidden text-xl font-bold">Todo Goma</span>
          </Link>

          {/* Botón de búsqueda */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:opacity-80 transition-opacity"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de búsqueda desplegable */}
        {isSearchOpen && (
          <div className="mt-4 pb-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const query = (e.currentTarget.querySelector('input') as HTMLInputElement)?.value
                if (query) {
                  window.location.href = `/tienda?buscar=${encodeURIComponent(query)}`
                }
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Buscar por:"
                className="flex-1 px-4 py-2 rounded text-gray-900"
                autoFocus
              />
              <button
                type="submit"
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Sidebar Menu */}
      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        categories={categories}
      />
    </>
  )
}

