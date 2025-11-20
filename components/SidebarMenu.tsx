// Componente SidebarMenu - Menú lateral como en el sitio original
// Se abre desde la izquierda con categorías y búsqueda

"use client"

import { useState } from "react"
import { X, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Props del componente - TypeScript requiere tipar las props
export interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
  categories?: Array<{ id: string; name: string; slug: string }>
}

export default function SidebarMenu({ isOpen, onClose, categories = [] }: SidebarMenuProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Categorías por defecto si no vienen de la BD
  const defaultCategories = [
    { id: "1", name: "Correas", slug: "correas" },
    { id: "2", name: "De todo y más", slug: "de-todo-y-mas" },
    { id: "3", name: "ECOCUR ARGENTINA", slug: "ecocur-argentina" },
    { id: "4", name: "Herramientas", slug: "herramientas" },
    { id: "5", name: "Jardin, accesorios y acoples", slug: "jardin-accesorios-acoples" },
    { id: "6", name: "Mangueras", slug: "mangueras" },
    { id: "7", name: "Perfiles de goma", slug: "perfiles-goma" },
    { id: "8", name: "Pisos de goma y PVC.", slug: "pisos-goma-pvc" },
    { id: "9", name: "Ruedas", slug: "ruedas" },
  ]

  const displayCategories = categories.length > 0 ? categories : defaultCategories

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/tienda?buscar=${encodeURIComponent(searchQuery)}`
      onClose()
    }
  }

  return (
    <>
      {/* Overlay - fondo oscuro cuando el menú está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar - diseño exacto del sitio original */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del sidebar - con hamburger y MENÚ */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Cerrar menú"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-lg font-bold text-[#1a2339]">MENÚ</h2>
            <button
              onClick={onClose}
              className="ml-auto p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Contenido del sidebar */}
          <div className="flex-1 overflow-y-auto">
            {/* Enlaces de navegación - estilo exacto del original */}
            <nav className="border-b border-gray-200">
              <ul className="divide-y divide-gray-100">
                <li>
                  <Link
                    href="/acceder"
                    onClick={onClose}
                    className="block px-6 py-4 text-[#1a2339] hover:bg-gray-50 transition-colors font-medium text-sm uppercase"
                  >
                    ACCEDER
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={onClose}
                    className="block px-6 py-4 text-[#1a2339] hover:bg-gray-50 transition-colors font-medium text-sm uppercase bg-gray-50"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quienes-somos"
                    onClick={onClose}
                    className="block px-6 py-4 text-[#1a2339] hover:bg-gray-50 transition-colors font-medium text-sm uppercase"
                  >
                    QUIÉNES SOMOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tienda"
                    onClick={onClose}
                    className="block px-6 py-4 text-[#1a2339] hover:bg-gray-50 transition-colors font-medium text-sm uppercase"
                  >
                    TIENDA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preguntas-frecuentes"
                    onClick={onClose}
                    className="block px-6 py-4 text-[#1a2339] hover:bg-gray-50 transition-colors font-medium text-sm uppercase"
                  >
                    PREGUNTAS FRECUENTES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    onClick={onClose}
                    className="block px-6 py-4 text-[#1a2339] hover:bg-gray-50 transition-colors font-medium text-sm uppercase"
                  >
                    CONTACTO
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Búsqueda - después del menú como en el original */}
            <div className="p-4 border-b border-gray-200">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-gray-300"
                />
                <Button
                  type="submit"
                  className="bg-[#1a2339] hover:bg-[#1a2339]/90 text-white px-4"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Categorías - estilo exacto del original */}
            <div className="p-4">
              <h3 className="text-xs font-bold text-gray-600 uppercase mb-4 tracking-wide">
                CATEGORÍAS DEL PRODUCTO
              </h3>
              <ul className="space-y-0">
                {displayCategories.map((category, index) => (
                  <li key={category.id}>
                    <Link
                      href={`/tienda?categoria=${category.slug}`}
                      onClick={onClose}
                      className={`block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${
                        category.slug === 'ruedas' ? 'bg-gray-50 font-semibold' : ''
                      }`}
                    >
                      {category.name} ({category.slug === 'correas' ? '5' : 
                        category.slug === 'de-todo-y-mas' ? '27' :
                        category.slug === 'ecocur-argentina' ? '1' :
                        category.slug === 'herramientas' ? '16' :
                        category.slug === 'jardin-accesorios-acoples' ? '17' :
                        category.slug === 'mangueras' ? '25' :
                        category.slug === 'perfiles-goma' ? '12' :
                        category.slug === 'pisos-goma-pvc' ? '5' :
                        category.slug === 'ruedas' ? '36' : '0'})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

